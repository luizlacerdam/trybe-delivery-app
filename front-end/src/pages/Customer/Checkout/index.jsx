import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Product from './components/Product';
import { getLocalStorage } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';
import DetalhesEntrega from './components/DetalhesEntrega';
import { requestData } from '../../../services/requests';
import TotalPrice from './components/TotalPrice';

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [total, setTotal] = useState(0.00);
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

    const totalP = cartArr.reduce((acc, cur) => {
      const totalLocal = cur.price * cur.qty;
      return acc + totalLocal;
    }, 0);

    setTotal(totalP);
    setCart(cartArr);
    getSellers();
    setLoaded(true);
  }, []);

  useEffect(() => {
    const cartArr = getLocalStorage('cart');
    const totalP = cartArr.reduce((acc, cur) => {
      const totalLocal = cur.price * cur.qty;
      return acc + totalLocal;
    }, 0);
    setTotal(totalP);
  }, [cart]);

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
            cart={ cart }
            setCart={ setCart }
          />
        ))
      )}
      {!loaded ? <Loading /> : (<TotalPrice total={ total } />)}
      <span>Detalhes e Endereço para Entrega</span>
      <DetalhesEntrega sellers={ sellers } total={ total } cart={ cart } />
    </div>
  );
}
