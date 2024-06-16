import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgateService = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("focus", () =>
      alert("ProgateService screen is focused")
    );
    navigation.addListener("blur", () =>
      alert("ProgateService screen is unfocused")
    );
  });
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>
        Welcome to Progate!
      </Text>
      <Text>Progate is an online platform where you can learn coding.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
});

export default ProgateService;
