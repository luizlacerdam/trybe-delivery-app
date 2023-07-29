import React from 'react';
import PropTypes from 'prop-types';

export default function TotalPrice({ totalPrice, role }) {
  return (
    <div className="total-price-checkout">
      <span
        data-testid={ `${role}_order_details__element-order-total-price` }
      >
        Total: R$
        {' '}
        {totalPrice.replace('.', ',')}
      </span>
    </div>

  );
}

TotalPrice.propTypes = ({
  totalPrice: PropTypes.any,
  role: PropTypes.any,

}).isRequired;
