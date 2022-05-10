import React, {useState, useEffect} from "react";
import { View, Text, FlatList, Button, Modal, Pressable } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import CartItem from '../../components/molecules/cart-item/index'
import { confirmCart, removeItem } from "../../store/actions/cart.action";
import { styles } from "./styles";

const Cart = ({ navigation, goToShop }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const user = useSelector(state => state.auth.userId)
    const cart = useSelector(state => state.cart.cart)
    const [modalVisible, setModalVisible] = useState(false);

    const handleDeleteItem = (id) => dispatch(removeItem(id))
    useEffect(()=>{
        console.log(cart)
    }, [cart])

    useEffect(()=>{
        if(modalVisible){
           setTimeout(()=>{
            goToShop();
           }, 1000)
        }
    }, [modalVisible])
    //nuevo modal
    const handleConfirmCart = async  => {
        setModalVisible(false);
    dispatch(confirmCart(items, total, user, setModalVisible))
    //    setModalVisible(true);
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
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
      >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Tu compra fue realizada con éxito!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                                    >
                                <Text style={styles.textStyle}>Ok</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default connect()(Cart);