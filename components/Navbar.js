// Navbar.js
import React from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';

const Navbar = ({navigation}) => {
  onButtonPress = () => {
    Alert.alert("Hello World!")
  }
  onLogButtonPress = () => {
    navigation.navigate('PlantDex')
  }
  onHomeButtonPress = () => {
    navigation.navigate('Home')
  }
  
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.touchable} onPress={onHomeButtonPress}>
        <Image source={require('../assets/images/home.png')} style={styles.button}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={onLogButtonPress}>
        <Image source={require('../assets/images/log.png')} style={styles.button}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={onButtonPress}>
        <Image source={require('../assets/images/settings.png')} style={styles.button}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={onButtonPress}>
        <Image source={require('../assets/images/user.png')} style={styles.button}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    padding: 10,
    
    alignItems: 'center',
    justifyContent: 'space-evenly',
    

  },
  navText: {
    fontSize: 20,
    fontFamily: 'InknutAntiqua_900Black',
  },
  button: {
    height: 75,
    width: 75,

  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Navbar;
