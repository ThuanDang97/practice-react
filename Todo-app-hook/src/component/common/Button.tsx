import { memo, useCallback } from 'react';

type TProps = {
  id: number;
  title: string;
  onUpdateFilterValue: (value: string) => void;
};

const Button = (props: TProps): JSX.Element => {
  const { title, onUpdateFilterValue } = props;

  const handleUpdateFilterValue = useCallback(() => {
    onUpdateFilterValue(title);
  }, [onUpdateFilterValue]);

  return (
    <button className="btn-todo" onClick={handleUpdateFilterValue}>
      {title}
    </button>
  );
};

export default memo(Button);
// export default Button;
