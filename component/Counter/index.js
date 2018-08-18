import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { increase, decrease, counter, counter1 } = this.props;
    return (
      <div>
        <p>Counter:{counter}</p>
        <p>Counter1:{counter1}</p>
        <button onClick={increase}>counter++</button>
        <button onClick={decrease}>counter--</button>
      </div>
    );
  }
}
