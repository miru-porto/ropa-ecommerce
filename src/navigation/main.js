import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CartNavigator from './cart';
import OrderNavigator from './order';
import ShopNavigator from './shop';
import MapScreen from '../screens/MapScreen';
//import IonicIcons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/themes';

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="ShopStack"
      screenOptions={{
        headerShown: false,
      }}>
      <TabStack.Screen
        name="ShopStack"
        component={ShopNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={'green'} size={size} />
          ),
          title: 'Shop',
        }}
      />
      <TabStack.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'green'} size={size} />
          ),
          title: 'Cart',
        }}
      />
      <TabStack.Screen
        name="OrderStack"
        component={OrderNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="reorder" color={'green'} size={20} />
          ),
          title: 'Order',
        }}
      />
      <TabStack.Screen
        name="Shipping"
        component={MapScreen}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({focused}) => (
            //<IonicIcons name={focused ? 'list' : 'bicycle-sharp'} size={20} />
            <MaterialCommunityIcons name="truck" color={'green'} size={20} />
          ),
          title: 'Shipping',
        }}
      />
    </TabStack.Navigator>
  );
};

export default MainNavigator;
