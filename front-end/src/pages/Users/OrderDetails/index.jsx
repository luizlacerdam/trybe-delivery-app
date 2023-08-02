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

  const REDIRECT_PATHS = {
    customer: '/customer/orders',
    seller: '/seller/orders',
  };

  async function getOrder() {
    const localUser = getItem('user');
    setUser(localUser);
    const { data } = await requestDataWithToken(
      `${REDIRECT_PATHS[localUser.role]}/${id}`,
      localUser.token,
    );

    setDataObj(data);
    setLoaded(true);
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="page-index">

      {loaded ? (
        <div>
          <Navbar
            username={ user.name }
            role={ user.role }
          />
          <div className="order-details-page-index">
            <span>
              Detalhes do Pedido
            </span>
            <div className="details-label">
              <DetailsLabel
                id={ id }
                role={ user.role }
                seller={ dataObj.seller.name }
                status={ dataObj.order.status }
                date={ dataObj.order.saleDate }
                deliveryAddress={ dataObj.order.deliveryAddress }
                deliveryNumber={ dataObj.order.deliveryNumber }
              />
            </div>

            <div className="all-checkout-cards">
              {dataObj.order.products.map((
                {
                  name, price, SaleProduct, urlImage },
                key,
              ) => (<OrderItens
                key={ key }
                index={ key }
                name={ name }
                qty={ SaleProduct.quantity }
                price={ price }
                urlImage={ urlImage }
              />))}

              {!loaded ? <Loading /> : (
                <TotalPrice
                  totalPrice={
                    dataObj.order.totalPrice
                  }
                  role={ user.role }
                />)}
            </div>

          </div>
        </div>

      ) : <Loading />}

    </div>

  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
