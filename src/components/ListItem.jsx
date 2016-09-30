import React, { Component } from 'react';
import '../assets/sass/listitem.scss';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }
  render() {
    return !this.state.editing && this.renderItem() || this.renderEdit();
  }
  handleTodoClick() {
    this.setState({ editing: true });
  }
  renderItem() {
    return (
      <li
        onClick={this.handleTodoClick.bind(this)}
        className="list-group-item">
        {this.props.todo.task}
        <span className={this.props.todo.done ? "done" : "not-done"} onClick={this.handleDoneClick.bind(this)}>✓</span>
        <span className="delete" onClick={this.handleDeleteClick.bind(this)}>x</span>
      </li>
    )
  }
  renderEdit() {
    return (
      <input
        className="form-control"
        type="text"
        width="100%"
        onKeyPress={this.handleInputChange.bind(this)}
        ref={(input) => {
          if (input) {
            input.focus();
            this._input = input;
            this._input.value = this.props.todo.task;
          }
        }}
      />
    )
  }
  handleInputChange(e) {
    if (e.key === 'Enter') {
      if (this._input.value.trim()) {
        const newTodo = {
          id: this.props.todo.id,
          task: this._input.value,
          done: this.props.todo.done,
        };
        this.props.editTodo(newTodo);
      }
      this.setState({ editing: false });
    }
  }
  handleDeleteClick(e) {
    e.stopPropagation();
    this.props.deleteTodo(this.props.todo);
  }
  handleDoneClick(e) {
    e.stopPropagation();
    const newTodo = {
      id: this.props.todo.id,
      task: this.props.todo.task,
      done: !this.props.todo.done,
    };
    this.props.toggleTodoDone(newTodo);
  }
}

export default ListItem;
