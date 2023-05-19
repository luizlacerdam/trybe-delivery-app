import React from 'react';
import Navbar from '../components/Navbar';
import Product from './components/Product';

export default function CheckoutPage() {
  return (
    <div>
      <Navbar />
      <span>Finalizar Pedido</span>
      <Product />
    </div>
  );
}
