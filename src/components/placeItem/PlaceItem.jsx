import { Image, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from './stylesPlaceItem'

const PlaceItem = (id, title, image, onSelect, address) => {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={onSelect}>
        <Image
            style={styles.image}
            source={{uri : image}}
        />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>        
    </TouchableOpacity>
  )
};

export default PlaceItem;