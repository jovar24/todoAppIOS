import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.style}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#B0A8B9",
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#000",
    fontSize: 40,
    fontWeight: 900,
    textTransform: "uppercase"
  }
});

export default Header;
