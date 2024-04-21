// Navbar.js
import React from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';

const Navbar = () => {
  onButtonPress = () => {
    Alert.alert("Hello World!")
  }
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.touchable} onPress={onButtonPress}>
        <Image source={require('../assets/images/home.png')} style={styles.button}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={onButtonPress}>
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
    backgroundColor: '#b9db92',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 70,

  },
  navText: {
    fontSize: 20,
    fontFamily: 'InknutAntiqua_900Black',
  },
  button: {

  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Navbar;
