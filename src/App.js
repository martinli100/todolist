import React, { Component } from 'react';
import uuid from 'uuid';
import ToDoList from './Components/ToDoList';
import AddItem from './Components/AddItem';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
  }

  componentWillMount(){
    this.setState({list: [
      {
        id: uuid.v4(),
        title: 'Learn React',
        level: 'High'
      },
      {
        id: uuid.v4(),
        title: 'Go Shopping',
        level: 'Medium'
      },
      {
        id: uuid.v4(),
        title: 'Play game',
        level: 'Low'
      }
    ]
    })
  }

  handleAddItem(item){
    let list=this.state.list;
    list.push(item);
    this.setState({list:list});
  }

  handleDeleteItem(id){
        let list=this.state.list;
        let index = list.findIndex(x => x.id === id);
        list.splice(index,1);
        this.setState({list:list});
  }

  render() {
    return (
      <div className="App">
        <h2>To Do List</h2>
        <AddItem addItem={this.handleAddItem.bind(this)}/>
        <br />
        <ToDoList list={this.state.list} onDelete={this.handleDeleteItem.bind(this)} />
      </div>
    );
  }
}

export default App;
