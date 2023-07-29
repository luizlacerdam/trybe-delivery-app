import React from 'react';
import PropTypes from 'prop-types';

export default function TotalPrice({ total }) {
  return (
    <div className="total-price-checkout">
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        {' '}
        {total.toFixed(2).toString().replace('.', ',')}
      </span>
    </div>
  );
}

TotalPrice.propTypes = ({
  total: PropTypes.any,
}).isRequired;
