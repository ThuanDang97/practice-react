import { useState } from 'react';

type TProps = {
  addTodo: (todo: string) => void;
};

const Header = (props: TProps): JSX.Element => {
  const [text, setText] = useState('');

  const handleGetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text) {
      props.addTodo(text);
      setText('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleGetValue}
        onKeyPress={handleAddTodo}
      />
    </header>
  );
};
export default Header;
