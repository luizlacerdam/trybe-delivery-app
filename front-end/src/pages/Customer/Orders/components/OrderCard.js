import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ id, status, totalPrice, date }) {
  return (
    <div>
      <label
        htmlFor="order-id"
      >
        <span
          data-testid={ `customer_orders__element-order-id-${id}` }
          id="order-id"
        >
          {id}
        </span>
        Pedido
      </label>
      <div
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        {status}
      </div>
      <div
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        {date}
      </div>
      <div
        data-testid={ `customer_orders__element-card-price-${id}` }

      >
        {totalPrice}
      </div>
    </div>
  );
}

OrderCard.propTypes = ({
  id: PropTypes.any,
  status: PropTypes.any,
  totalPrice: PropTypes.any,
  date: PropTypes.any,
}).isRequired;
