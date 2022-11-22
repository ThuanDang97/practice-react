import React, { Component } from 'react';

type Props = {
  id: number;
  text: string;
  isCompleted: boolean;
  status: string;
};
class Todo extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={this.props.isCompleted}
          />
          <label>{this.props.text}</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
}

export default Todo;
