import { ITodo } from '../interfaces/ITodo';
import Todo from './Todo';

interface TProps {
  listTodos: ITodo[];
  deleteTodo: (todo: number) => void;
}

const TodoList = (props: TProps): JSX.Element => {
  const { listTodos, deleteTodo } = props;

  const renderListTodo = (listTodos: ITodo[]) => {
    if (listTodos && listTodos.length > 0) {
      return listTodos.map((todo) => <Todo key={todo.id} {...todo} onDelete={deleteTodo} />);
    }
  };

  const emptyEl = (): JSX.Element => {
    return (
      <p className="new-todo" style={{ color: 'darkgray' }}>
        Nothing Todo
      </p>
    );
  };

  return (
    <section className="main">
      <input className="toggle-all" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {listTodos && listTodos.length > 0 ? renderListTodo(listTodos) : emptyEl()}
      </ul>
    </section>
  );
};

export default TodoList;
