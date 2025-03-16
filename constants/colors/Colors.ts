/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

//Colors are updated with the required colors from the Granville Biomedical Color Palette
const tintColorLight = "#0a7ea4";
const tintColorDark = "#ffffff";

export const Colors = 
{
    text: "#000000",
    buttonLabel: "#ffffff",
    disabledButton: "#94989A",
    background: "#ffffff",
    purpleBackground: "#c0c0d5",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    // Granville Biomedical Color Palette
    primary: 
    {
        100: "#363C74", // RGB 54 60 116 (Pantone 5265C, 100%)
        75: "#5A5E8E", // RGB 90 93 142 (Pantone 5265C, 75%)
        50: "#8485AD", // RGB 132 133 173 (Pantone 5265C, 50%)
        25: "#B6B8D1", // RGB 132 133 173 (Pantone 5265C, 25%) -- Corrected after checking documentation
    },
    secondary: 
    {
        greyDark: "#5F6062", // RGB 95 96 98 (Pantone 425 C)
        greyLight: "#A7A9AC", // RGB 167 169 172 (Pantone 877 C)
        goldDark: "#A3926B", // RGB 163 145 97 (Pantone 871 C)
        goldLight: "#FFE072", // RGB 255 222 106 (Pantone 129 C)
    },
};
