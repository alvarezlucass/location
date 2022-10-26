import { StyleSheet } from "react-native";
import paletColors from '../../utils/paletColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        margin: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        borderBottomColor: paletColors.primary,
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 5,
    },
});