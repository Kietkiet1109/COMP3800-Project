import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { firebase } from '../../credentials/firebase';
import { squareSandbox, squareProduction } from '../../credentials/square';
import { updateDoc, getDoc } from 'firebase/firestore';
import { Colors } from '../../constants/colors/Colors';
import Images from '../../constants/images/Images';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { authorize, showSettings, startPayment, type PaymentParameters, type PromptParameters, AdditionalPaymentMethodType, CurrencyCode, PromptMode } from 'mobile-payments-sdk-react-native';
import { PermissionsAndroid, Platform } from 'react-native';

const requestLocationPermission = async () =>
{
    try
    {
        if (Platform.OS === 'android')
        {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'App needs access to your location for pairing the payment device.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED)
            {
                console.log('Location permission granted');
                return true;
            } 
            else
            {
                console.log('Location permission denied');
                Alert.alert('Permission Denied', 'Location permission is required for pairing the payment device.');
                return false;
            }
        } 
        else
        {
            // Handle iOS permissions if needed
            return true;
        }
    } 
    catch (err)
    {
        console.warn(err);
        return false;
    }
};

const generateUUID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
{
    const r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

const authorizeSDK = async () => {
    try {
        await authorize(squareSandbox.token, squareSandbox.locationId);
        console.log('SDK Authorized');
        return true;
    } catch (error) {
        Alert.alert('Authorization Error', 'Authorization required. Please try again.');
        console.error(error);
        return false;
    }
};

const Subscription = () =>
{
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false); // false = Free by default

    useEffect(() =>
    {
        const fetchSubscriptionStatus = async () =>
        {
            const currentUser = firebase.auth().currentUser;
            if (currentUser)
            {
                const subscriptionRef = firebase.firestore().collection('subscriptions').doc(currentUser.uid);
                const doc = await getDoc(subscriptionRef);
                if (doc.exists())
                    setIsActive(doc.data()?.isActive || false) // Default to free tier if not set
            }
        };

        fetchSubscriptionStatus();
    }, []);

    const handleSubscriptionToggle = async (active: React.SetStateAction<boolean>) =>
    {
        const currentUser = firebase.auth().currentUser;
        if (!currentUser)
        {
            Alert.alert('Error', 'No user is currently logged in.');
            return;
        }

        const userId = currentUser.uid;
        const subscriptionRef = firebase.firestore().collection('subscriptions').doc(userId);

        setLoading(true);
        try
        {
            if (active === false)
            {
                await updateDoc(subscriptionRef, {
                    isActive: false,
                    subscriptionStartDate: null,
                    subscriptionEndDate: null,
                });
                setIsActive(false)
                Alert.alert('Success', 'You have unsubscribed from all plans.');
            } 
            else
            {
                // Request location permission before authorizing the SDK
                const hasLocationPermission = await requestLocationPermission();
                if (!hasLocationPermission)
                {
                    setLoading(false);
                    return;
                }

                // Authorize the SDK before subscribing or switching to a new tier
                const isAuthorized = await authorizeSDK();

                // Start payment process for subscription
                const paymentParameters = {
                    amountMoney: { amount: 5, currencyCode: CurrencyCode.CAD },
                    idempotencyKey: generateUUID(),
                    note: 'Subscription',
                };

                const promptParameters = 
                {
                    additionalMethods: [AdditionalPaymentMethodType.ALL],
                    mode: PromptMode.DEFAULT,
                };

                try
                {
                    const payment = await startPayment(paymentParameters, promptParameters);
                    console.log('Payment successful:', payment);

                    const startDate = new Date();
                    const endDate = new Date(startDate);
                    endDate.setDate(startDate.getDate() + 30);

                    await updateDoc(subscriptionRef, {
                        isActive: true,
                        subscriptionStartDate: startDate.toISOString(),
                        subscriptionEndDate: endDate.toISOString(),
                    });
                    setIsActive(true)
                    Alert.alert('Success', `Your Subscription has been activated!`);
                } 
                catch (error)
                {
                    Alert.alert('Payment Failed', error?.message || 'Failed to process payment.');
                    console.error(error);
                    return;
                }
            }
        } 
        catch (error)
        {
            Alert.alert('Error', 'Failed to update subscription. Please try again.');
            console.error(error);
        } 
        finally { setLoading(false); }
    };


    const handleShowSettings = async () =>
    {
        try
        {
            await showSettings();
        }
        catch (error)
        {
            Alert.alert('Error', 'Failed to show settings.');
            console.error(error);
        }
    }

    return (
        <ScrollView contentContainerStyle={ { padding: 16 } }>
            {/* Top Centered Logo */ }
            <View style={ { alignItems: 'center', marginBottom: 16 } }>
                <Animated.Image
                    entering={ FadeInUp.duration(1000).springify() }
                    source={ Images.logos.thumbnailGbTrp }
                    className="h-14 w-14 mb-2 self-center"
                    resizeMode="contain"
                />
            </View>

            {/* Subscription Card */}
            <View
                style={ {
                    backgroundColor: Colors.purpleBackground,
                    padding: 16,
                    borderRadius: 10,
                    marginBottom: 16,
                } }
            >
                <Text style={ { fontFamily: 'Montserrat-Bold', fontSize: 18 } }>
                    Premium Subscription
                </Text>
                <Text
                    style={ {
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 16,
                        marginVertical: 8,
                    } }
                >
                    Get access to all features with our premium plan. $10/month
                </Text>
                <TouchableOpacity
                    style={ {
                        backgroundColor:
                            loading || isActive === true ? Colors.disabledButton : Colors.primary[100],
                        //             backgroundColor: loading ? Colors.disabledButton : isActive === true ? Colors.disabledButton : Colors.primary[100], The above loading check seems to be the same as this.
                        paddingVertical: 12,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    } }
                    onPress={ () => handleSubscriptionToggle(true) }
                    disabled={ loading || isActive === true }
                >
                    <Text
                        style={ {
                            fontFamily: 'Montserrat-Regular',
                            color: Colors.buttonLabel,
                            fontSize: 16,
                        } }
                    >
                        { loading
                            ? 'Processing...'
                            : isActive === true
                                ? 'Subscribed to Premium'
                                : 'Subscribe to Premium' }
                    </Text>
                </TouchableOpacity>
            </View>

      {/* Unsubscribe Card */}
            <View
                style={ {
                    backgroundColor: Colors.purpleBackground,
                    padding: 16,
                    borderRadius: 10,
                    marginBottom: 16,
                } }
            >
                <Text style={ { fontFamily: 'Montserrat-Bold', fontSize: 18 } }>
                    Unsubscribe
                </Text>
                <Text
                    style={ {
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 16,
                        marginVertical: 8,
                    } }
                >
                    Cancel all subscriptions and revert to the Free Tier.
                </Text>
                <TouchableOpacity
                    style={ {
                        //             backgroundColor: loading ? Colors.disabledButton : Colors.primary[50],
                        backgroundColor: loading ? Colors.disabledButton : isActive === false ? Colors.disabledButton : Colors.primary[100],
                        paddingVertical: 12,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    } }
                    onPress={ () => handleSubscriptionToggle(false) }
                    disabled={ loading || isActive === false }
                >
                    <Text
                        style={ {
                            fontFamily: 'Montserrat-Regular',
                            color: Colors.buttonLabel,
                            fontSize: 16,
                        } }
                    >
                        { loading
                            ? 'Processing...'
                            : isActive === false
                                ? 'Already Unsubscribed'
                                : 'Unsubscribe' }
                    </Text>
                </TouchableOpacity>
            </View>
                
            {/* Settings Button */}
            <View
                style={ {
                    backgroundColor: Colors.purpleBackground,
                    padding: 16,
                    borderRadius: 10,
                    marginBottom: 16,
                } }
            >
                <Text style={ { fontFamily: 'Montserrat-Bold', fontSize: 18 } }>
                    Show Settings
                </Text>
                <Text
                    style={ {
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 16,
                        marginVertical: 8,
                    } }
                >
                    Access reader pairing and settings.
                </Text>
                <TouchableOpacity
                    style={ {
                        backgroundColor: loading ? Colors.disabledButton : Colors.primary[75],
                        paddingVertical: 12,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                    } }
                    onPress={ handleShowSettings }
                    disabled={ loading }
                >
                    <Text
                        style={ {
                            fontFamily: 'Montserrat-Regular',
                            color: Colors.buttonLabel,
                            fontSize: 16,
                        } }
                    >
                        { loading ? 'Processing...' : 'Show Settings' }
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

export default Subscription;
