import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

const InputBar = props => {
  return (
    <View style={styles.inputContianer}>
      <TextInput
        style={styles.input}
        onChangeText={todoInput => props.textChange(todoInput)}
        value={props.todoInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContianer: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: { width: 0, heigth: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1
  },
  input: {
    backgroundColor: "#A6AE9D",
    flex: 1,
    fontSize: 20,
    height: 42
  },
  addButton: {
    width: 100,
    backgroundColor: "#C34A36",
    alignItems: "center",
    justifyContent: "center"
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700
  }
});

export default InputBar;
