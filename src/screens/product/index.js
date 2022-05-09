import React from 'react'
import { useSelector, connect, useDispatch } from 'react-redux';
import { View, Text, Button, Image } from 'react-native'
import { colors } from '../../constants/themes';
import { styles } from './styles'
import { addItem } from '../../store/actions/cart.action';

const Products = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selectedProduct);
    const { name, description, price, tallas } = product;

    const handleAddToCart = () => dispatch(addItem(product));
    return (
        <View style={styles.container}>

            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>precio: ${price}</Text>
            <Text style={styles.text}>tallas: {tallas}</Text>
            <Button title="Order now" onPress={() => handleAddToCart()} color={colors.primaryColor}/>
        </View>
    )
}

export default connect()(Products)

/*
<Image source={image}
            style={{width: 400, height: 400}} />
*/