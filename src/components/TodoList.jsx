import React, { Component } from 'react';
import uuid from 'node-uuid';
import ListItem from './ListItem';
import AddTodo from './AddTodo';

const todos = [
  {
    id: uuid.v4(),
    task: 'Learn React',
    done: false
  },
  {
    id: uuid.v4(),
    task: 'Learn Webpack',
    done: false
  },
  {
    id: uuid.v4(),
    task: 'Learn Angular',
    done: false
  }
];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos};
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.todos.map(todo => {
          return (
            <ListItem
              key={todo.id}
              todo={todo}
              editTodo={this.editTodo.bind(this)}
              deleteTodo={this.deleteTodo.bind(this)}
              toggleTodoDone={this.toggleTodoDone.bind(this)}
            />
          );
        })}
        <AddTodo upsertTodo={this.newTodo.bind(this)} />
      </ul>
    )
  }
  newTodo(task) {
    const newTodo = {
      id: uuid.v4(),
      task,
      done: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  editTodo(editedTodo) {
    this.setState({todos: this.state.todos.map(todo => {
      if (editedTodo.id === todo.id) {
        return Object.assign({}, todo, editedTodo);
      }
      return todo;
    })});
  }
  deleteTodo(deletedTodo) {
    this.setState({todos: this.state.todos.filter(todo => {
      return todo.id !== deletedTodo.id;
    })});
  }
  toggleTodoDone(editedTodo) {
    this.setState({todos: this.state.todos.map(todo => {
      if (editedTodo.id === todo.id) {
        return Object.assign({}, todo, editedTodo);
      }
      return todo;
    })});
  }
}

export default TodoList;
