import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    console.log(this.props.carts);
    return (
      <div>
        <p>Cart</p>
        {this.props.carts.map((item, index) => {
          return (
            <li key={index}>
              {item.title} {item.quantity}
            </li>
          );
        })}
      </div>
    );
  }
}
