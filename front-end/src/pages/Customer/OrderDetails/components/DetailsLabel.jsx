import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsLabel({ id, seller, status }) {
  const tes = `customer_order_details__element-order-details-label-delivery-status-${id}`;
  return (
    <div>
      <div>
        <div
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`PEDIDO ${id}`}
        </div>
        <div
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P. Vend: ${seller}`}
        </div>
        <div
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {date}
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
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

DetailsLabel.propTypes = ({
  id: PropTypes.any,
  status: PropTypes.any,
  date: PropTypes.any,
}).isRequired;
