import { memo, MouseEvent } from 'react';
import './popup.css';

export type TProps = {
  src: string;
  alt: string;
  title: string;
  color: 'black' | 'pink';
  onHandleClick: (e: MouseEvent<HTMLDivElement>) => void;
};

const Popup = (props: TProps): JSX.Element => {
  const { src, alt, title, color, onHandleClick } = props;

  return (
    <div className="group" onClick={onHandleClick} data-testid="popup">
      <i className={color}>
        <img src={src} alt={alt} className="black" />
      </i>
      {title}
    </div>
  );
};

export default memo(Popup);
