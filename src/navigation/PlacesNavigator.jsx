import { Platform, TouchableOpacity } from 'react-native'

import IonicIcons from '@expo/vector-icons/Ionicons';
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import paletColors from '../utils/paletColors';

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? paletColors.primary : paletColors.secondary,
            },
            headerTintColor: paletColors.black,
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}>
        <Stack.Screen
            name='Places'
            component={PlaceListScreen}
            options={({navigation})=> ({
                title: 'Direcciones',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('NewPlaces')}>
                        <IonicIcons name='add-circle-outline' size={25} color={paletColors.black} />
                    </TouchableOpacity>
                )
            })} 
        />
        <Stack.Screen
            name='PlaceDetail'
            component={PlaceDetailScreen}
            options={{title: 'DEtalles de la Dirección'}}
        />
        <Stack.Screen 
            name='Maps'
            component={MapsScreen}
            options= {{ title: 'Mapa'}}
        />
    </Stack.Navigator>
  )
}

export default PlacesNavigator;