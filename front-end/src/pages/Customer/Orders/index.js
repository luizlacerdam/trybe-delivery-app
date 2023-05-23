import React from 'react';
import Navbar from '../components/Navbar';
import OrderCard from './components/OrderCard';
// import { requestData } from '../../../services/requests';

export default function Orders() {
//   const [orders, setOrders] = useState([]);

  //   useEffect(() => {
  //     const data = requestData('/');
  //   }, []);
  return (
    <div>
      <Navbar />
      <OrderCard />
    </div>
  );
}
