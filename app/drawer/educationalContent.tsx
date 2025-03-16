import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, Pressable, Image, Alert } from "react-native";
import Animated from 'react-native-reanimated';
import { useRouter, useLocalSearchParams } from "expo-router";
import { Chip, IconButton } from "react-native-paper";
import VIDEO_DATA from "@/constants/educational_content/VideoData";
import { firebase } from '../../credentials/firebase';
import { Colors } from "@/constants/colors/Colors";
import { useFocusEffect } from '@react-navigation/native';
import Products from "@/constants/products/Products";
import Categories from "@/constants/educational_content/Categories";
import { FadeInUp } from "react-native-reanimated";
import Images from "@/constants/images/Images";


const EducationalProducts: React.FC = () =>
{
    const router = useRouter();
    const { model: initialModelFilter } = useLocalSearchParams(); // Get model from navigation params
    const [modelFilter, setModelFilter] = useState<string | null>(null);
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
    const [filtersVisible, setFiltersVisible] = useState(true); // Set to true by default
    const [isActive, setIsActive] = useState(false);

    // This is the same as above, but will dynamically update if more products are added - order does matter in Products.ts
    const models = Object.values(Products);
    const categories = Object.values(Categories);

    // Set model filter based on incoming parameter
    useEffect(() =>
    {
        if (initialModelFilter)
            setModelFilter(initialModelFilter as string);
    }, [initialModelFilter]);

    // useFocusEffect to re-fetch the isValid whenever the screen is focused
    useFocusEffect(
        useCallback(() =>
        {
            const fetchUserSubscription = async () =>
            {
                const currentUser = firebase.auth().currentUser;
                if (!currentUser)
                {
                    Alert.alert("Error", "No user is currently logged in.");
                    return;
                }

                try
                {
                    const subscriptionRef = firebase
                        .firestore()
                        .collection("subscriptions")
                        .doc(currentUser.uid);
                    const doc = await subscriptionRef.get();
                    doc.exists ? setIsActive(doc.data()?.isActive || null) : Alert.alert("Error", "No variable isValid found.");

                }
                catch (error) { console.error("Error fetching subscription data:", error); }
            };

            fetchUserSubscription();
        }, []) // Empty dependency array ensures it runs every time the screen is focused
    );

    const filteredVideos = VIDEO_DATA.filter((video) =>
    {
        const matchesModel = !modelFilter || video.models.includes(modelFilter);
        const matchesCategory = !categoryFilter || video.video_category === categoryFilter;
        return matchesModel && matchesCategory;
    });

    return (
        <View style={ { flex: 1, padding: 16 } }>
            {/* Header with Right-Aligned Toggle Button */ }
            <View
                style={ {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative", // Needed for absolute positioning
                } }
            >
                {/* Centered Animated Image */ }
                <View
                    style={ {
                        position: "absolute",
                        left: "50%",
                        transform: [{ translateX: -28 }], // Centering adjustment (half of image width)
                    } }
                >
                    <Animated.Image
                        entering={ FadeInUp.duration(1000).springify() }
                        source={ Images.logos.thumbnailGbTrp }
                        className="h-14 w-14 items-center mt-5 mb-5"
                        resizeMode="contain"
                    />
                </View>

                {/* Right-Aligned IconButton */ }
                <IconButton
                    icon={ filtersVisible ? "filter" : "filter-off" }
                    size={ 24 }
                    onPress={ () => setFiltersVisible(!filtersVisible) }
                    style={ { marginLeft: "auto" } }
                />
            </View>

            {/* Conditionally Rendered Filter Section */ }
            { filtersVisible && (
                <View>
                    <Text style={ { fontFamily: "Montserrat-Bold", marginBottom: 4 } }>
                        Model Filter
                    </Text>
                    <View
                        style={ { flexDirection: "row", flexWrap: "wrap", marginBottom: 8 } }
                    >
                        { models.map((model) => (
                            <Chip
                                key={ model }
                                selected={ model === modelFilter }
                                onPress={ () =>
                                    setModelFilter(model === modelFilter ? null : model)
                                }
                                style={ {
                                    margin: 4,
                                    backgroundColor:
                                        model === modelFilter
                                            ? Colors.primary[50]
                                            : Colors.primary[25],
                                } }
                                textStyle={ {
                                    color:
                                        model === modelFilter
                                            ? Colors.buttonLabel
                                            : Colors.primary[100],
                                    fontFamily: "Montserrat-Regular",
                                } }
                            >
                                { model }
                            </Chip>
                        )) }
                    </View>

                    <Text style={ { fontFamily: "Montserrat-Bold", marginBottom: 4 } }>
                        Category Filter
                    </Text>
                    <View
                        style={ { flexDirection: "row", flexWrap: "wrap", marginBottom: 16 } }
                    >
                        { categories.map((category) => (
                            <Chip
                                key={ category }
                                selected={ category === categoryFilter }
                                onPress={ () =>
                                    setCategoryFilter(
                                        category === categoryFilter ? null : category
                                    )
                                }
                                style={ {
                                    margin: 4,
                                    backgroundColor:
                                        category === categoryFilter
                                            ? Colors.primary[75]
                                            : Colors.primary[25],
                                } }
                                textStyle={ {
                                    color:
                                        category === categoryFilter
                                            ? Colors.buttonLabel
                                            : Colors.primary[100],
                                    fontFamily: "Montserrat-Regular",
                                } }
                            >
                                { category }
                            </Chip>
                        )) }
                    </View>
                </View>
            ) }

            {/* Video List */ }
            <FlatList
                data={ filteredVideos }
                keyExtractor={ (item) => item.id.toString() }
                renderItem={ ({ item }) => (
                    <Pressable
                        onPress={ () =>
                        {
                            item.isPremium && !isActive 
                                ? Alert.alert("Access Restricted", "Upgrade your subscription to access this content.")
                                : router.push(
                                    {
                                        pathname: "../VideoDetail",
                                        params: {
                                            model_name: item.models.join(", "),
                                            video_category: item.video_category,
                                            videoId: item.id.toString(),
                                        },
                                    });
                        } }
                        style=
                        { {
                            marginVertical: 8,
                            backgroundColor: "#fff",
                            borderRadius: 8,
                            overflow: "hidden",
                            elevation: 2,
                        } }
                    >
                        <Image
                            source={ item.thumbnail }
                            style={ { width: "100%", height: 200 } }
                        />
                        <View style={ { padding: 8 } }>
                            <Text
                                style={ {
                                    fontFamily: "Montserrat-Bold",
                                    fontSize: 18,
                                    color: Colors.primary[100],
                                } }
                            >
                                { item.video_name }{ " " }
                                <Text
                                    style={ {
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: 14,
                                        color: Colors.primary[50],
                                    } }
                                >
                                    ({ item.models.join(", ") })
                                </Text>
                            </Text>
                            <Text
                                style={ {
                                    fontFamily: "Montserrat-Regular",
                                    fontSize: 14,
                                    color: "#666",
                                } }
                            >
                                { item.video_category }
                            </Text>
                            { item.isPremium && !isActive && (
                                <Text style={ { fontFamily: "Montserrat-Bold", color: "red" } }>
                                    Premium Content
                                </Text>
                            ) }
                        </View>
                    </Pressable>
                ) }
            />
        </View>
    );
};

export default EducationalProducts;
