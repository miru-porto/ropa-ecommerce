import React, {useState, useEffect, StyleSheet} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import colors from '../../../constants/colors';
import Geolocation from '@react-native-community/geolocation';
import ShippingScreen from '../../../navigation/shipping';

import {styles} from './styles';

const LocationSelector = ({onLocation}) => {
  const [pickedLocation, setPickedLocation] = useState(null);

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

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <MapsPreview location={pickedLocation} style={styles.preview}>
          <Text>No location chosen yet!</Text>
        </MapsPreview>
      </View>

      <Button
        title="Pick Location in Maps"
        color={colors.primaryColor}
        onPress={() => getLocation()}
      />
    </View>
  );
};

export default LocationSelector;
