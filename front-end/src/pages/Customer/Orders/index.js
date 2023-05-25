import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OrderCard from './components/OrderCard';
import { requestDataWithToken } from '../../../services/requests';
import { getItem } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState();

  const REDIRECT_PATHS = {
    customer: '/customer/orders',
    seller: '/seller/orders',
    // administrator: '/admin/manage',
  };

  async function getOrders() {
    const userLocal = getItem('user');

    const { data } = await requestDataWithToken(
      REDIRECT_PATHS[userLocal.role],
      userLocal.token,
    );

    setUser(userLocal);
    setOrders(data);
    setLoaded(true);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      {loaded ? <Navbar
        username={ user.name }
      /> : <Loading />}
      {loaded ? orders.map(({
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
  );
}
