import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native";

const WIDTH = 60;
const HEIGHT = 60;

export class Character extends React.Component {
  static defaultProps = {
    width: WIDTH,
    height: HEIGHT
  };

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.text}>😊</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 50
  }
});
