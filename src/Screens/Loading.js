import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.replace("Home");
    }, 1000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text>Loading</Text>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
