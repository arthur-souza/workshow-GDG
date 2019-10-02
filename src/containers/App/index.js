import React from 'react';
import uuid from 'uuid/v4';
import { FormTodo } from "../../components/Form";
import './App.css';

class App extends React.Component {
  state = {
    text: "",
    todos: [],
  }

  changeInput = (value) => {
    this.setState({ text: value.target.value });
  }

  addTodo = () => {
    const todo = {
      description: this.state.text,
      id: uuid(),
      isDone: false,
    }

    this.setState({
      todos: [...this.state.todos, todo],
      text: "",
    });
  }

  changeStatus = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      }

      return todo;
    });

    this.setState({todos});
  };

  render() {
    return (
      <div className="App">
        <FormTodo
          onSubmit={this.addTodo}
          onChange={this.changeInput}
          value={this.state.text}
        />

        <h1>Tarefas:</h1>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.isDone} onChange={() => this.changeStatus(todo.id)} />
                <span className={todo.isDone ? "isDone" : ""}>{todo.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
