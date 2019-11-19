import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Controller } from "./Controller";

export function App() {
  return (
    <View style={styles.container}>
      <Controller />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end"
  }
});
