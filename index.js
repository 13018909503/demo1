import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfigure from './store';
import Header from './component/Header';
import Counter from './container/Counter';
import Home from './component/Home';
import Product from './container/Product';
import Cart from './container/Cart';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storeConfigure();

import { Switch, Route, HashRouter } from 'react-router-dom';
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/counter" component={Counter} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </HashRouter>
    </PersistGate>
  </Provider>,

  document.getElementById('app')
);
