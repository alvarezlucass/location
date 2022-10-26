import { StyleSheet } from "react-native";
import paletColors from '../../utils/paletColors';

export const styles = StyleSheet.create({
    container: {

    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: paletColors.primary,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
