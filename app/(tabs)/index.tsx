import { Button } from '@/components/Button/Button';
import { ImageViewer } from '@/components/ImageViewer';
import { View, StyleSheet, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("You did not select any image.");
    }
  }

const placeholderImage = require('../../assets/images/background-image.png')

  return (
    <View style={styles.container}>
      {/* <Text style={{color: '#fff'}}>Open up App.js to start working on your app!</Text>
       */}
       <View style={styles.imageContainer}>
        <ImageViewer placeholderImage={placeholderImage} selectedImage={selectedImage}/>
       </View>
       <View style={styles.footerContainer}>
        <Button  theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this Photo"/>
       </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});