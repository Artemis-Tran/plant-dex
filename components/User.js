import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useFonts, InknutAntiqua_900Black } from '@expo-google-fonts/inknut-antiqua';
import Navbar from './Navbar.js'

const User = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_900Black,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View>
      <Image
        source={require('../assets/images/pp.png')} // Replace with actual path to your plant image
        style={styles.userImage}
      />
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Plants capture: 100</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.detailsTitle}>Friends: 10</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.detailsTitle}> ✛ Friends</Text>
        <Text></Text>

      </View>
      <View style = {styles.nav}>
      <Navbar navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#b9db92',
    padding: 20,
    alignItems: 'center',
    marginBotton:100
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'InknutAntiqua_900Black',
    
  },
  userImage: {
    width: '100%',
    height: 240,// Adjust the height accordingly
    resizeMode: 'contain',
    marginTop: 12,

  },
  detailsContainer: {
    padding: 20,
    paddingBottom: 20,
  },
  detailsTitle: {
    fontSize: 15,
    fontFamily: 'InknutAntiqua_900Black',
    textAlign: 'center',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'InknutAntiqua_900Black',
    marginTop: 10,
    textAlign: 'center',
  
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e8f5e9',
    paddingVertical: 10,
  },
  icon: {
    width: 50, // Adjust size accordingly
    height: 50, // Adjust size accordingly
    resizeMode: 'contain',
  },
  nav: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 15,
  },
});

export default User;


    