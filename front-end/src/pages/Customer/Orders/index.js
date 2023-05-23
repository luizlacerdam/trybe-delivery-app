import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OrderCard from './components/OrderCard';
import { requestDataWithToken } from '../../../services/requests';
import { getItem } from '../../../utils/localStorageHandling';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const { token } = getItem('user');
    const data = await requestDataWithToken('/customer/orders', token);
    setOrders(data);
  }

  useEffect(() => {
    getOrders();
  }, []);
  console.log(orders);
  return (
    <div>
      <Navbar />
      <OrderCard />
    </div>
  );
}
