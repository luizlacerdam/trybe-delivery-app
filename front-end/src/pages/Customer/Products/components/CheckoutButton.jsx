import React from 'react';
import PropTypes from 'prop-types';

export default function CheckoutButton({ total }) {
  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
    >
      Ver Carrinho: R$
      {' '}
      <div
        data-testid="customer_products__checkout-bottom-value"
      >
        {total.toFixed(2).replace('.', ',')}

      </div>
    </button>
  );
}
CheckoutButton.propTypes = {
  total: PropTypes.node.isRequired,
};
