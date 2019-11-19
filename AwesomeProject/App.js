import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Header from "./components/header";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: "",
      todos: [
        { id: 0, title: "take out the trash", done: false },
        { id: 1, title: "cook dinner", done: false }
      ]
    };
  }

  render() {
    const statusbar =
      Platform.OS == "ios" ? <View style={styles.statusbar} /> : <View />;

    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="first task?" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  statusbar: {
    backgroundColor: "#C34A36",
    height: 80
  }
});
