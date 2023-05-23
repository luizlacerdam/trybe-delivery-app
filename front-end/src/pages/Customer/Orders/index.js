import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OrderCard from './components/OrderCard';
import { requestDataWithToken } from '../../../services/requests';
import { getItem } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function getOrders() {
    const { token } = getItem('user');
    const { data } = await requestDataWithToken('/customer/orders', token);
    setOrders(data);
    setLoaded(true);
  }

  useEffect(() => {
    getOrders();
  }, []);
  console.log(orders);
  return (
    <div>
      <Navbar />
      {loaded ? orders.map(({ id, status, totalPrice, saleDate }, key) => (<OrderCard
        key={ key }
        id={ id }
        status={ status }
        totalPrice={ totalPrice }
        date={ saleDate }
      />)) : <Loading />}

    </div>
  );
}
