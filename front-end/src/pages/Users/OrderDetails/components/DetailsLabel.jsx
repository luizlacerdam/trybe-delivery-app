import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { requestPatchWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';

export default function DetailsLabel({
  id, seller, status, date, role, deliveryAddress, deliveryNumber }) {
  const [delivered, setDelivered] = useState(false);
  const [localStatus, setLocalStatus] = useState();
  const history = useHistory();
  const pageUser = history.location.pathname.split('/')[1];
  const transit = 'Em Trânsito';
  const convertDate = new Date(date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formattedDate = convertDate.toLocaleDateString('en-GB', options);
  useEffect(() => {
    setLocalStatus(status);
    setDelivered(status !== transit);
  }, []);

  const REDIRECT_PATHS = {
    customer: '/customer/orders',
    seller: '/seller/orders',
  };

  async function updateStatus(statusParam) {
    const localUser = getItem('user');
    const response = await requestPatchWithToken(
      `${REDIRECT_PATHS[pageUser]}/${id}`,
      { status: statusParam },
      localUser.token,
    );
    return response;
  }

  async function handleClickSeller() {
    if (localStatus === 'Pendente') {
      const { data } = await updateStatus('Preparando');
      if (data.length > 0) {
        setLocalStatus('Preparando');
      }
    } else {
      const { data } = await updateStatus(transit);
      if (data.length > 0) {
        setLocalStatus(transit);
      }
    }
  }

  async function handleClickCustomer() {
    const { data } = await updateStatus('Entregue');
    if (data.length > 0) {
      setLocalStatus('Entregue');
      setDelivered(true);
    }
  }

  const divStyle = {
    Pendente: { backgroundColor: '#0072FF' },
    Preparando: { backgroundColor: '#FFAA00' },
    Entregue: { backgroundColor: '#036B52' },
  };

  return (
    <div>
      <div className="details-order-order-card">
        <div className="details-order-details">
          <label
            htmlFor="order-id"
          >
            Pedido
            <span
              data-testid={
                `${role}_order_details__element-order-details-label-order-id`
              }
            >
              {id}
            </span>
          </label>
          <div
            className="order-card-status"
            data-testid={ `${role}_orders__element-delivery-status-${id}` }
            style={ divStyle[localStatus] }
          >
            {localStatus}
          </div>
          <div
            className="order-card-date-and-total"
            data-testid={
              `${role}_order_details__element-order-details-label-order-date`
            }
          >
            {formattedDate}
          </div>
        </div>
        <div className="details-order-address-and-seller">
          <div
            data-testid={
              `${role}_order_details__element-order-details-label-seller-name`
            }
          >
            {`P. Vend: ${seller}`}
          </div>
          <div>
            {`${deliveryAddress}, nº ${deliveryNumber}.`}
          </div>
        </div>
      </div>

      {pageUser === 'customer' ? (
        <div className="details-order-customer-button">
          <button
            className="details-order-button-delivery-check"
            data-testid={ `${role}_order_details__button-delivery-check` }
            type="button"
            disabled={ delivered }
            onClick={ handleClickCustomer }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      ) : (
        <div className="details-order-seller-button">
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ handleClickSeller }
            disabled={ localStatus !== 'Pendente' }
            className="details-order-button-preparing-check"
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ handleClickSeller }
            disabled={ localStatus !== 'Preparando' }
            className="details-order-button-dispatch-check"
          >
            SAIU PARA ENTREGA
          </button>
        </div>
      )}
    </div>
  );
}

DetailsLabel.propTypes = ({
  id: PropTypes.any,
  seller: PropTypes.any,
  status: PropTypes.any,
  date: PropTypes.any,
  role: PropTypes.any,
  deliveryAddress: PropTypes.any,
  deliveryNumber: PropTypes.any,
}).isRequired;
