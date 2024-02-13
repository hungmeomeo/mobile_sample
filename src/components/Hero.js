import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import heroImage from "../../assets/images/homepage.jpg";
import { colors } from "../../src/constants/theme";

const HomeHero = () => {
  return (
    <View style={styles.container}>
      <Image source={heroImage} style={styles.image} />
      <Text style={styles.text}>Poscify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  text: {
    marginTop: 35,
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default HomeHero;
