import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Go to Category" onPress={() => {
                navigation.navigate('Category')
                
                }} />
        </View>
    )
}

export default Home