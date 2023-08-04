import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Product from './components/Product';
import { getItem, getLocalStorage } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';
import DetalhesEntrega from './components/DetalhesEntrega';
import { requestData, requestDataWithToken } from '../../../services/requests';
import TotalPrice from './components/TotalPrice';
import ErrorComponent from '../components/ErrorComponent';

export default function CheckoutPage() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [total, setTotal] = useState(0.00);
  const [error, setError] = useState();

  async function getSellers() {
    try {
      const dataSellers = await requestData('/sellers');
      setSellers(dataSellers.sellers);
    } catch (e) {
      console.log(e);
    }
  }

  async function validateToken() {
    const { token } = getItem('user');
    try {
      const response = await requestDataWithToken('/customer/', token);
      return response;
    } catch (e) {
      setError(e.response);
      console.log(e.response);
    }
  }

  useEffect(() => {
    validateToken();
    const cartArr = getLocalStorage('cart');
    const localUser = getItem('user');
    setUser(localUser);

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
    <div className="page-index">
      { error ? <ErrorComponent
        status={ error.status }
        statusText={ error.statusText }
        message={ error.data.error }
      /> : (
        <div>
          {!loaded ? <Loading /> : (
            <div>
              <Navbar username={ user.name } role={ user.role } />
            </div>
          )}
          <div className="order-details-page-index">

            <span>Finalizar Pedido</span>
            <div className="all-checkout-cards">
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
            </div>
          </div>

          <div className="adress-detail">
            <span>Detalhes e endereço para entrega</span>
            <DetalhesEntrega sellers={ sellers } total={ total } cart={ cart } />
          </div>
        </div>
      )}
    </div>
  );
}
