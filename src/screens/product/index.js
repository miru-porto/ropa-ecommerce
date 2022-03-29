import React from 'react'
import { useSelector, connect } from 'react-redux';
import { View, Text, Button } from 'react-native'
import { colors } from '../../constants/themes';
import { styles } from './styles'

const Products = ({ navigation, route }) => {
    const product = useSelector(state => state.products.selectedProduct);
    const { name, description, price, weight } = product;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>price: ${price}</Text>
            <Text style={styles.text}>weight: {weight}</Text>
            <Button title="Order now" onPress={() => null} color={colors.primaryColor}/>
        </View>
    )
}

export default connect()(Products)