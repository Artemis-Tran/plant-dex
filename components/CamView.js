import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera/next';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Permissions from 'expo-permissions';

// const cameraRef = useRef(null);

const CamView = ({navigation}) => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);


	useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);


  const takePicture = async () => {
	  if (this.camera) {
		  const data = await this.camera.takePictureAsync({quality:0.5});
      // const data = await cameraRef.current.takePictureAsync({ quality: 0.5 });
		  console.log(data.uri);
      return data.uri;
	  }
	  navigation.navigate("Home")
  };

  const handleCapture = async () => {
    const uri = await takePicture();
    if (uri) {
        console.log("URI obtained, navigating to PlantDex with:", uri); // Debugging line
        navigation.navigate('PlantDex', { newImageUri: uri });
    } else {
        console.error("Failed to obtain URI.");
    }
};

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }


  if (!hasCameraPermission) return (<View />)
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={(ref) => {this.camera = ref}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCapture}>
            <Text style={styles.text}>Take photo</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});



export default CamView;
