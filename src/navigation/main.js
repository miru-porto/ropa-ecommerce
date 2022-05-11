import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartNavigator from './cart';
import OrderNavigator from './order';
import ShopNavigator from './shop';
import MapScreen from '../screens/MapScreen';
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
          tabBarLabel: 'Home',
          tabBarIcon: ({size}) => (
            <MaterialCommunityIcons name="home" color={colors.primaryColor} size={size} />
          ),
        }}
      />
      <TabStack.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={colors.primaryColor} size={size} />
          ),
        }}
      />
      <TabStack.Screen
        name="OrderStack"
        component={OrderNavigator}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="reorder" color={colors.primaryColor} size={20} />
          ),
        }}
      />
      <TabStack.Screen
        name="Shipping"
        component={MapScreen}
        options={{
          tabBarLabel: 'Shipping',

          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="truck" color={colors.primaryColor} size={20} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default MainNavigator;
