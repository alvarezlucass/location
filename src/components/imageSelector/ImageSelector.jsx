import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Alert, Button, Image, Text, View } from 'react-native'
import React, { useState } from 'react';

import paletColors from '../../utils/paletColors';
import { styles } from './stylesImgSelector';

const ImageSelector = ({onImage}) => {
    const [pickedURl, setPickedUrl] = useState();
    
    const verifyPermissions = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if(status !== 'granted') {
            Alert.alert('Permiso denegado', 'Necesitamos permiso para utilizar la camara', [{text: 'Ok'}]);
            return false;
        }
        return true;
    };
    const onHandleTakeImage = async () => {
        const isCameraPermission = await verifyPermissions();
        if(!isCameraPermission) return;
        
        const image = await ImagePicker.launchCameraAsync({
            aspect: [16, 9],
            quality: 0.5,
        })
        setPickedUrl(image.uri);
        onImage(image.uri);
    }
  return (
    <View style = {styles.container}>
        <View style= {styles.preview}>
            {!pickedURl ? (
                <Text>No hay imagen seleccionada</Text>
            ) : (
                <Image style={styles.image} source={{ uri: pickedURl}} />
            )}
        </View>
        <Button 
            title='Tomar Foto'
            color={paletColors.secondary}
            onPress= {onHandleTakeImage}
        />
    </View>
  )
}

export default ImageSelector;