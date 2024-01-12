import React from "react";
import { Text, View } from "react-native";
import AppCamera from "../components/Camera";

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AppCamera />
    </View>
  );
};

export default SearchScreen;
