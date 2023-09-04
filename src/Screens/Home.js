import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Trending from "../components/Trending";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black", marginTop: 0 }}>
      <ScrollView vertical >
        <Header />
        <Trending />
        <Movies />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
