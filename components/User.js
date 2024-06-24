import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, FlatList} from 'react-native';
import { useFonts, InknutAntiqua_900Black } from '@expo-google-fonts/inknut-antiqua';
import Navbar from './Navbar.js'
  
  const avatars = [
    require('../assets/images/pic1.png'),
    require('../assets/images/pic2.png'),
    require('../assets/images/pic3.png'),
  ];
  
  const User = ({ navigation }) => {
    let [fontsLoaded] = useFonts({ InknutAntiqua_900Black });
  
    const [profileImage, setProfileImage] = useState(avatars[0]);
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const selectAvatar = (avatar) => {
      setProfileImage(avatar);
      setIsModalVisible(false);
    };
  
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.avatarButton}>
          <Image source={profileImage} style={styles.userImage} />
        </TouchableOpacity>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalView}>
            <FlatList
              data={avatars}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectAvatar(item)}>
                  <Image source={item} style={styles.avatarOption} />
                </TouchableOpacity>
              )}
              keyExtractor={(_, index) => index.toString()}
              numColumns={3}
            />
          </View>
      </Modal>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Plants capture: 0</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.detailsTitle}>Friends: 0</Text>
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
  // Existing styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#b9db92',
    padding: 20,
    alignItems: 'center',
    marginBottom: 50
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'InknutAntiqua_900Black',
    
  },
  userImage: {
    width: '100%', // Full width of the screen
    height: 300, // Fixed height
    resizeMode: 'cover', // Change to 'cover' to fill the area without stretching
    marginTop: 12,
    
  },
  detailsContainer: {
    padding: 20,
    paddingBottom: 20,
    marginBottom: 70
    
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
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  nav: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 15,
  },

  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    flexWrap: 'wrap', // Allows avatars to wrap to the next line
  },
  avatar: {
    width: 60, // Slightly larger than icon for better selection
    height: 60,
    borderRadius: 30, // Round shape
    margin: 5, // Spacing between avatars
  },
  avatarButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 150, // This is the width of the icon
    height: 150, // This is the height of the icon
    borderRadius: 10, // This makes the icon round
    alignSelf: 'center', // This centers the icon
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarOption: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 10,
  },
});


export default User;


    