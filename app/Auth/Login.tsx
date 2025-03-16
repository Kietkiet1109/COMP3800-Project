import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Alert, Keyboard, SafeAreaView } from 'react-native';
import Animated, { FadeInDown, FadeInUp, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../../credentials/firebase';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors/Colors';
import Images from '../../constants/images/Images';

const Login = () =>
{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    // Shared value for opacity
    const titleOpacity = useSharedValue(1);
    const titleTranslateY = useSharedValue(0);
    const formTranslateY = useSharedValue(0); // Shared value for form's translateY

    useEffect(() =>
    {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
        {
            // Fade out and slide up the title
            titleOpacity.value = withTiming(0, { duration: 200 });
            titleTranslateY.value = withTiming(-10, { duration: 200 });
            formTranslateY.value = withTiming(-10, { duration: 500 }); // Adjust translateY for smooth slide up
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
        {
            // Fade in and slide down the title
            titleOpacity.value = withTiming(1, { duration: 300 });
            titleTranslateY.value = withTiming(0, { duration: 300 });
            formTranslateY.value = withTiming(0, { duration: 500 }); // Reset form position
        });

        return () =>
        {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [titleOpacity, titleTranslateY, formTranslateY]);

    // Animated style for title opacity
    const animatedTitleStyle = useAnimatedStyle(() => (
    {
        opacity: titleOpacity.value,
        transform: [{ translateY: titleTranslateY.value }],
    }));

    // Animated style for form translateY
    const animatedFormStyle = useAnimatedStyle(() => ({ transform: [{ translateY: formTranslateY.value }]}));

    const handleSignIn = async () =>
    {
        if (email === "" || password === "")        
            return Alert.alert("Error", "Please fill in all fields.");        
        setLoading(true);
        try
        {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            router.push(
            {
                pathname: '/drawer/home',
                params: { userEmail: email },
            });
        }
        catch (error: any)
        {
            console.log('Error', error.message);
            if (error.code === 'auth/user-not-found')
                Alert.alert('Account Not Found', 'No account found with this email.');
            else if (error.code === 'auth/invalid-email')
                Alert.alert('Invalid Email', 'Please ensure the email is correctly formatted');
            else
                Alert.alert('Incorrect Credentials', 'The email or password is incorrect.');
        } 
        finally { setLoading(false); }
    };

    return (
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <SafeAreaView style={ { flex: 1, backgroundColor: Colors.purpleBackground } }>
                <View className="flex-1 items-center mx-4 space-y-3 justify-center">
                    {/* Top Row: Back Button and Centered Logo */ }
                    <View className="absolute top-10 left-0 right-0 flex-row items-center justify-center px-4">
                        {/* Back Button */ }
                        <Animated.View entering={ FadeInUp.duration(1000).springify() } style={ { position: 'absolute', left: 16 } }>
                            <TouchableOpacity onPress={ () => router.push('/') }>
                                <Ionicons name="arrow-back" size={ 24 } color={ Colors.primary[100] } />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>

                    {/* Animated Logo */ }
                    <Animated.Image
                        entering={ FadeInUp.duration(1000).springify() }
                        source={ Images.logos.gbLogoEnRgbTrp }
                        className="h-64 w-64 items-center"
                    />
                    <Animated.View className="w-11/12 items-center" style={ animatedFormStyle }>
                        {/* Animated Email Input */ }
                        <Animated.View entering={ FadeInDown.duration(1000).springify() } className="w-11/12">
                            <View className="bg-black/5 p-5 rounded-2xl w-full mb-5">
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor={ Colors.primary[50] }
                                    value={ email }
                                    onChangeText={ (text) => setEmail(text) }
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[100] } }
                                    selectionColor={ Colors.primary[75] }
                                />
                            </View>
                        </Animated.View>

                        {/* Animated Password Input */ }
                        <Animated.View entering={ FadeInDown.delay(200).duration(1000).springify() } className="w-11/12">
                            <View className="bg-black/5 p-5 rounded-2xl w-full mb-5">
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor={ Colors.primary[50] }
                                    value={ password }
                                    onChangeText={ (text) => setPassword(text) }
                                    secureTextEntry
                                    autoCapitalize="none"
                                    style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[100] } }
                                    selectionColor={ Colors.primary[75] }
                                />
                            </View>
                        </Animated.View>

                        {/* Animated Login Button */ }
                        <Animated.View entering={ FadeInDown.delay(400).duration(1000).springify() } className="w-11/12">
                            <TouchableOpacity
                                className="w-full p-3 rounded-full"
                                style={ { backgroundColor: Colors.primary[100] } }
                                onPress={ handleSignIn }
                                disabled={ loading }
                            >
                                <Text className="text-lg font-semibold text-center" style={ { fontFamily: 'Montserrat-Regular', color: Colors.buttonLabel } }>
                                    { loading ? 'Loading...' : 'Login' }
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Animated Sign Up Link */ }
                        <Animated.View entering={ FadeInDown.delay(600).duration(1000).springify() }>
                            <View className="flex-row justify-center mt-2" style={ { alignItems: 'center' } }>
                                <Text style={ { fontFamily: 'Montserrat-Regular', fontSize: 16, color: Colors.primary[100] } }>
                                    Don't have an account yet?{ ' ' }
                                </Text>
                                <TouchableOpacity onPress={ () => router.push('./SignUp') }>
                                    <Text style={ { fontFamily: 'Montserrat-Bold', fontSize: 16, color: Colors.primary[100] } }>
                                        Sign up
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </Animated.View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Login;
