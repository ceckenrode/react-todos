import React, { Component } from 'react';
import '../assets/sass/addtodo.scss';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="list-group-item form-inline">
        <input
          className="form-control"
          type="text"
          placeholder="Add a todo"
          width="100%"
          ref={(input) => {
            if (input) {
              input.focus();
            }
            this._input = input;
          }}
        />
        <a
          onClick={this.handleButtonClick.bind(this)}
          className="btn btn-default">
          Add Item
        </a>
      </li>
    );
  }
  handleButtonClick() {
    if (this._input.value.trim()){
      this.props.upsertTodo(this._input.value);
      this._input.value = '';
    }
  }
}

export default AddTodo;
