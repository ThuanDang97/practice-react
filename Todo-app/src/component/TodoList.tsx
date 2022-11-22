import React, { Component } from 'react';
import Todo from './Todo';

export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
  status: string;
}

type Props = {
  listTodos: Array<ITodo>;
};
class TodoList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    const { listTodos } = this.props;
    return (
      <section className="main">
        <input className="toggle-all" />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {listTodos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
