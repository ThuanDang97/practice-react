import React from 'react';
import { Component } from 'react';

type Props = {
  id: number;
  title: string;
  onUpdateFilterValue: Function;
  isActived: boolean;
};

class Button extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <>
        <li>
          <a
            className={`${this.props.isActived} ? 'selected' : ''`}
            onClick={() => this.props.onUpdateFilterValue(this.props.title)}
          >
            {this.props.title}
          </a>
        </li>
        <span></span>
      </>
    );
  }
}

export default Button;
