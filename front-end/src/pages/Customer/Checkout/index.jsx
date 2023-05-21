import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Product from './components/Product';
import { getLocalStorage } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';
import DetalhesEntrega from './components/DetalhesEntrega';
import { requestData } from '../../../services/requests';

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [sellers, setSellers] = useState([]);

  async function getSellers() {
    try {
      const dataSellers = await requestData('/sellers');
      setSellers(dataSellers.sellers);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const cartArr = getLocalStorage('cart');
    setCart(cartArr);
    getSellers();
    setLoaded(true);
  }, []);
  console.log(sellers);
  return (
    <div>
      <Navbar />
      <span>Finalizar Pedido</span>

      { !loaded ? <Loading /> : (
        cart.map(({ id, urlImage, price, title, qty }, index) => (
          <Product
            id={ id }
            index={ index }
            urlImage={ urlImage }
            qty={ qty }
            price={ price }
            title={ title }
            key={ index }
          />
        ))
      )}

      <span>Detalhes e Endereço para Entrega</span>
      <DetalhesEntrega sellers={ sellers } />
    </div>
  );
}
