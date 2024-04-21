import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useFonts, InknutAntiqua_900Black, InknutAntiqua_400Black } from '@expo-google-fonts/inknut-antiqua';

const PlantInfoScreen = () => {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_900Black,
    InknutAntiqua_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Plant I</Text>
      </View>
      <View>
      <Image
        source={require('./assets/images/plant.png')} // Replace with actual path to your plant image
        style={styles.plantImage}
      />
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Summary of Plant:</Text>
        <Text style={styles.detailsText}>This is a great plant</Text>

        <Text style={styles.detailsTitle}>Native to:</Text>
        <Text style={styles.detailsText}>Ur mother</Text>

        <Text style={styles.detailsTitle}>Care:</Text>
        <Text style={styles.detailsText}>Food</Text>

        <Text style={styles.detailsTitle}>Fun Facts:</Text>
        <Text style={styles.detailsText}>I came up with this slay plant</Text>
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
    backgroundColor: '#e8f5e9',
    padding: 20,
    alignItems: 'center',
    marginBotton:100
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'InknutAntiqua_900Black',
    paddingBottom: 12,
  },
  plantImage: {
    width: '100%',
    height: 280,// Adjust the height accordingly
    resizeMode: 'contain',

  },
  detailsContainer: {
    padding: 20,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'InknutAntiqua_900Black',
    marginTop: 10,
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
});

export default PlantInfoScreen;


    