import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Link } from 'expo-router';
import { Colors } from '../constants/colors/Colors';
import Images from '../constants/images/Images';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Welcome()
{

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Italic': require('@/assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-BoldItalic': require('@/assets/fonts/Montserrat-BoldItalic.ttf'),
        'Montserrat-Light': require('@/assets/fonts/Montserrat-Light.ttf'),
    });

    const onLayoutRootView = useCallback(async () => fontsLoaded && await SplashScreen.hideAsync(), [fontsLoaded]);

    if (!fontsLoaded)    
        return null; // Render nothing while fonts are loading

    return (
        <View className="flex-1 justify-center items-center"
            style={ { backgroundColor: Colors.purpleBackground } }
            onLayout={ onLayoutRootView }
        >

            <StatusBar backgroundColor={ Colors.background } barStyle="dark-content" />

            {/* Back Button */ }
            <View className="absolute top-10 left-4">
                <Animated.Text entering={ FadeInDown.duration(1000).springify() } className="text-white font-bold tracking-wider text-5xl">
                    <TouchableOpacity onPress={ () => console.log('Back pressed') }>
                        <Ionicons name="arrow-back" size={ 24 } color={ Colors.purpleBackground } />
                    </TouchableOpacity>
                </Animated.Text>
            </View>

            {/* Animated Logo */ }
            <Animated.Image
                entering={ FadeInUp.duration(1000).springify() }
                source={ Images.logos.gbLogoEnRgbTrp }
                className="h-64 mb-10"
                resizeMode="contain"
            />

            <Animated.Text entering={ FadeInDown.duration(1200).springify() } className="text-lg text-center mb-1" style={ { fontFamily: 'Montserrat-Bold', color: Colors.primary[100] } }>
                Elevating Patient Education
            </Animated.Text>
            <Animated.Text entering={ FadeInDown.duration(1200).springify() } className="text-lg text-center mb-9" style={ { fontFamily: 'Montserrat-Bold', color: Colors.primary[100] } }>
                Advancing Women's Health
            </Animated.Text>
            <Animated.View entering={ FadeInDown.delay(400).duration(1000).springify() } style={ { alignItems: 'center', width: '100%' } }>
                <Link href="/Auth/Login" asChild>
                    <TouchableOpacity className="p-4 rounded-full w-3/4" style={ { backgroundColor: Colors.primary[100], alignSelf: 'center' } }>
                        <Text className="text-lg text-center font-semibold" style={ { fontFamily: 'Montserrat-Regular', color: Colors.buttonLabel } }>
                            Login
                        </Text>
                    </TouchableOpacity>
                </Link>
            </Animated.View>

            {/* Don't have an account yet? Sign up link */ }
            <Animated.View entering={ FadeInDown.delay(600).duration(1000).springify() } className="flex-row mt-4 justify-center items-center">
                <Text className="text-base" style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[100] } }>
                    Don't have an account yet?{ ' ' }
                </Text>
                <Link href="/Auth/SignUp" asChild>
                    <TouchableOpacity>
                        <Text className="text-base" style={ { fontFamily: 'Montserrat-Bold', color: Colors.primary[100] } }>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </Link>
            </Animated.View>
        </View>
    );
};
