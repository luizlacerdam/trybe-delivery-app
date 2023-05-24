import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsLabel from './components/DetailsLabel';
import OrderItens from './components/OrderItens';
import { requestDataWithToken } from '../../../services/requests';
import { getItem } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';

export default function OrderDetails(props) {
  const [dataObj, setDataObj] = useState();
  //   const [cartArr, setCartArr] = useState
  const [loaded, setLoaded] = useState(false);
  const { match } = props;
  const { id } = match.params;

  async function getOrder() {
    const { token } = getItem('user');
    const { data } = await requestDataWithToken(`/customer/orders/${id}`, token);
    setDataObj(data);
    setLoaded(true);
  }

  useEffect(() => {
    getOrder();
  }, []);

  console.log(dataObj);

  return (
    <div>
      Detalhes do Pedido
      {loaded ? (
        <div>
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
        </div>
      ) : <Loading />}

    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
