import { memo, MouseEvent } from 'react';
import { IChip } from '../../interfaces/Chip/IChip';
import './chip.css';

export type TProps = {
  chip: IChip;
  onHandleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Chip = (props: TProps) => {
  const { chip, onHandleClick } = props;

  return (
    <button
      value={chip?.id}
      className={chip?.actived ? 'chip-element active' : 'chip-element'}
      onClick={onHandleClick}
    >
      {chip?.name}
    </button>
  );
};

export default memo(Chip);
