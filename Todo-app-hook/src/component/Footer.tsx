import { memo } from 'react';
import Button from './common/Button';
import { filterBtns } from '../constants/MockData';

type TProps = {
  filterTodo: (value: string) => void;
  lengthTodo: number;
};

const Footer = (props: TProps): JSX.Element => {
  const { filterTodo, lengthTodo } = props;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{lengthTodo}</strong>
        <span> items </span>
        <span> left </span>
      </span>
      <ul className="filters">
        {filterBtns.map((btn) => (
          <li key={btn.id}>
            <Button {...btn} onUpdateFilterValue={filterTodo} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default memo(Footer);
