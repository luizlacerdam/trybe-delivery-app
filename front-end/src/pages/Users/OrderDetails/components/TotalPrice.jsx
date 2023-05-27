import React from 'react';
import PropTypes from 'prop-types';

export default function TotalPrice({ totalPrice, role }) {
  return (
    <div
      data-testid={ `${role}_order_details__element-order-total-price` }
    >
      {`Total: ${totalPrice.replace('.', ',')}`}
    </div>
  );
}

TotalPrice.propTypes = ({
  totalPrice: PropTypes.any,
  role: PropTypes.any,

}).isRequired;
