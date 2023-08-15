import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../components/Navbar';
import OrderCard from './components/OrderCard';
import { requestDataWithToken } from '../../../services/requests';
import { getItem } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';
import ErrorComponent from '../components/ErrorComponent';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const path = history.location.pathname.split('/')[1];

  const REDIRECT_PATHS = {
    customer: '/customer/orders',
    seller: '/seller/orders',
  };

  async function getOrders() {
    const userLocal = getItem('user');
    try {
      const { data } = await requestDataWithToken(
        REDIRECT_PATHS[path],
        userLocal.token,
      );
      setOrders(data);
    } catch (e) {
      setError(e.response);
      console.log(e.response);
    }

    setUser(userLocal);
    setLoaded(true);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      {error ? <ErrorComponent
        status={ error.status }
        statusText={ error.statusText }
        message={ error.data.error }
      /> : (
        <div
          className="orders-index"
        >
          {loaded ? <Navbar
            className="user-navbar"
            username={ user.name }
            role={ user.role }
          /> : <Loading />}
          <div
            id="all-orders-cards"
          >
            {loaded ? orders.reverse().map(({
              id,
              status, totalPrice,
              saleDate,
              deliveryAddress,
              deliveryNumber,
            }, key) => (
              <OrderCard
                key={ key }
                id={ id }
                status={ status }
                totalPrice={ totalPrice }
                date={ saleDate }
                role={ user.role }
                deliveryAddress={ deliveryAddress }
                deliveryNumber={ deliveryNumber }
              />
            )) : <Loading />}
          </div>

        </div>
      )}
    </div>
  );
}
