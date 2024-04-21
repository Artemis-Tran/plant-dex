import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const images = [
  { source:require('../assets/images/plant.png') },
  { source:require('../assets/images/pic1.png') },
  { source:require('../assets/images/plant.png') },
  { source:require('../assets/images/plant.png') },
  { source:require('../assets/images/plant.png') },
  { source:require('../assets/images/plant.png') },
];

const Gallery = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
    aspectRatio: 1, // Ensures that each item is square-shaped
    height: 100, // Set a fixed height for the grid items
  },
});

export default Gallery;
