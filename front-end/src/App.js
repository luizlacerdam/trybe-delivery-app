import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Products from './pages/Users/Products';
import CheckoutPage from './pages/Users/Checkout';
import Orders from './pages/Users/Orders';
import OrderDetails from './pages/Users/OrderDetails';
import Gerenciamento from './pages/Users/Admin';

function App() {
  return (
    <Switch>
      <Route exact path="/admin/manage" component={ Gerenciamento } />
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ CheckoutPage } />
      <Route exact path="/customer/orders" component={ Orders } />
      <Route exact path="/seller/orders" component={ Orders } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route exact path="/seller/orders/:id" component={ OrderDetails } />

    </Switch>
  );
}

export default App;
