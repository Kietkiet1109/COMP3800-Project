import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Animated, { FadeInDown, FadeInUp, useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "../../credentials/firebase";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/colors/Colors";
import Images from "../../constants/images/Images";

const SignUp = () =>
{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter(); // For navigation

    // Shared values for animations
    const titleOpacity = useSharedValue(1);
    const titleTranslateY = useSharedValue(0);
    const formTranslateY = useSharedValue(0);

    useEffect(() =>
    {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () =>
        {
            titleOpacity.value = withTiming(0, { duration: 300 });
            titleTranslateY.value = withTiming(-40, { duration: 300 });
            formTranslateY.value = withTiming(-30, { duration: 300 });
        });

        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () =>
        {
            titleOpacity.value = withTiming(1, { duration: 300 });
            titleTranslateY.value = withTiming(0, { duration: 300 });
            formTranslateY.value = withTiming(0, { duration: 300 });
        });

        return () =>
        {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [titleOpacity, titleTranslateY, formTranslateY]);

    const animatedTitleStyle = useAnimatedStyle(() => ({
        opacity: titleOpacity.value,
        transform: [{ translateY: titleTranslateY.value }],
    }));

    const animatedFormStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: formTranslateY.value }],
    }));

    const handleSignUp = async () =>
    {
        if (email === "" || password === "" || confirmPassword === "")
        {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword)
        {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }

        setLoading(true);
        try
        {
            // Create user with Firebase Authentication
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const uid = userCredential.user?.uid;
            if (!uid)
                throw new Error("User ID not found.");

            // Default subscription info
            const subscriptionInfo =
            {
                userId: uid,                 // Store user's unique ID
                subscriptionStartDate: null, // Initially null
                subscriptionEndDate: null,   // Initially null
                isActive: false              // Default to inactive
            };

            // Save the subscription data to Firestore under the user's unique ID
            await firebase.firestore().collection('subscriptions').doc(uid).set(subscriptionInfo);

            console.log('Success', 'Registration successful! Subscription info saved. Redirecting to login.');
            router.push('./Login'); // Redirect to login page after registration
        }
        catch (error)
        {
            const firebaseError = error as firebase.FirebaseError;
            Alert.alert('Error', firebaseError.code === 'auth/email-already-in-use' ? 'This email address is already in use. Please use a different email.' : (error as Error).message);
        }
        finally { setLoading(false); }
    };

    return (
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <SafeAreaView style={ { flex: 1, backgroundColor: Colors.purpleBackground } }>
                <View className="flex-1 items-center mx-4 space-y-4 justify-center">

                    {/* Top Row: Back Button and Centered Logo */ }
                    <View className="absolute top-10 left-0 right-0 flex-row items-center justify-center px-4">
                        <Animated.View entering={ FadeInUp.duration(1000).springify() } style={ { position: "absolute", left: 16 } }>
                            <TouchableOpacity onPress={ () => router.push("/") }>
                                <Ionicons name="arrow-back" size={ 24 } color={ Colors.primary[100] } />
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Animated Logo */ }
                        <Animated.Image
                            entering={ FadeInUp.duration(1000).springify() }
                            source={ Images.logos.thumbnailGbTrp }
                            className="h-14 w-14 items-center"
                            resizeMode="contain"
                        />
                    </View>

                    {/* Animated Sign Up Title */ }
                    <Animated.View style={ animatedTitleStyle }>
                        <Text className="text-while font-bold tracking-wider text-4xl mb-5" style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[100] } }>
                            Sign up
                        </Text>
                    </Animated.View>

                    <Animated.View className="w-11/12 items-center" style={ animatedFormStyle }>
                        {/* Animated Email Input */ }
                        <Animated.View entering={ FadeInDown.duration(1000).springify() } className="w-11/12">
                            <View className="bg-black/5 p-5 rounded-2xl w-full mb-5">
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor={ Colors.primary[50] }
                                    value={ email }
                                    onChangeText={ setEmail }
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
                                    onChangeText={ setPassword }
                                    secureTextEntry
                                    autoCapitalize="none"
                                    style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[100] } }
                                    selectionColor={ Colors.primary[75] }
                                />
                            </View>
                        </Animated.View>

                        {/* Animated Confirm Password Input */ }
                        <Animated.View entering={ FadeInDown.delay(400).duration(1000).springify() } className="w-11/12">
                            <View className="bg-black/5 p-5 rounded-2xl w-full mb-4">
                                <TextInput
                                    placeholder="Confirm Password"
                                    placeholderTextColor={ Colors.primary[50] }
                                    value={ confirmPassword }
                                    onChangeText={ setConfirmPassword }
                                    secureTextEntry
                                    autoCapitalize="none"
                                    style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[100] } }
                                    selectionColor={ Colors.primary[75] }
                                />
                            </View>
                        </Animated.View>

                        {/* Animated Register Button */ }
                        <Animated.View entering={ FadeInDown.delay(600).duration(1000).springify() } className="w-11/12">
                            <TouchableOpacity
                                className="w-full p-3 rounded-full"
                                style={ { backgroundColor: Colors.primary[100] } }
                                onPress={ handleSignUp }
                                disabled={ loading }
                            >
                                <Text className="text-lg font-semibold text-center" style={ { fontFamily: 'Montserrat-Regular', color: Colors.buttonLabel } }>
                                    { loading ? "Signing up..." : "Sign up" }
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Animated Link to Login */ }
                        <Animated.View entering={ FadeInDown.delay(800).duration(1000).springify() }>
                            <View className="flex-row justify-center mt-2" style={ { alignItems: 'center' } }>
                                <Text style={ { fontFamily: 'Montserrat-Regular', fontSize: 16, color: Colors.primary[100] } }>
                                    Already have an account?{ ' ' }
                                </Text>
                                <TouchableOpacity onPress={ () => router.push('./Login') }>
                                    <Text style={ { fontFamily: 'Montserrat-Bold', fontSize: 16, color: Colors.primary[100] } }>
                                        Login
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

export default SignUp;
