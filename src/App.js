import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Controller } from "./Controller";
import { Character } from "./Character";

export class App extends React.Component {
  state = {
    playingField: {
      width: 0,
      height: 0
    },
    character: {
      x: 0,
      y: 0
    }
  };

  onLayoutPlayingField = event => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      playingField: {
        width,
        height
      },
      character: {
        x: width / 2 - Character.defaultProps.width / 2,
        y: height - Character.defaultProps.height
      }
    });
  };

  onAction = () => {
    const { x, y } = this.state.character;
    this.setState({
      character: {
        x,
        y: y - 5
      }
    });
  };

  render() {
    const { character } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.playingField} onLayout={this.onLayoutPlayingField}>
          <Character
            style={[
              {
                position: "absolute",
                left: character.x,
                top: character.y
              }
            ]}
          />
        </View>
        <Controller onAction={this.onAction} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end"
  },
  playingField: {
    flex: 1,
    backgroundColor: "silver"
  }
});
