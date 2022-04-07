import React from 'react';
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './cart';
import OrderNavigator from './order';
import ShopNavigator from './shop';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/themes';

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <TabStack.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
                headerShown: false,
            }}
        >
            <TabStack.Screen
                name='ShopStack'
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'home' : 'home-outline' } size={20}  />
                    ),
                    title: 'Shop',
                }}
            />
            <TabStack.Screen
                name='CartStack'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'cart' : 'cart-outline' } size={20}  />
                    ),
                    title: 'Cart',
                }}
            />
            <TabStack.Screen
                name='OrderStack'
                component={OrderNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'list' : 'list-outline' } size={20}  />
                    ),
                    title: 'Order',
                }}
            />
        </TabStack.Navigator>
    )
}

export default MainNavigator;