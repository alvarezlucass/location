import { StyleSheet } from "react-native";
import paletColors from '../../utils/paletColors';

export const styles = StyleSheet.create({
    container: {
        borderBottomColor: paletColors.primary,
        borderBottomWidth: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: paletColors.background,
    },
    info: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
        color: paletColors.text,
        marginBottom: 10,
    },
    address: {
        fontSize: 14,
        color: paletColors.primary,
    },
});