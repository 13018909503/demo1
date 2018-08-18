import React, { Component } from 'react';

export default class Product extends Component {
  componentDidMount() {
    this.props.fetchList({ page: 1 });
  }

  showList = () => {
    if (this.props.lists.length > 0) {
      var jsx = [];
      this.props.lists.map((item, index) => {
        jsx.push(
          <li key={index}>
            {item.title}{' '}
            <a
              href="javascript:void(0)"
              onClick={() => {
                this.props.addToCart(item);
              }}
            >
              加入到购物车
            </a>
          </li>
        );
      });
      return jsx;
    } else {
      return <li>数据请求中</li>;
    }
  };

  showPages = () => {
    var total = 52;
    if (total !== undefined) {
      var pages = [];
      for (let i = 1; i <= 11; i++) {
        pages.push(
          <li key={i}>
            <a
              href="javascript:void(0)"
              onClick={() => {
                this.props.fetchList({ page: i });
              }}
            >
              {i}
            </a>
          </li>
        );
      }

      return (
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pages}
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      );
    }
  };

  render() {
    return (
      <div>
        <p>Product {this.props.counter}</p>
        {this.showList()}
        {this.showPages()}
      </div>
    );
  }
}
