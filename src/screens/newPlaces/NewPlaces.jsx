import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import { ImageSelector, LocationSelector } from '../../components/componentsExports'
import React, {useState} from 'react';
import { savePlace } 
import paletColors from '../../utils/paletColors';
import { styles } from './stylesNewPlaces';
import { useDispatch } from 'react-redux';

const NewPlaces = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [ image, setImage] = useState('');
    const [ location, setLocation] = useState(null);

    const onHandleChange = (text) => {
        setTitle(text);
    };
    const onHandleSubmit = () => {
        dispatch.apply(savePlace(title, image, location));
        NavigationPreloadManager.navigate('Places');
    };
    const onHandleImageSelected = (imageUrl) => {
        setImage(imageUrl);
    };
    const onHandleLocationSelected = (location) => {
        setLocation(location);
    };
  return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Titulo</Text>
            <TextInput
                style={styles.input}
                placeholder='Nueva Ubicación'
                onChangeText={onHandleChange}
                value={title}
            />
            <ImageSelector onImage={onHandleImageSelected} />
            <LocationSelector onLocation={onHandleLocationSelected} />
            <Button
                title='Guardar Dirección'
                color={paletColors.primary}
                onPress={onHandleSubmit}            
             />
        </View>
        
    </ScrollView>
  )
}

export default NewPlaces;