import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface TestimonialProps
{
    name: string;
    occupation: string;
    description: string;
    image: ImageSourcePropType;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, occupation, description, image }) => (
    <View style={ styles.card }>
        {/* Centered Profile Image */ }
        <View style={ styles.header }>
            <Image source={ image } style={ styles.image } />
        </View>

        {/* Centered Name, Occupation, and Description */ }
        <View style={ styles.footer }>
            <Text style={ styles.name }>{ name }</Text>
            <Text style={ styles.occupation }>{ occupation }</Text>
            <Text style={ styles.text }>{ description }</Text>
        </View>
    </View>
);

const styles = StyleSheet.create(
{
    card: 
    {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        // boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
    },
    header: 
    {
        alignItems: 'center',
    },
    image: 
    {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    text: 
    {
        fontFamily: 'Montserrat-Regular',
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        textAlign: 'left', // Changed from center to left align
    },
    footer: 
    {
        marginTop: 10,
        alignItems: 'center',
    },
    name: 
    {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        textAlign: 'center',
    },
    occupation: 
    {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});

export default Testimonial;
