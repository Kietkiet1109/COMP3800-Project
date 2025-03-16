// pages/Testimonials.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Testimonial from '../../components/testimonial';
import { TESTIMONIALS_DATA } from '../../constants/testimonials/TestimonialsData';
import Animated, { FadeInUp, Keyframe } from 'react-native-reanimated';
import Images from '@/constants/images/Images';


const Testimonials: React.FC = () =>
{
    return (
        <ScrollView className="p-4">
            {/* Logo Animation */ }
            <Animated.Image
                entering={ FadeInUp.duration(1000).springify() }
                source={ Images.logos.thumbnailGbTrp }
                className="h-14 w-14 mb-3 self-center"
                resizeMode="contain"
            />
            <ScrollView contentContainerStyle={ styles.container }>
                { TESTIMONIALS_DATA.map((testimonial) => (
                    <Testimonial
                        key={ testimonial.id }
                        name={ testimonial.name }
                        occupation={ testimonial.occupation }
                        description={ testimonial.description }
                        image={ testimonial.image }
                    />
                )) }
            </ScrollView>
        </ScrollView>
    );
};


const styles = StyleSheet.create({ container: { padding: 10, }});

export default Testimonials;
