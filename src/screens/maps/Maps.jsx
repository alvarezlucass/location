import MapView, { Marker } from 'react-native-maps';
import React, { useLayoutEffect, useState } from 'react';

import IonicIcons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';
import paletColors from '../../utils/paletColors';
import { styles } from './mapsStyles';

const Maps = ({navigation}) => {
    const [selectedLocation, setSelectedLocation ] = useState(null);
    const InitialRegion = {
        latitude: 37.78,
        longitud: -122.43,
        latitudeDelta: 0.0922,
        longitudDelta: 0.0421,
    };
    const onHandlePickLocation = (event) => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitud,
        });
    };
    const onHandleSaveLocation = () => {
        if( selectedLocation) navigation.navigate('NewPlace', {mapLocation});
    };
    useLayoutEffect (() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                onPress={onHandleSaveLocation}>
                    <IonicIcons 
                        name='md-save-sharp'
                        size= {24}
                        color= {paletColors.black}
                />
                </TouchableOpacity>
            ),
        });
    }, [navigation, onHandleSaveLocation]);

  return (
    <MapView 
        initialRegion={initialRegion}
        style={styles.container}
        onPress={onHandlePickLocation}
        >
            {selectedLocation && (
                <Marker
                    title='Ubicación Seleccionada'
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng,
                    }} 
                />
            )}
    </MapView>
  );
};

export default Maps;