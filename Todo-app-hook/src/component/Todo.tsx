import { memo } from 'react';

type TProps = {
  id: number;
  text: string;
  isCompleted: boolean;
  status: string;
  onDelete: (todo: number) => void;
};

const Todo = (props: TProps): JSX.Element => {
  const { text, isCompleted, id, onDelete } = props;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={isCompleted} />
        <label>{text}</label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
    </li>
  );
};
export default memo(Todo);
