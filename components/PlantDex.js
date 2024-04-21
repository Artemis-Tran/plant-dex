import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Alert } from 'react-native';
import React from 'react';
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

const PlantDex = ({navigation}) => {

let [fontsLoaded] = useFonts({
    InknutAntiqua_900Black,
    });

return(
<SafeAreaView style={styles.safeArea}>
    <View style={styles.titleContainer}>
        <Text style={styles.title}>Plant Dex</Text>
    </View>
    <View style={styles.container}>
      <Gallery images={images} />
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