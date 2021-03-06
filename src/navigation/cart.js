import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cart from '../screens/cart/index';
import {colors} from '../constants/themes';

const Stack = createNativeStackNavigator();

const CartNavigator = ({navigation}) => {
  const goToShop = () => navigation.navigate('ShopStack');

  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : colors.primaryColor,
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
          fontSize: 17,
        },
      }}>
      <Stack.Screen name="Cart">
        {props => <Cart {...props} goToShop={goToShop} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default CartNavigator;
