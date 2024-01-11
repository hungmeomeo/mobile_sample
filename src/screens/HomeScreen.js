import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../constants/theme";
import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/ScreenHeader";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader style={styles.content} title="Travel App" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  content: {
    marginTop: 20,
  },
});

export default HomeScreen;
