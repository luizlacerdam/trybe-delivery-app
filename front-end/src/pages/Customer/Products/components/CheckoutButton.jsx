import React from 'react';

export default function CheckoutButton() {
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
        {total}

      </div>
    </button>
  );
}
