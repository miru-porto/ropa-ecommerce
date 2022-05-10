import React from 'react';
import {Platform, View, Image, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MAPS} from '../constants/maps';

const ShippingScreen = ({location, style, children}) => {
  const mapPreviewUrl = location
    ? `${MAPS.URL}/staticmap?center=${location.latitude},${location.longitude}&zoom=${MAPS.ZOOM}&size=${MAPS.SIZE}&maptype=${MAPS.MAP_TYPE}&markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}&key=${MAPS.API_KEY}`
    : '';


  return (
    <View style={{...styles.MapPreview, ...style}}>
      {location ? (
        <Image style={styles.mapImage} source={{uri: mapPreviewUrl}} />
      ) : (
        children
      )}
    </View>)
 
};


const styles = StyleSheet.create({
    MapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
})

export default ShippingScreen;

/*
<Stack.Navigator
            initialRouteName='Order'
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
            <Stack.Screen name='Order' component={Order} />
        </Stack.Navigator>




*/
