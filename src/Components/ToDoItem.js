import React, { Component } from 'react';


class ToDoItem extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Item">
        <strong>{this.props.mylist.title}</strong> -- {this.props.mylist.level}--<a href="#" onClick={this.deleteItem.bind(this,this.props.mylist.id)}>X</a>
      </li>
    );
  }
}

export default ToDoItem;
