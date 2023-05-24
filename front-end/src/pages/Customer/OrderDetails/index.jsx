import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsLabel from './components/DetailsLabel';
import OrderItens from './components/OrderItens';
import { requestDataWithToken } from '../../../services/requests';
import { getItem } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';

export default function OrderDetails(props) {
  const [dataObj, setDataObj] = useState();
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
      <div>
        {loaded ? (
          <DetailsLabel
            id={ id }
            seller={ dataObj.seller.name }
            status={ dataObj.order.status }
            date={ dataObj.order.saleDate }
          />) : <Loading />}

        <OrderItens />

      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
