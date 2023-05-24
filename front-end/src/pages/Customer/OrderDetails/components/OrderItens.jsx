import React from 'react';
import PropTypes from 'prop-types';

export default function OrderItens({ index, name, qty, price }) {
  const subTotal = (qty * price).toFixed(2);
  return (
    <div>
      <div
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </div>
      <div
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        {name}
      </div>
      <div
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        {qty}
      </div>
      <div
        data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
      >
        {price.replace('.', ',')}
      </div>
      <div
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        {subTotal.toString().replace('.', ',')}
      </div>
    </div>
  );
}

OrderItens.propTypes = ({
  id: PropTypes.any,
  name: PropTypes.any,
  qty: PropTypes.any,
  price: PropTypes.any,
  index: PropTypes.any,
}).isRequired;
