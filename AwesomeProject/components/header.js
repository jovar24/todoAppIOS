import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#B0A8B9",
    height: 300,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: 900,
    textTransform: "uppercase"
  }
});

export default Header;
