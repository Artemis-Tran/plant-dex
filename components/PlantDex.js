import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts, InknutAntiqua_900Black} from '@expo-google-fonts/inknut-antiqua';

import Gallery from "./Gallery"
import Navbar from "./Navbar";

const images = [
    { source:require('../assets/images/plant.png') },
    { source:require('../assets/images/pic1.png') },
    { source:require('../assets/images/plant.png') },
    { source:require('../assets/images/plant.png') },
    { source:require('../assets/images/plant.png') },
    { source:require('../assets/images/plant.png') },
  ];

const PlantDex = ({route, navigation}) => {
  const navState = navigation.getState();
  console.log(navState);
  console.log(JSON.stringify(navState, null, 2));
  console.log(route.params)
  // const newImageUri = navigation?.params?.newImageUri || '../assets/images/plant.png';
  const { newImageUri } = route.params || { newImageUri: '../assets/images/plant.png' };
  console.log('SUCCESS', newImageUri);

  // Use state to manage the images array
  const [galleryImages, setGalleryImages] = useState([
    require('../assets/images/plant.png'),
    require('../assets/images/pic1.png'),
    require('../assets/images/plant.png'),
    require('../assets/images/plant.png'),
    require('../assets/images/plant.png'),
    require('../assets/images/plant.png')
  ]);

  useEffect(() => {
    // Check if the newImageUri parameter is passed
    if (route.params?.newImageUri) {
        // Replace the first image or any other logic you prefer
        setGalleryImages(prevImages => [
            { source: { uri: route.params.newImageUri } },
            ...prevImages.slice(1)
        ]);
    }
}, [route.params]);

let [fontsLoaded] = useFonts({
    InknutAntiqua_900Black,
    });

return(
<SafeAreaView style={styles.safeArea}>
    <View style={styles.titleContainer}>
        <Text style={styles.title}>Plant Dex</Text>
    </View>
    <View>
        <Text style={styles.des}>Plants Capture:</Text>
    </View>
    <View style={styles.container}>
      <Gallery images={galleryImages} />
    </View>
    <View style={styles.nav}> 
        <Navbar navigation={navigation} />
    </View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
    },
    container: {
        flex: 8, // Takes the majority of the space
        alignItems: 'center',
        justifyContent: 'center',
    },
    des: {
      fontSize: 15,
      fontFamily: 'InknutAntiqua_900Black',
    },
    titleContainer: {
        backgroundColor: '#b9db92',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: 'InknutAntiqua_900Black',
        padding: 10,
    },
    nav: {
        justifyContent: 'flex-end',
        paddingTop: 15,
    }

});

export default PlantDex;