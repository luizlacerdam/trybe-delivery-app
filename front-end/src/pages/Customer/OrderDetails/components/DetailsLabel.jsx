import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestPatchWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';

export default function DetailsLabel({ id, seller, status, date }) {
  const [delivered, setDelivered] = useState(false);
  const [localStatus, setLocalStatus] = useState();
  const tes = `customer_order_details__element-order-details-label-delivery-status-${id}`;
  const convertDate = new Date(date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formattedDate = convertDate.toLocaleDateString('en-GB', options);
  useEffect(() => {
    setLocalStatus(status);
    setDelivered(status === 'Entregue');
  }, []);

  async function updateStatus() {
    const { token } = getItem('user');
    const response = await requestPatchWithToken(
      `/customer/orders/${id}`,
      { status: 'Entregue' },
      token,
    );
    return response;
  }

  async function handleClick() {
    const { data } = await updateStatus();
    if (data.length > 0) {
      setLocalStatus('Entregue');
      setDelivered(true);
    }
  }

  return (
    <div>
      <div>
        <div
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {id}
        </div>
        <div
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P. Vend: ${seller}`}
        </div>
        <div
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {formattedDate}
        </div>
        <div
          data-testid={ tes }
        >
          {localStatus}
        </div>
      </div>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled={ delivered }
        onClick={ handleClick }
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

DetailsLabel.propTypes = ({
  id: PropTypes.any,
  seller: PropTypes.any,
  status: PropTypes.any,
  date: PropTypes.any,
}).isRequired;
