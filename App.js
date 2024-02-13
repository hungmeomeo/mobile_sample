import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import ImagePickerExample from "./src/components/ImagePicker";
import HomeHero from "./src/components/Hero";

const App = () => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setImageUri(source);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <HomeHero></HomeHero>
      <ImagePickerExample></ImagePickerExample>
    </View>
  );
};

export default App;
