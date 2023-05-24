import React from 'react';
import PropTypes from 'prop-types';

export default function TotalPrice({ totalPrice }) {
  return (
    <div
      data-testid="customer_order_details__element-order-total-price"
    >
      {`Total: ${totalPrice.replace('.', ',')}`}
    </div>
  );
}

TotalPrice.propTypes = ({
  totalPrice: PropTypes.any,
}).isRequired;
