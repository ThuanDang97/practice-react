import { ChangeEvent, useState } from 'react';
import './rangerSlider.css';

export type TProps = {
  label: string;
  min: number;
  max: number;
  defaultValue: number;
  step: number;
  onHandleFilterUserScore: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RangerSlider = (props: TProps): JSX.Element => {
  const { onHandleFilterUserScore, label, min, max, defaultValue, step } = props;
  const [value, setValue] = useState<number>(10);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onHandleFilterUserScore(e);
    setValue(Number(e.target.value));
  };

  return (
    <div className="ranger-slider">
      {label && <h3>{label}</h3>}
      <input
        type="range"
        className="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={onHandleChange}
      />
      <div className="range-value">{value}</div>
    </div>
  );
};
export default RangerSlider;
