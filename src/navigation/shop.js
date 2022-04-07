import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/themes'
import Home from '../screens/home/index'
import Category from '../screens/category/index'
import Product from '../screens/product/index'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
                headerTitleStyle: {
                    fontFamily: 'OpenSans-Bold',
                    fontSize: 17
                }
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }} 
            />
            <Stack.Screen name='Category'
                component={Category}
                options={({route}) => ({ title: route.params.name })}
            />
            <Stack.Screen name='Product' component={Product} options={({route}) => ({ title: route.params.name })} />
        </Stack.Navigator>
    )
}

export default ShopNavigator;