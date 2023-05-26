import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestPatchWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';

export default function DetailsLabel({ id, seller, status, date, role }) {
  const [delivered, setDelivered] = useState(false);
  const [localStatus, setLocalStatus] = useState();

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
    setDelivered(status !== 'Em Trânsito');
  }, []);

  const REDIRECT_PATHS = {
    customer: '/customer/orders',
    seller: '/seller/orders',
    // administrator: '/admin/manage',
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
      const { data } = await updateStatus('Em Trânsito');
      if (data.length > 0) {
        setLocalStatus('Em Trânsito');
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

  return (
    <div>
      <div>
        <div
          data-testid={ `${role}_order_details__element-order-details-label-order-id` }
        >
          {id}
        </div>
        {role === 'customer' ? (
          <div
            data-testid={
              `${role}_order_details__element-order-details-label-seller-name`
            }
          >
            {`P. Vend: ${seller}`}
          </div>
        ) : ' '}
        <div
          data-testid={ `${role}_order_details__element-order-details-label-order-date` }
        >
          {formattedDate}
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
