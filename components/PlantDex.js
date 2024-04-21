import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Alert } from 'react-native';
import React from 'react';
import { useFonts, InknutAntiqua_900Black, InknutAntiqua_400Black } from '@expo-google-fonts/inknut-antiqua';
import Navbar from "./Navbar";

const PlantDex = ({navigation}) => {
    
return(
<SafeAreaView style={styles.safeArea}>
    <Text style={styles.title}>Hello World!</Text>
    <Navbar navigation={navigation} />
</SafeAreaView>

);
}

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#b9db92"
        
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      header: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#68FF42',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#77dd77',
      },
      headerText: {
        fontSize: 25,
        fontFamily: 'InknutAntiqua_900Black',
        fontWeight: 'bold',
        padding: 8,
        marginTop: 12,
      },
      header2Text: {
        fontSize: 12,
        fontFamily: 'InknutAntiqua_900Black',
        fontWeight: 'bold',
        padding: 6, 
        textAlign: 'left',
      },
      header2Container: {
        alignItems: 'flex-start', // Aligns children to the start (left)
        width: '100%', // Ensures the container fills the width of its parent
        paddingHorizontal: 10,
      },
    
      grid: {
        flex: 1,
        alignSelf: 'stretch',
      },
      itemContainer: {
        // Adjust your item container styling
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        height: 100, 
      },
      plantImage: {
        width: 90, 
        height: 90, 
        marginTop: 10,
      },
      plantName: {
        // Style for the plant name if needed
      },
})
export default PlantDex;