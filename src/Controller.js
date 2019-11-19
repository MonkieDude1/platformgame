import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native";

export class Controller extends React.Component {
  onPressAction = () => {
    Alert.alert("Action pressed");
  };
  onPressLeft = () => {
    Alert.alert("Left pressed")
  };
  onPressRight = () => {
    Alert.alert("Right pressed")
  };

  render() {
    return (    
    <View style={styles.container}>
        <TouchableOpacity style={styles.action} onPress={this.onPressAction}>
          <Text style={styles.actionText}>A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.left} onPress={this.onPressLeft}>
          <Text style={styles.actionText}>left</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.right} onPress={this.onPressRight}>
          <Text style={styles.actionText}>right</Text>
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
  left: {
    width: 66,
    height: 66,
    borderRadius: 22,
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  right: {
    width: 66,
    height: 66,
    borderRadius: 22,
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  action: {
    width: 66,
    height: 66,
    borderRadius: 22,
    flex: 2,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "white",
    fontSize: 20
  },
  actionLeft: {
    color: "white",
    fontSize: 20
  },
  actionRight: {
    color: "white",
    fontSize: 20
  },
});
