import React from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";

import Header from "./components/header";
import InputBar from "./components/inputBar";
import TodoItem from "./components/todoItem";

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

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    });
    this.setState({
      todos,
      todoInput: ""
    });
  }

  toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map(todo => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todos });
  }

  render() {
    const statusbar =
      Platform.OS == "ios" ? <View style={styles.statusbar} /> : <View />;

    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="TodoApp!" />
        <InputBar
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={() => this.addNewTodo()}
          todoInput={this.state.todoInput}
        />
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
              />
            );
          }}
        />
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
    height: 50
  }
});
