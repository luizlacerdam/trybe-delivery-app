import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsLabel from './components/DetailsLabel';
import OrderItens from './components/OrderItens';
import { requestDataWithToken } from '../../../services/requests';
import { getItem } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';
import TotalPrice from './components/TotalPrice';
import Navbar from '../components/Navbar';

export default function OrderDetails(props) {
  const [dataObj, setDataObj] = useState();
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const { match } = props;
  const { id } = match.params;

  async function getOrder() {
    const localUser = getItem('user');
    setUser(localUser);
    const { data } = await requestDataWithToken(`/customer/orders/${id}`, localUser.token);
    setDataObj(data);
    setLoaded(true);
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>

      {loaded ? (
        <div>
          <Navbar
            username={ user.name }
          />
          Detalhes do Pedido

          <DetailsLabel
            id={ id }
            seller={ dataObj.seller.name }
            status={ dataObj.order.status }
            date={ dataObj.order.saleDate }
          />
          {dataObj.order.products.map(({ name, price, SaleProduct }, key) => (<OrderItens
            key={ key }
            index={ key }
            name={ name }
            qty={ SaleProduct.quantity }
            price={ price }
          />))}
          <TotalPrice totalPrice={ dataObj.order.totalPrice } />
        </div>
      ) : <Loading />}
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
