import * as React from 'react';

class Button extends React.Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click {this.state.counter}</button>
    );
  }
}

export default Button;
