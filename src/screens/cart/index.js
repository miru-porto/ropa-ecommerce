import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import CartItem from '../../components/molecules/cart-item/index'
import { confirmCart, removeItem } from "../../store/actions/cart.action";
import { styles } from "./styles";

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const user = useSelector(state => state.auth.userId)
    
    const handleDeleteItem = (id) => dispatch(removeItem(id))

    const handleConfirmCart = () => {
        dispatch(confirmCart(items, total, user))
    }
    
    const renderItem = ({ item }) => <CartItem item={item} onDelete={handleDeleteItem} />

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
            <Button title="Confirm" onPress={() => handleConfirmCart()} color='#212121'/>
            <View style={styles.footer}>
                <Text style={styles.total}>Total:</Text>
                <Text style={styles.totalPrice}>${total}</Text>
            </View>
        </View>
    )
}

export default connect()(Cart);