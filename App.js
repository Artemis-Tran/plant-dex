import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts, InknutAntiqua_900Black, InknutAntiqua_400Black } from '@expo-google-fonts/inknut-antiqua';

import Home from './components/Home';
import PlantDex from './components/PlantDex';
import CamView from './components/CamView';
import User from './components/User.js';
import Settings from './components/Settings.js';
import Gallery from './components/Gallery';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CamView" component={CamView} />
        <Stack.Screen name="PlantDex" component={PlantDex} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
  </NavigationContainer>
  );


}
