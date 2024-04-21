import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts, InknutAntiqua_900Black, InknutAntiqua_400Black } from '@expo-google-fonts/inknut-antiqua';

import Navbar from './Navbar.js'

export default function Home({navigation}) {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_900Black,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  onCameraPress = () => {
//    Alert.alert("Hello")
      navigation.navigate("CamView");
  }
  
  return (
      <SafeAreaView style={styles.safeArea}>
        <SafeAreaView style={styles.titleContainer}>
          <Text style={styles.title}>
            Touch Grass
          </Text>
        </SafeAreaView>
        
      <View style={styles.contentContainer}>
        
      <ImageBackground source={require('../assets/images/home_bg.png')} style={styles.homeBg}>
        </ImageBackground>
        <View style={styles.cameraContainer}>
          <TouchableOpacity style={styles.touchable} onPress ={onCameraPress}>
            <Image source={require('../assets/images/camera.png')} style={styles.camera}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
              {/* <Text style={styles.t2}>
                Snap!
              </Text> */}
              <Text style={styles.bodyText}>
                "Unplug and Recharge: 
                Take a picture of any plant to learn more about it! 
                All images get stored in your plant dex! – Go Touch Some Grass!"
              </Text>
            </View>
      </View>
      <Navbar navigation={navigation} />
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
    padding: 20,
    
  },
  title: {
    fontSize: 30,
    fontFamily: 'InknutAntiqua_900Black',
    padding: 10,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  bodyText: {
    fontSize: 10,
    fontFamily: "InknutAntiqua_900Black",
    // alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
    
  },
  bodyContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingLeft: 20,
    // paddingTop: 5,
    // paddingBottom: 1,
    marginBottom: 5,
  },
  t2: {
    fontSize: 16,
    fontFamily: "InknutAntiqua_900Black",
    textAlign: 'center',
  },
  homeBg: {
    flex:4,
    height: 380,
    resizeMode: 'contain',
  },
  camera: {
    alignSelf: 'center',
    height: 200,
    width: 200,

  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  touchable: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: '#fff'
  },
});
