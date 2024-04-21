import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { useFonts, InknutAntiqua_900Black } from '@expo-google-fonts/inknut-antiqua';
import Navbar from './Navbar.js'

const Settings = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_900Black,
  });
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  return (
    <View style={styles.container}>
      <View style={styles.headerTextBox}>
      <Text style={styles.headerText}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Music')}>
        <Text style={styles.optionText}>Music:</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Friends')}>
        <Text style={styles.optionText}>Friends:</Text>
      </TouchableOpacity>
      <View style={styles.option}>
        <Text style={styles.optionText}>Notifications:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setNotificationsEnabled(previousState => !previousState)}
          value={notificationsEnabled}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Version: 1.01</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTextBox: { 
    backgroundColor: '#b9db92', 
    marginTop: 20, 
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'InknutAntiqua_900Black',
    padding: 10,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#e8f5e9',
    padding: 20,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 20,
    fontFamily: 'InknutAntiqua_900Black',
  },
  button: {
    backgroundColor: '#b9db92',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    width: '50%',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'InknutAntiqua_900Black',
  },
});

export default Settings;


    