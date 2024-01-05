import React from "react"
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from "react-native"

export default function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark"

    return (
        <View style={styles.container}>
            <Text 
                style={isDarkMode ? styles.darkText : styles.whiteText}
            >
                Hello
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        // paddingHorizontal: 20,
    },
    whiteText: {
        color: "#fff",
    },
    darkText: {
        color: "#000",
    },
})