import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native";

export class Controller extends React.Component {
  state = {
    actionPressed: false
  };

  onPressActionIn = () => {
    this.setState({
      actionPressed: true,
      actionTimer: setInterval(this.onActionInterval, 20)
    });
  };
  onPressActionOut = () => {
    clearInterval(this.state.actionTimer);
    this.setState({
      actionPressed: false,
      actionTimer: null
    });
  };
  onActionInterval = () => {
    this.props.onAction();
  };

  onPressLeftIn = () => {
    this.setState({
      leftPressed: true,
      leftTimer: setInterval(this.onLeftInterval, 20)
    });
  };
  onPressLeftOut = () => {
    clearInterval(this.state.leftTimer);
    this.setState({
      leftPressed: false,
      leftTimer: null
    });
  };
  onLeftInterval = () => {
    this.props.onLeft();}

  onPressRight = () => {
    Alert.alert("Right pressed");
  };
  onPressRightIn = () => {
    this.setState({
      rightPressed: true,
      rightTimer: setInterval(this.onRightInterval, 20)
    });
  };
  onPressRightOut = () => {
    clearInterval(this.state.rightTimer);
    this.setState({
      rightPressed: false,
      rightTimer: null
    });
  };
  onRightInterval = () => {
    this.props.onRight();}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.action}
          onPressIn={this.onPressActionIn}
          onPressOut={this.onPressActionOut}
        >
          <Text style={styles.actionText}>A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.left} onPressIn={this.onPressLeftIn}
        onPressOut={this.onPressLeftOut}>
          <Text style={styles.actionText}>left</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.right} onPressIn={this.onPressRightIn}
        onPressOut={this.onPressRightOut}>
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
    marginLeft: 10
  },
  right: {
    width: 66,
    height: 66,
    borderRadius: 22,
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10
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
  }
});
