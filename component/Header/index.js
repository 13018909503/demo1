import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default props => {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            React-Router+React-Redux
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to="/" exact>
                首页
              </NavLink>
            </li>
            <li>
              <NavLink to="/counter">统计</NavLink>
            </li>
            <li>
              <NavLink to="/news">新闻</NavLink>
            </li>
            <li>
              <NavLink to="/product">产品</NavLink>
            </li>
            <li>
              <NavLink to="/cart">我的购物车</NavLink>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                产品分类 <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="../navbar-fixed-top/">联系我们</a>
            </li>
            <li>
              <a href="../navbar-fixed-top/">关于我们</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
