// Navbar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navText}>Navbar Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#b9db92',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  navText: {
    fontSize: 20,
    fontFamily: 'InknutAntiqua_900Black',
  },
});

export default Navbar;
