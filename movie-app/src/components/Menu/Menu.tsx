import { memo } from 'react';
import './menu.css';

export type TProps = {
  title: string;
  children: React.ReactNode;
};

const Menu = (props: TProps): JSX.Element => {
  const { title, children } = props;

  return (
    <div className="panel-card">
      <div className="name">
        <h2>{title}</h2>
      </div>
      <div className="filter">
        <span className="widget" data-testid="sub-menu">
          {children}
        </span>
      </div>
    </div>
  );
};

export default memo(Menu);
