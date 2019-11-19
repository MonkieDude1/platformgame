import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native";

export class Controller extends React.Component {
  onPressAction = () => {
    Alert.alert("Action pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.action} onPress={this.onPressAction}>
          <Text style={styles.actionText}>A</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "cyan",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  action: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "white",
    fontSize: 20
  }
});
