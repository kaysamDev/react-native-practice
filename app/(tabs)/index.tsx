import { Button } from '@/components/Button/Button';
import { ImageViewer } from '@/components/ImageViewer';
import { View, StyleSheet, StatusBar } from 'react-native';

export default function HomeScreen() {

const placeholderImage = require('../../assets/images/background-image.png')

  return (
    <View style={styles.container}>
      {/* <Text style={{color: '#fff'}}>Open up App.js to start working on your app!</Text>
       */}
       <View style={styles.imageContainer}>
        <ImageViewer placeholderImage={placeholderImage}/>
       </View>
       <View style={styles.footerContainer}>
        <Button  theme="primary" label="Choose a photo"/>
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