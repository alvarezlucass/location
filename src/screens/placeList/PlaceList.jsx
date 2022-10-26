import { FlatList, Text, View } from 'react-native';
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { PlaceItem } from '../../components/componentsExports';
import { loadPlaces } from '../../store/placeSlice';
import { styles } from './stylePlaceList';

const PlaceList = () => {
  const dispatch= useDispatch();
  const places = useSelector((state) => state.place.places);

  useEffect(()=> {
    dispatch(loadPlaces());
  }, [dispatch]);

  const renderItem = ({item}) => (
    <PlaceItem
      {...item}
      onSelect= {() => NavigationPreloadManager.navigate('PlaceDetail', { placeId: item.id})}
    />
  );
  const ListEmpyComponent = () => (
    <View style={ styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay Lugares</Text>
    </View>
  );
  return (
    <FlatList
      style={styles.container}
      data={palces}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmpyComponent}
     />
  );
};

export default PlaceList;