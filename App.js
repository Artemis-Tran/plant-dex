import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Alert, TouchableHighlight, ImageBackground} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import plantsData from './components/plantsData.js'; 


// Function to load the font
async function loadFonts() {
  await Font.loadAsync({
    'InknutAntiqua-Regular': require('./assets/fonts/Inknut_Antiqua/InknutAntiqua-Regular.ttf'),
    // Add other font weights if necessary
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const onPress = () => Alert.alert('Button pressed')
  
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
  
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerText}>Plant-a-Dex</Text>
      </View>
    
    <View style = {styles.header2Container}>
      <Text style = {styles.header2Text}>Plants Collected: </Text>
    </View>
    
    <View style={styles.footer}>
  <ImageBackground
    source={require('./assets/Img/home.png')} // Replace with the path to your image
    style={styles.button}
    resizeMode="cover" // or "stretch" to fill the button
  >
    <TouchableHighlight
      style={styles.buttonOverlay}
      onPress={onPress}
    >
      <Text style={styles.buttonText}></Text>
    </TouchableHighlight>
  </ImageBackground>
  <ImageBackground
    source={require('./assets/Img/log.png')} // Replace with the path to your image
    style={styles.button}
    resizeMode="cover" // or "stretch" to fill the button
  >
    <TouchableHighlight
      style={styles.buttonOverlay}
      onPress={() => Alert.alert('Button pressed')}
    >
    <Text style={styles.buttonText}></Text>
    </TouchableHighlight>
  </ImageBackground>
  <ImageBackground
    source={require('./assets/Img/settings.png')} // Replace with the path to your image
    style={styles.button}
    resizeMode="cover" // or "stretch" to fill the button
  >
    <TouchableHighlight
      style={styles.buttonOverlay}
      onPress={() => Alert.alert('Button pressed')}
    >
      <Text style={styles.buttonText}></Text>
    </TouchableHighlight>
  </ImageBackground>
  <ImageBackground
    source={require('./assets/Img/user.png')} // Replace with the path to your image
    style={styles.button}
    resizeMode="cover" // or "stretch" to fill the button
  >
    <TouchableHighlight
      style={styles.buttonOverlay}
      onPress={() => Alert.alert('Button pressed')}
    >
      <Text style={styles.buttonText}></Text>
    </TouchableHighlight>
  </ImageBackground>
 


  </View>

    <FlatList
      data={plantsData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
      style={styles.grid}
    />
      
      <StatusBar style="auto" />
    </View>
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
    padding: 24,
    borderWidth: 1,
    borderColor: '#68FF42',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#77dd77',
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'InknutAntiqua-Regular',
    fontWeight: 'bold',
    padding: 8,
  },
  header2Text: {
    fontSize: 12,
    fontFamily: 'InknutAntiqua-Regular',
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
  footer: {
    flexDirection: 'row', // Aligns buttons horizontally
    justifyContent: 'flex-start', // Evenly spaces the buttons across the footer
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0,
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
    padding: 37,
    borderRadius: 5,
  },
  
});
