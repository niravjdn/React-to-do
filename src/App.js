import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Meeting with Boss",
        completed: false
      },
      {
        id: 2,
        title: "Meeting with Boss",
        completed: true
      }
    ]
  }

  markComplete = (id) => {
    this.setState(
       {todos : this.state.todos.map( (todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }

         return todo;
       })
      });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
