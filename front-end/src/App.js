import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Products from './pages/Customer/Products';
import CheckoutPage from './pages/Customer/Checkout';
import Orders from './pages/Customer/Orders';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ CheckoutPage } />
      <Route exact path="/customer/orders" component={ Orders } />
    </Switch>
  );
}

export default App;
