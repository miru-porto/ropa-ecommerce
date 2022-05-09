import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../../constants/themes'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 10,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
        
    },
    touchable: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: colors.textColor
    }
})