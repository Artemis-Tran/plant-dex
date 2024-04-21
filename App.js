import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts, InknutAntiqua_900Black, InknutAntiqua_400Black } from '@expo-google-fonts/inknut-antiqua';

import Navbar from './components/Navbar.js'

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_900Black,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  onCameraPress = () => {
    Alert.alert("Hello")
  }
  
  return (
      <SafeAreaView style={styles.safeArea}>
        <SafeAreaView style={styles.titleContainer}>
          <Text style={styles.title}>
            Touch Grass
          </Text>
        </SafeAreaView>
        <ImageBackground source={require('./assets/images/home_bg.png')} style={styles.homeBg}>
        
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity style={styles.touchable} onPress ={onCameraPress}>
            <Image source={require('./assets/images/camera.png')} style={styles.camera}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
              <Text style={styles.t2}>
                Snap!
              </Text>
              <Text style={styles.bodyText}>
                "Unplug and Recharge: 
                Take a picture of any plant to learn more about it! 
                All images get stored in your plant-a-dex! – Go Touch Some Grass!"
              </Text>
            </View>
      </View>
      <View style={{}}>
        <Navbar />
      </View>
      </SafeAreaView>
         
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex:1,
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#b9db92',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 2,
   
  },
  title: {
    fontSize: 24,
    fontFamily: "InknutAntiqua_900Black",
    marginTop: 20,
  },
  contentContainer: {
    flex:1,
  },
  bodyText: {
    fontSize: 9,
    fontFamily: "InknutAntiqua_900Black",
    // alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
    
  },
  bodyContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'flex-start',
    padding: 30
  },
  t2: {
    fontSize: 16,
    fontFamily: "InknutAntiqua_900Black",
    textAlign: 'center',
  },
  homeBg: {
    flex: 1,
    height: 400,
    resizeMode: 'cover',
  },
  camera: {
    // width: 150,
    // height: 150,
    alignSelf: 'center',
    
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "flex-start",
    
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
