import * as Location from "expo-location";

import { Alert, Button, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";

import MapPreview from '../componentsExports';
import paletColors from "../../utils/paletColors";
import {styles} from './stylesLocationSelector';

const LocationSelector = ({onLocation}) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [ pickedLocation, setPickedLocation ] = useState(null);
    const mapLocation = route?.params?.mapLocation;

    const onHandleGetLocation = async () => {
        const isLocationPermisssionGranted = await verifyPermissions();
        (!isLocationPermisssionGranted) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });
        const { latitude, longitude } = location.coords;
        setPickedLocation({ lat: latitude, lng: longitude});
        onLocation({ lat: latitude, lng: longitude});
    };
    useEffect(() => {
        if(mapLocation) {
            setPickedLocation(mapLocation);
            onLocation(mapLocation);
        }
    }, [mapLocation]);
    const verifyPermissions = async () => {
        const { status } = await Location.requestBackgroundPermissionsAsync();
        if(status !== 'granted') {
            Alert.alert('Permiso Insuficiente', 'Necesitamos permiso', [
                { text: 'ok'},
            ]);
            return false;
        }
        return true;
    };
    const onHandlePickLocation = async () => {
        navigation.navigate('Maps');
    };
  return (
    <View style={styles.container}>
        <MapPreview 
            location={pickedLocation}
            style={styles.preview}>                
        </MapPreview>
        <View style={ styles.containerActions}>
            <Button
                title="Obtener Ubicación"
                onPress={onHandleGetLocation}
                color={paletColors.primary}
            />
            <Button
                title="Elegir desde el Mapa"
                onPress={onHandlePickLocation}
                color={paletColors.secondary}
            />
        </View>
    </View>
  )
};

export default LocationSelector;