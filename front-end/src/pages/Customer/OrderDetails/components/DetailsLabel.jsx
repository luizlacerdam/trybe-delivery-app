import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function DetailsLabel({ id, seller, status, date, token }) {
  const [delivered, setDelivered] = useState(false);
  const tes = `customer_order_details__element-order-details-label-delivery-status-${id}`;
  const convertDate = new Date(date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formattedDate = convertDate.toLocaleDateString('en-GB', options);
  useEffect(() => {
    setDelivered(status === 'Entregue');
  }, []);

  async function updateStatus() {

  }

  function handleClick() {

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
          {status}
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
  token: PropTypes.any,
  id: PropTypes.any,
  seller: PropTypes.any,
  status: PropTypes.any,
  date: PropTypes.any,
}).isRequired;
