import React, { useState } from "react";
import { View, Text, Pressable, ImageBackground, FlatList, Modal, Dimensions, TouchableOpacity} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { PRODUCT_TITLE_IMAGES, PRODUCT_DATA } from "@/constants/products/ProductData";
import { Product, ProductBackgroundImage } from "@/constants/products/ProductData";
import { BlurView } from "expo-blur";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "@/constants/colors/Colors";
import Images from "@/constants/images/Images";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Products = () =>
{
    const [selectedItem, setSelectedItem] = useState<Product | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePress = (item: ProductBackgroundImage) =>
    {
        const product = PRODUCT_DATA.find(p => p.name === item.name);
        product && (setSelectedItem(product), setModalVisible(true));
    };


    const handleClose = () =>
    {
        setModalVisible(false);
        setSelectedItem(null);
        setCurrentImageIndex(0);
    };

    const renderImageItem = ({ item }: { item: any }) => (
        <ImageBackground
            source={ item }
            resizeMode="contain"
            style=
            { {
                width: screenWidth * 0.85,
                height: screenHeight * 0.6, // Increase height to take up more space
                maxWidth: screenWidth * 0.85,
                maxHeight: screenHeight * 0.8, // Adjust as needed for your modal height
                marginRight: 10,
            } }
            className="rounded-md mb-10"
        />
    );

    return (
        <View className="flex justify-center items-center">
            {/* Animated Logo */ }
            <Animated.Image
                entering={ FadeInUp.duration(1000).springify() }
                source={ Images.logos.thumbnailGbTrp }
                className="h-14 w-14 items-center mt-5 mb-5"
                resizeMode="contain"
            />
            <FlatList
                data={ PRODUCT_TITLE_IMAGES }
                contentContainerStyle={ { paddingBottom: 20 } }
                keyExtractor={ (item) => item.name }
                initialNumToRender={ 5 }
                renderItem={ ({ item }) => (
                    <Pressable
                        onPress={ () => handlePress(item) }
                        className="h-48 my-3 rounded-md overflow-hidden w-full justify-center items-center"
                    >
                        <ImageBackground
                            source={ item.image }
                            resizeMode="cover"
                            style={ { aspectRatio: 1.5 } }
                            className="flex-1 justify-center w-full"
                        ></ImageBackground>
                    </Pressable>
                ) }
            />

            <Modal
                visible={ modalVisible }
                animationType="fade"
                transparent={ true }
                onRequestClose={ handleClose }
            >
                <BlurView intensity={ 100 } tint="dark" style={ { flex: 1 } }>
                    <View className="flex-1 justify-center items-center">
                        <View
                            style={ {
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: 10,
                                width: screenWidth * 0.9,
                                height: screenHeight * 0.8, // Use more of the screen height
                            } }
                        >
                            { selectedItem && (
                                <>
                                    {/* "X" button at the top-right */ }
                                    <TouchableOpacity
                                        onPress={ handleClose }
                                        style={ {
                                            position: "absolute",
                                            top: 17,
                                            right: 20,
                                            zIndex: 1,
                                        } } // Ensure it's on top
                                    >
                                        <Text
                                            style={ {
                                                fontFamily: "Montserrat-Regular",
                                                fontSize: 24,
                                                color: Colors.text,
                                            } }
                                        >
                                            x
                                        </Text>
                                    </TouchableOpacity>

                                    {/* Animated Logo */ }
                                    <Animated.Image
                                        entering={ FadeInUp.duration(1000).springify() }
                                        source={ Images.logos.thumbnailGbTrp }
                                        className="h-12 w-12 items-center mt-0 mb-2 self-center"
                                        resizeMode="contain"
                                    />

                                    <FlatList
                                        data={ selectedItem.images }
                                        horizontal={ true }
                                        pagingEnabled={ false }
                                        snapToInterval={ screenWidth * 0.85 + 10 }
                                        decelerationRate="fast"
                                        showsHorizontalScrollIndicator={ true }
                                        persistentScrollbar={ true }
                                        renderItem={ renderImageItem }
                                        keyExtractor={ (item, index) => index.toString() }
                                        initialNumToRender={ 5 }
                                        style={ { marginTop: -50, marginBottom: -0, padding: 0 } }
                                        contentContainerStyle={ { marginTop: -0, padding: 0 } }
                                    />
                                    <ScrollView
                                        style={ { marginTop: 20, maxHeight: screenHeight * 0.3 } }
                                    >
                                        <Text
                                            className="text-xl mb-4"
                                            style={ { fontFamily: "Montserrat-Bold" } }
                                        >
                                            { selectedItem.name }
                                        </Text>
                                        <Text
                                            className="text-sm leading-6 text-left pb-16"
                                            style={ { fontFamily: "Montserrat-Regular" } }
                                        >
                                            { selectedItem.description }
                                        </Text>
                                    </ScrollView>
                                </>
                            ) }
                        </View>
                    </View>
                </BlurView>
            </Modal>
        </View>
    );
};

export default Products;
