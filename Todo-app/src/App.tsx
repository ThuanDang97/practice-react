import './styles/reset.css';
import './styles/main.css';
import Header from './layouts/Header';
import React, { Component } from 'react';
import Footer from './layouts/Footer';
import TodoList, { ITodo } from './component/TodoList';
import { todos } from './constants/MockData';

class App extends Component<void> {
  state: {
    todos: ITodo[];
    filterValue: string;
  };
  constructor() {
    super();
    this.state = { todos, filterValue: 'All' };
  }

  handleAddTodo = (text: string) => {
    this.setState({
      todos: [...this.state.todos, { id: Date.now(), text, status: 'Active' }],
    });
  };

  handleFilterTodo = (value: string) => {
    this.setState({ filterValue: value });
  };

  render(): JSX.Element {
    const { todos, filterValue } = this.state;
    const filteredTodo =
      filterValue === 'All' ? todos : todos.filter((todo) => todo.status === filterValue);
    return (
      <div className="todoapp">
        <Header addTodo={this.handleAddTodo} />
        <TodoList listTodos={filteredTodo} />
        <Footer filterTodo={this.handleFilterTodo} lengthTodo={filteredTodo.length} />
      </div>
    );
  }
}

export default App;
