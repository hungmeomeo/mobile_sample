import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../constants";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          padding: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            height: 45,
            width: 45,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.gray,
          }}
        >
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              height: 24,
              width: 24,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
