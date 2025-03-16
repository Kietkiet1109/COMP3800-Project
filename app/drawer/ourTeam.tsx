// Our Team
import React from 'react';
import { Text, ScrollView } from 'react-native';
import Animated, { FadeInUp, Keyframe } from 'react-native-reanimated';
import { TEAM_MEMBERS } from '../../constants/company/Team';
import { Colors } from '@/constants/colors/Colors';
import Images from '@/constants/images/Images';

const OurTeam = () =>
{
    const createKeyframe = (delay: number) =>
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

            {/* Team Members Animation */ }
            { TEAM_MEMBERS.map((member, index) => (
                <Animated.View
                    key={ index }
                    entering={ createKeyframe(index * 200) }
                    className="flex-col items-center mb-8"
                >
                    <Animated.Image
                        source={ member.image }
                        className="w-48 h-48 rounded-full mb-4"
                        resizeMode="cover"
                    />
                    <Text
                        className="text-lg"
                        style={ { fontFamily: 'Montserrat-Bold', color: Colors.primary[100] } }
                    >
                        { member.name }
                    </Text>
                    <Text
                        className="text-sm"
                        style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[50] } }
                    >
                        { member.role }
                    </Text>
                </Animated.View>
            )) }
        </ScrollView>
    );
};

export default OurTeam;
