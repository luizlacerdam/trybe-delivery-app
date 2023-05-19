import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getLocalStorage } from '../../../../utils/localStorageHandling';

export default function CheckoutButton({ total, setTotal }) {
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
