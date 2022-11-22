import { memo, useState } from 'react';
import { sortingOptions } from '../../constants/MockData';

export type TProps = {
  onHandleSort: (option: string) => void;
};

const Select = (props: TProps): JSX.Element => {
  const { onHandleSort } = props;
  const [isEnable, setIsEnable] = useState(false);
  const [titleOption, setTitleOption] = useState('Popularity Descending');

  const handlerOpenSubmenu = () => {
    setIsEnable(!isEnable);
  };

  const handleSetTitle = (sortBy: string, title: string) => {
    setTitleOption(title);
    setIsEnable(!isEnable);
    onHandleSort(sortBy);
  };

  const renderSortSubMenu = (
    <div className="sub-menu">
      <ul className="sub-list">
        {sortingOptions.map((item) => (
          <li
            className="item"
            key={item.id}
            onClick={() => handleSetTitle(item.sort_by, item.title)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <span className="dropdown" onClick={handlerOpenSubmenu}>
        <span className="input">{titleOption}</span>
        <span className="select">
          <span className="icon-select"></span>
        </span>
      </span>
      {isEnable ? renderSortSubMenu : ''}
    </>
  );
};

export default memo(Select);
