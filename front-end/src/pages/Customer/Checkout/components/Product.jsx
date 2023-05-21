import React from 'react';
import PropTypes from 'prop-types';

export default function Product({ index, title, qty, price }) {
  const subtotal = (qty * price).toString().replace('.', ',');
  return (
    <div>
      <div
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {title}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {qty}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price.replace('.', ',')}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {subtotal}
      </div>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        Remover
      </button>
    </div>
  );
}

Product.propTypes = ({
  index: PropTypes.any,
  name: PropTypes.any,
  qty: PropTypes.any,
  price: PropTypes.any,
}).isRequired;
