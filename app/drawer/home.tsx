import React from "react";
import { View, Text, Pressable, Dimensions, Image, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from '@/constants/colors/Colors';
import Images from '../../constants/images/Images';
import Products from "@/constants/products/Products";

const { width: screenWidth } = Dimensions.get("window");

interface ModelItem
{
    name: string;
    thumbnail: any | null; // Allows either an image source or null for placeholders
}

const Home = () =>
{
    const router = useRouter();

    const handleEducationalContent = (modelName: string) => router.push({ pathname: "/drawer/educationalContent", params: { model: modelName } });


    const handleSeeAllProducts = () => router.push("/drawer/products");
    

    // Model items with placeholders
    const models: ModelItem[] = [
        { name: Products.Episim, thumbnail: Images.products.thumbnails.episim },
        { name: Products.Iris, thumbnail: Images.products.thumbnails.iris },
        { name: Products.Venus, thumbnail: Images.products.thumbnails.venus },
//         { name: Products.Luna, thumbnail: Images.products.thumbnails.cervicalPathologyModel }, // currently unavailable
    ];


    const renderModelItem = (item: ModelItem) => (
        <Pressable
            onPress={ () => handleEducationalContent(item.name) }
            style=
            { {
                width: screenWidth * 0.4,
                height: screenWidth * 0.4,
                margin: 5,
                backgroundColor: item.thumbnail ? "transparent" : Colors.primary[25],
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
            } }
        >
            { item.thumbnail ? (
                <ImageBackground
                    source={ item.thumbnail }
                    resizeMode="cover"
                    style={ { width: "100%", height: "100%" } }
                    imageStyle={ { borderRadius: 10 } }
                >
                </ImageBackground>
            ) : (
                <Text style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[100], fontSize: 16, textAlign: "center" } }>
                    { item.name }
                </Text>
            ) }
        </Pressable>
    );

    return (
        <View className="flex-1 bg-gray-100 p-4" style={ { alignItems: "center" } }>
            {/* Centered Logo */ }
            <View style={ { alignItems: "center", marginTop: 24, marginBottom: 20 } }>
                <Image
                    source={ Images.logos.gbLogoEnRgbTrp }
                    style={ { width: 250, height: 150, resizeMode: "contain" } }
                />
            </View>

            {/* Educational Content Section */ }
            <Text className="text-3xl font-semibold mb-2" style={ { fontFamily: 'Montserrat-Regular', color: Colors.primary[100], textAlign: "center" } }>
                Educational Videos
            </Text>

            <View style={ { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: screenWidth * 0.9 } }>
                { models.map((item) => (
                    <View key={ item.name }>
                        { renderModelItem(item) }
                    </View>
                )) }
            </View>

            {/* Products Button */ }
            <View style={ { marginTop: 20, width: "100%", alignItems: "center" } }>
                <Pressable
                    onPress={ handleSeeAllProducts }
                    className="rounded-lg shadow-lg p-5"
                    style={ {
                        width: "80%",
                        paddingVertical: 15,
                        paddingHorizontal: 15,
                        backgroundColor: Colors.primary[100],
                    } }
                >
                    <Text style={ { fontFamily: 'Montserrat-Bold', textAlign: "center", color: "white", fontSize: 16 } }>
                        View Anatomical Models
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Home;
