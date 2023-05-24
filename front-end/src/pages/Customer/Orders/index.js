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

  async function getOrders() {
    const userLocal = getItem('user');
    const { data } = await requestDataWithToken('/customer/orders', userLocal.token);
    setOrders(data);
    setUser(userLocal);
    setLoaded(true);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      {loaded ? orders.map(({ id, status, totalPrice, saleDate }, key) => (<OrderCard
        key={ key }
        id={ id }
        status={ status }
        totalPrice={ totalPrice }
        date={ saleDate }
        role={ user.role }
      />)) : <Loading />}

    </div>
  );
}
