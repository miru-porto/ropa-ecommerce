import React, {useState, useEffect, StyleSheet} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import colors from '../../../constants/colors';
import Geolocation from '@react-native-community/geolocation';
import ShippingScreen from '../../../navigation/shipping';
//import {useRoute} from '@react-navigation/native';

import {styles} from './styles';

const LocationSelector = ({onLocation}) => {
  const [pickedLocation, setPickedLocation] = useState(null);


  /*
  const route = useRoute();
  const mapLocation = route.params?.location;
  useEffect(() => {
    console.log('renderizando')
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);
  */
  
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const location = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setPickedLocation(location);
        onLocation(location);
      },
      error => {
        console.log('error', error);
        Alert.alert('Can not get location', 'Please try again later', [
          {text: 'Okay'},
        ]);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 3600000,
      },
    );
  };

  /*
  const pickLocation = () => {
    onMapLocation();
  };
  */
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <MapsPreview location={pickedLocation} style={styles.preview}>
          <Text>No location chosen yet!</Text>
        </MapsPreview>
      </View>
      {/*
      
      <View style={styles.action}>
        <Button
          title="Get Location"
          color={colors.primaryColor}
          onPress={() => getLocation()}
        />
       */}
        <Button
          title="Pick Location in Maps"
          color={colors.primaryColor}
          onPress={() => getLocation()}
        />
      
    </View>
  );
};

export default LocationSelector;