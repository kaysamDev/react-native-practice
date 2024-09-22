import { Image, StyleSheet } from "react-native";

export const ImageViewer = ({ placeholderImage, selectedImage }: any) => {
  const imageSource = selectedImage? {uri: selectedImage} : placeholderImage
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
