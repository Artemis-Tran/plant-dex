import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Alert, TouchableHighlight, ImageBackground, SafeAreaView} from 'react-native';
import plantsData from './components/plantsData.js'; 
import Buttons from './Buttons.js';
import { useFonts, InknutAntiqua_900Black, InknutAntiqua_400Black } from '@expo-google-fonts/inknut-antiqua';

export default function Plant() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_900Black,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  // Load the font and prepare SplashScreen
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from hiding
        await loadFonts(); // Load fonts
        setFontsLoaded(true); // Set font loading status
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync(); // Hide the splash screen
      }
    }

    prepare();
  }, []);
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUri} style={styles.plantImage} />
      <Text style={styles.plantName}>{item.name}</Text>
    </View>
  );
  

  if (!fontsLoaded) {
      return null;
  }

  return (
  <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Plant-a-Dex</Text>
            </View>
            <View style={styles.header2Container}>
                <Text style={styles.header2Text}>Plants Collected:</Text>
            </View>
            <Buttons />
            <FlatList
                data={plantsData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                     style={styles.itemContainer}
                       onPress={() => navigateToPlantDetails(item.id)} // Call the navigation function
                      >
                    <View style={styles.itemContainer}>
                        <Image source={item.imageUri} style={styles.plantImage} />
                        <Text style={styles.plantName}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                numColumns={3}
                style={styles.grid}
            />
   
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
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
 
  
});


