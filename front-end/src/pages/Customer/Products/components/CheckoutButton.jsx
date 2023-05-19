import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CheckoutButton({ total }) {
  const history = useHistory();
  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
      onClick={ () => { history.push('/customer/checkout'); } }
      disabled={ total === 0 }
    >
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
