import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgateEvent = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("state", () => alert("navigation state changed"));
  });
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>Progate Event</Text>
      <Text>Join Progate Event to learn coding!</Text>
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

export default ProgateEvent;
