import { useCallback, useEffect, useState } from 'react';
import Header from '../component/Header';
import { ITodo } from '../interfaces/ITodo';
import Footer from '../component/Footer';
import TodoList from '../component/TodoList';
import { deleteData, getAll, postData } from '../services/MockApi';

const Todos = (): JSX.Element => {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [filterValue, setFilterValue] = useState('All');

  useEffect(() => {
    const dataTodo = async (): Promise<void | undefined> => {
      const data = await getAll();
      setTodo(data);
    };

    dataTodo();
  }, []);

  const handleAddTodo = async (text: string) => {
    const todos: ITodo = { id: Date.now(), text, isCompleted: false, status: 'Active' };

    try {
      await postData(todos);
      setTodo([...todo, todos]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterTodo = useCallback((value: string) => {
    setFilterValue(value);
  }, []);

  const filteredTodo =
    filterValue === 'All' ? todo : todo.filter((eleTodo) => eleTodo.status === filterValue);

  const handleDeleteTodo = async (id: number) => {
    const tempArr = todo.filter((eleTodo) => eleTodo.id !== id);

    try {
      await deleteData(id);
      setTodo(tempArr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="todoapp">
      <Header addTodo={handleAddTodo} />
      <TodoList listTodos={filteredTodo} deleteTodo={handleDeleteTodo} />
      <Footer filterTodo={handleFilterTodo} lengthTodo={filteredTodo.length} />
    </div>
  );
};

export default Todos;
