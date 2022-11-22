import React, { Component } from 'react';

type Props = {
  addTodo: Function;
};
class Header extends Component<Props> {
  state: {
    text: string;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onAddTodo = (e: { key: string }) => {
    if (e.key === 'Enter' && this.state.text) {
      this.props.addTodo(this.state.text);
      this.setState({ text: (this.state.text = '') });
    }
  };

  render(): JSX.Element {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          onKeyPress={(e) => this.onAddTodo(e)}
        />
      </header>
    );
  }
}

export default Header;
