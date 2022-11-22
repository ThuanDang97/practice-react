import { MouseEvent, ReactNode } from 'react';
import './button.css';

export type TProps = {
  children: string | ReactNode;
  radiant: 'text' | 'contained' | 'outline';
  typeButton: 'button' | 'reset' | 'submit';
  color: 'primary' | 'success' | 'danger';
  width: 'w-25' | 'w-50' | 'w-100';
  radius: 'rd-1' | 'rd-2';
  onHandleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isDisable: boolean;
};

const Button = (props: TProps): JSX.Element => {
  const {
    children,
    typeButton,
    color,
    width,
    radiant,
    radius,
    onHandleClick,
    isDisable,
  } = props;

  return (
    <button
      type={typeButton}
      className={`btn ${color} ${radiant} ${radius} ${width} `}
      onClick={onHandleClick}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};

export { Button };
