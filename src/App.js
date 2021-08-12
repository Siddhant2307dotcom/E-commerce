import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
