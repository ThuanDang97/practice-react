import Button from '../component/Button';
import React, { Component } from 'react';
import { filterBtns } from '../constants/MockData';

type Props = {
  filterTodo: Function;
  lengthTodo: number;
};
class Footer extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.lengthTodo}</strong>
          <span> items </span>
          <span> left </span>
        </span>
        <ul className="filters">
          {filterBtns.map((btn) => (
            <Button key={btn.id} {...btn} onUpdateFilterValue={this.props.filterTodo} />
          ))}
        </ul>
      </footer>
    );
  }
}

export default Footer;
