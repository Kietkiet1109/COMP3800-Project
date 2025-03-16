// Our Story
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Animated, { FadeInUp, Keyframe } from 'react-native-reanimated';
import { COMPANY_STORY } from '../../constants/company/CompanyStory';
import { Colors } from '@/constants/colors/Colors';
import Images from '@/constants/images/Images';

const OurStory = () =>
{
    const createUpwardKeyframe = (delay: number) =>
        new Keyframe(
        {
            0: { opacity: 0, transform: [{ translateY: 20 }] }, // Start slightly below
            100: { opacity: 1, transform: [{ translateY: 0 }] } // Move to original position
        }).delay(delay).duration(1000);


    return (
        <ScrollView className="p-4">
            {/* Logo Animation */ }
            <Animated.Image
                entering={ FadeInUp.duration(1000).springify() }
                source={ Images.logos.thumbnailGbTrp }
                className="h-14 w-14 mb-7 self-center"
                resizeMode="contain"
            />

            {/* Main Image Animation */ }
            <Animated.Image
                entering={ createUpwardKeyframe(200) } // Staggered delay for the main image
                source={ Images.ourStory.ourStory }
                className="h-64 w-72 rounded-lg self-center mb-4"
                resizeMode="contain"
            />

            {/* Story Text Animation */ }
            <Animated.View
                entering={ createUpwardKeyframe(400) } // Further delay for the text content
                className="mb-6 mx-6"
            >
                <Text
                    className="text-base leading-6"
                    style={ {
                        fontFamily: 'Montserrat-Regular',
                        color: Colors.primary[100],
                    } }
                >
                    { COMPANY_STORY.story }
                </Text>
            </Animated.View>
        </ScrollView>
    );
};

export default OurStory;
