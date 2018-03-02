import React, { Component } from 'react';
import uuid from 'uuid';

class AddItem extends Component {
  constructor(){
    super();
    this.state = {
      newItem:{}
    }
  }

  static defaultProps={
    level: ['High', 'Medium', 'Low']
  }


  handleSubmit(e){
      if(this.refs.title.value === ''){
      alert ("Title is required");
    }else{
      this.setState({newItem: {
        id: uuid.v4(),
        title: this.refs.title.value,
        level: this.refs.level.value
      }}, function(){
        this.props.addItem(this.state.newItem);
      })
    }

    e.preventDefault();
  }


  render() {
    let levelOption=this.props.level.map(level => {
      return <option key={level} value={level}>{level}</option>
    })
    return (
      <div >
        <h3>Add Item</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Level</label>
            <select ref="level">
              {levelOption}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddItem;
