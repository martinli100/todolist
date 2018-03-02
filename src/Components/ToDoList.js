import React, { Component } from 'react';
import ToDoItem from './ToDoItem'


class ToDoList extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }

  render() {
    let items;
    if(this.props.list){
      items = this.props.list.map(mylist => {
      return (
        <ToDoItem onDelete={this.deleteItem.bind(this)} key={mylist.id} mylist={mylist} />
      );
    });
    }
    return (
      <div className="ToDoList">
        {items}
      </div>
    );
  }
}

export default ToDoList;
