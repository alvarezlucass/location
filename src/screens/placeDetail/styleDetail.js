import { StyleSheet } from "react-native";
import paletColors from "../../utils/paletColors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: '40%',
        minHeight: 300,
        width: '100%',
    },
    location: {
        margin: 20,
        width: '90%',
        maxWidth: 350,
        backgroundColor: paletColors.white,
        shadowColor: paletColors.black,
        shadowOffset: {white: 0, heigth: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
    },
    addressContainer: {
        padding: 20,
    },
    address: {
        color: paletColors.primary,
        textAlign: 'center',
    },
    map: {
        height: 300,
    },
});