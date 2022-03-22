import React from 'react'

import { View, Text, Button } from 'react-native'
import { styles } from './styles'

const Category = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category Screen</Text>
            <Button title="Go to Product" onPress={() => {
                navigation.navigate('Product')
                
                }} />
        </View>
    )
}

export default Category