import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/themes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerDisabled: {
        flex: 1,
        opacity: 0.5,
    },
    input : {
        borderBottomWidth: 1,
        borderBottomColor: colors.primaryColor,
        paddingVertical: 10,
    },
    messageText: {
        color: colors.errorMessage,
        fontSize: 12,
        marginVertical: 5,
    }
});