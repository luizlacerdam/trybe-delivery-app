import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ id, status, totalPrice, date }) {
  const convertDate = new Date(date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formattedDate = convertDate.toLocaleDateString('en-GB', options);
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
        {formattedDate}
      </div>
      <div
        data-testid={ `customer_orders__element-card-price-${id}` }

      >
        R$
        {totalPrice.replace('.', ',')}
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
