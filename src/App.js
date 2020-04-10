import React, { Component } from "react"
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import AddToDo from "./components/AddToDo"
import uuid from "uuid";
import Axios from 'axios'
import firebase from "./components/firebase"


class App extends Component {
  state = {
     todos :  []
  }


  componentDidMount(){
    const markers = [];
    const db = firebase.firestore();
    const userRef = db.collection("todos").get().then(res => {
      res.docs.forEach(doc => {
        markers.push(doc.data());
      });
      
      this.setState({todos : markers});
    }); 
    //this.setState({todos : userRef});
  }

  delTodo = (id) => {
    this.setState({
      todos : [...this.state.todos.filter( todo => todo.id != id)]
    });
    const db = firebase.firestore();
    db.collection('todos').where('id','==', id)
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  }
  
  markComplete = (id) => {
    let target = null;
    this.setState(
       {todos : this.state.todos.map( (todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed;
          target = todo;
        }
         return todo;
       })
      });

      const db = firebase.firestore();
      db.collection('todos').where('id','==', id)
      .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          db.collection("todos").doc(doc.id).update({completed: target.completed});
        });
      });
      

  }
  
  addToDo = (title) => {
    console.log(title);
    const newtodo = {
      id : uuid.v4(),
      title,
      completed : false
    }
    let updatedList = [...this.state.todos, newtodo];
    this.setState({
      todos : updatedList
    });

    const db = firebase.firestore();
    const userRef = db.collection("todos").add({
      id : uuid.v4(),
      title: title,
      completed: false
    });  
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="main-container">
        <Header/>
        <AddToDo addToDo={this.addToDo}/>
        <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
        <Footer />
      </div>
    );
  }
}

export default App;
