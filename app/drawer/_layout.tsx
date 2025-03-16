import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet, Alert } from "react-native"; // Import View for wrapping
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer"; // Import necessary drawer components
import { firebase } from "../../credentials/firebase"; // Assuming Firebase is initialized
import { router } from "expo-router"; // Assuming router is available for navigation
import Images from "../../constants/images/Images"; // Import your Images object
import { Colors } from "../../constants/colors/Colors"; // Import Colors

export default function DrawerLayout()
{
    const isDarkMode = false; // Set to `false` for light mode, `true` for dark mode.

    const handleLogout = async () =>
    {
        try
        {
            await firebase.auth().signOut(); // Sign out the user
            Alert.alert("Success", "You have been logged out.");
            router.push("../Auth/Login"); // Redirect to login page
        }
        catch (error) { Alert.alert("Error", (error as any).message); }
    };

    return (
        <View style={ { flex: 1 } }>
            {/* Global StatusBar for all screens */ }
            <StatusBar
                style="dark" // Status bar style can stay dark for light mode
                backgroundColor="#FFFFFF"
            />

            {/* Custom Drawer Content */ }
            <Drawer
                drawerContent={ (drawerProps) => (
                    <DrawerContentScrollView { ...drawerProps }>
                        <View style={ { flex: 1, justifyContent: "space-between" } }>
                            {/* Logo at the Top */ }
                            <View style={ { alignItems: "center", marginTop: 40, marginBottom: 40 } }>
                                <Image
                                    source={ Images.logos.gbLogoEnRgbTrp }
                                    style={ styles.drawerImage }
                                />
                            </View>

                            {/* Drawer Items */ }
                            <View style={ { flex: 1 } }>
                                <DrawerItemList { ...drawerProps } />
                            </View>

                            {/* Logout Button at the Bottom */ }
                            <View >
                                <DrawerItem
                                    label="Logout"
                                    labelStyle={ { fontFamily: 'Montserrat-Bold', color: Colors.primary[100] } }
                                    icon={ ({ size }) => (
                                        <Ionicons name="log-out-outline" size={ size } color={ Colors.primary[100] } />
                                    ) }
                                    onPress={ handleLogout }
                                />
                            </View>
                        </View>
                    </DrawerContentScrollView>
                ) }
                screenOptions={ {
                    headerStyle: {
                        backgroundColor: Colors.primary[50],
                    },
                    headerTintColor: "white", // Set header text color to white
                    headerTitleAlign: "center", // Center align the title
                    headerTitleStyle: {
                        color: "white", // Ensure title text is white
                        fontFamily: 'Montserrat-Bold', // Use Montserrat-Bold font
                        fontSize: 18, // Set font size to 18
                    },
                    drawerLabelStyle: {
                        fontFamily: 'Montserrat-Bold', // Apply Montserrat to all drawer labels
                    },
                    headerStatusBarHeight: 0,
                    drawerStyle: {
                        backgroundColor: Colors.purpleBackground,
                    },
                    drawerActiveBackgroundColor: Colors.primary[50],
                    drawerInactiveBackgroundColor: "transparent",
                    drawerActiveTintColor: Colors.primary[100],
                    drawerInactiveTintColor: Colors.primary[100],
                } }
            >
                <Drawer.Screen
                    name="home"
                    options={ {
                        title: "",
                        drawerLabel: "Home",
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={ 22 } color={ color } />
                        ),
                    } }
                />
                <Drawer.Screen
                    name="educationalContent"
                    options={ {
                        title: "Educational Videos",
                        drawerLabel: "Educational Videos",
                        drawerIcon: ({ color }) => (
                            <Ionicons name="play-outline" size={ 22 } color={ color } />
                        ),
                    } }
                />
                <Drawer.Screen
                    name="products"
                    options={ {
                        title: "Anatomical Models",
                        drawerLabel: "Anatomical Models",
                        drawerIcon: ({ color }) => (
                            <Ionicons name="cube-outline" size={ 22 } color={ color } />
                        ),
                    } }
                />
                <Drawer.Screen
                    name="testimonials"
                    options={ {
                        title: "Testimonials",
                        drawerLabel: "Testimonials",
                        drawerIcon: ({ color }) => (
                            <Ionicons
                                name="chatbox-ellipses-outline"
                                size={ 22 }
                                color={ color }
                            />
                        ),
                    } }
                />
                <Drawer.Screen
                    name="ourStory"
                    options={ {
                        title: "Our Story",
                        drawerLabel: "Our Story",
                        drawerIcon: ({ color }) => (
                            <Ionicons
                                name="information-circle-outline"
                                size={ 22 }
                                color={ color }
                            />
                        ),
                    } }
                />
                <Drawer.Screen
                    name="ourTeam"
                    options={ {
                        title: "Our Team",
                        drawerLabel: "Our Team",
                        drawerIcon: ({ color }) => (
                            <Ionicons name="people-outline" size={ 22 } color={ color } />
                        ),
                    } }
                />
                <Drawer.Screen
                    name="subscription"
                    options={ {
                        title: "Subscription",
                        drawerLabel: "Subscription",
                        drawerIcon: ({ color }) => (
                            <Ionicons name="wallet-outline" size={ 22 } color={ color } />
                        ),
                    } }
                />
            </Drawer>
        </View>
    );
}

// Styles for the Image
const styles = StyleSheet.create({
    drawerImage: 
    {
        width: "100%",
        height: 175, // Adjust height to your preference
        resizeMode: "cover", // Adjust resize mode as needed
    },
});
