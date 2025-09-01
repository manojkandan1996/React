import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const style = {
      textAlign: 'center',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f1c40f',
      width: '200px',
      margin: '20px auto',
      fontSize: '20px'
    };

    return (
      <div style={style}>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Click Me!</button>
      </div>
    );
  }
}

export default ClickCounter;
