import React, { useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import VIDEO_DATA from "@/constants/educational_content/VideoData";
import { Colors } from "@/constants/colors/Colors";

const VideoDetail: React.FC = () =>
{
    const { videoId } = useLocalSearchParams();
    const videoRef = useRef<Video>(null);
    const router = useRouter();

    const video = VIDEO_DATA.find((v) => v.id === parseInt(videoId as string));

    if (!video) 
        return (<View style={ styles.container }> <Text style={ { fontFamily: 'Montserrat-Regular', color: "red", marginTop: 20 } }> Video not found. </Text> </View>);


    // Play the video when the component mounts
    useEffect(() => { videoRef.current?.playAsync().catch((error) => console.error("Error attempting to play video:", error)) }, [video.videoUri]);

    // Handle playback status updates
    const onPlaybackStatusUpdate = (status: AVPlaybackStatus) =>
    {
        if (!status.isLoaded)
            status.error && console.error(`Encountered a fatal error during playback: ${ status.error }`);
        else if (status.didJustFinish)
            videoRef.current?.setStatusAsync({ positionMillis: 0, shouldPlay: false }).catch(error => console.error("Error resetting video position:", error)); // Video has finished, reset to start but do not play
    };

    return (
        <View style={ styles.container }>
            {/* Header with Back Button */ }
            <View style={ styles.header }>
                <TouchableOpacity
                    onPress={ () =>
                        router.replace("/drawer/educationalContent")
                    }
                >
                    <Ionicons name="arrow-back" size={ 24 } color={ Colors.text } />
                </TouchableOpacity>
                <Text style={ styles.title }>{ video.video_name }</Text>
            </View>

            {/* Video Player */ }
            <Video
                ref={ videoRef }
                source={ video.videoUri }
                style={ styles.video }
                useNativeControls
                resizeMode={ ResizeMode.CONTAIN }
                shouldPlay
                onError={ (error) => console.error("Video error:", error) }
                onPlaybackStatusUpdate={ onPlaybackStatusUpdate }
            />
        </View>
    );
};

export default VideoDetail;

const styles = StyleSheet.create(
{
    container: 
    {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: 
    {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop:
            Platform.OS === "android" ? StatusBar.currentHeight : 44, // Adjust for status bar
        paddingBottom: 16,
        backgroundColor: "#f5f5f5",
    },
    title: 
    {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 16,
        flex: 1,
        flexWrap: "wrap",
    },
    video: 
    {
        flex: 1,
        backgroundColor: "black",
    },
});
