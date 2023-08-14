import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import DetailsLabel from './components/DetailsLabel';
import OrderItens from './components/OrderItens';
import { requestDataWithToken } from '../../../services/requests';
import { getItem } from '../../../utils/localStorageHandling';
import Loading from '../../components/Loading';
import TotalPrice from './components/TotalPrice';
import Navbar from '../components/Navbar';
import ErrorComponent from '../components/ErrorComponent';

export default function OrderDetails(props) {
  const [dataObj, setDataObj] = useState();
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const { match } = props;
  const { id } = match.params;
  const history = useHistory();
  const path = history.location.pathname.split('/')[1];

  const REDIRECT_PATHS = {
    customer: '/customer/orders',
    seller: '/seller/orders',
  };

  async function getOrder() {
    try {
      const localUser = getItem('user');
      setUser(localUser);
      const { data } = await requestDataWithToken(
        `${REDIRECT_PATHS[path]}/${id}`,
        localUser.token,
      );
      setDataObj(data);
      setLoaded(true);
    } catch (e) {
      console.log(e.response);
      setError(e.response);
    }
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      {error ? <ErrorComponent
        status={ error.status }
        statusText={ error.statusText }
        message={ error.data.error }
      /> : (
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
      )}
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
