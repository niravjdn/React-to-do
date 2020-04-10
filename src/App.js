import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/header"
import AddToDo from "./components/AddToDo"

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

  delTodo = (id) => {
    this.setState({
      todos : [...this.state.todos.filter( todo => todo.id != id)]
    });
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
        <Header/>
        <AddToDo/>
        <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
