import React from 'react';
import PropTypes from 'prop-types';

export default function TotalPrice({ total }) {
  return (
    <div>
      Total: R$
      {' '}
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {total.toFixed(2).toString().replace('.', ',')}
      </span>
    </div>
  );
}

TotalPrice.propTypes = ({
  total: PropTypes.any,
}).isRequired;
