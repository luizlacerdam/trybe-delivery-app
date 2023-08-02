import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestPatchWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';

export default function DetailsLabel({
  id, seller, status, date, role, deliveryAddress, deliveryNumber }) {
  const [delivered, setDelivered] = useState(false);
  const [localStatus, setLocalStatus] = useState();
  const transit = 'Em Trânsito';
  const tes = `${role}_order_details__element-order-details-label-delivery-status-${id}`;
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
      `${REDIRECT_PATHS[localUser.role]}/${id}`,
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
    Entregue: { backgroundColor: '#EAF1EF' },
    Pendente: { backgroundColor: '#FAFF00' },
    Preparando: { backgroundColor: '#036B52' },
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
            style={ divStyle[status] }
          >
            {status}
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

      {role === 'customer' ? (
        <div>
          <div
            data-testid={ tes }
          >
            {localStatus}
          </div>
          <button
            data-testid={ `${role}_order_details__button-delivery-check` }
            type="button"
            disabled={ delivered }
            onClick={ handleClickCustomer }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      ) : (
        <div>
          <div
            data-testid={ tes }
          >
            {localStatus}
          </div>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ handleClickSeller }
            disabled={ localStatus !== 'Pendente' }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ handleClickSeller }
            disabled={ localStatus !== 'Preparando' }
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
}).isRequired;
