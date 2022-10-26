import { Image, View } from 'react-native';

import React from 'react';
import { URL_MAPS } from '../../utils/maps';
import { styles } from './stylesMapPreview';

const MapPreview = ({children, location, style}) => {
    const { lat, lng} = location || {};
    const MapPreviewUrl = location ? URL_MAPS(lat, lng) : '';
  return (
    <View style={{...styles.container, ...style}}>
        {location ? <Image style={styles.mapImage} source={{ uri: MapPreviewUrl}} /> : children}
    </View>
  )
};

export default MapPreview;