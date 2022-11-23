import { ReactNode } from 'react';
import './tooltip.css';

export type TProps = {
  children: ReactNode;
  text: string;
};

const Tooltip = (props: TProps): JSX.Element => {
  const { text, children } = props;
  return (
    <div className="tooltip" data-testid="tooltip">
      <div>{children}</div>
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
