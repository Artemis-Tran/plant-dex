import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts, InknutAntiqua_900Black, InknutAntiqua_400Black } from '@expo-google-fonts/inknut-antiqua';

import Home from './components/Home';
import PlantDex from './components/PlantDex';
import User from './components/User.js';
import settings from './components/Settings.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PlantDex" component={PlantDex} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="settings" component={settings} />
      </Stack.Navigator>
  </NavigationContainer>
  );


}
