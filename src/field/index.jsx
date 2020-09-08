import React, { Component } from 'react';

class Field extends Component {
  state = {
    text: ''
  };

  hangleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input type="text" onChange={this.hangleChange} value={this.state.text} />
      </div>
    );
  }
}

export default Field;
