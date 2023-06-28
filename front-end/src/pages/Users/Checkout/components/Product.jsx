import React from 'react';
import PropTypes from 'prop-types';
import { setItem } from '../../../../utils/localStorageHandling';

export default function Product({ index,
  id, title, qty, price, cart, setCart, urlImage }) {
  const subtotal = (qty * price).toFixed(2).toString().replace('.', ',');

  function handleRemove() {
    const newArr = cart.filter((p) => p.id !== id);
    setCart(newArr);
    setItem('cart', newArr);
  }
  return (
    <div className="checkout-card">
      <img
        src={ urlImage }
        className="checkout-image"
        alt="Imagem do produto"
      />
      <div className="checkout-card-props">

        <div
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {title}
        </div>
        <div
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          Qty:
          {' '}
          {qty}
        </div>
        <div className="checkout-card-value-details">

          <div
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            V. Unitário:
            R$
            {price.replace('.', ',')}
          </div>
          <div
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            V. Subtotal:
            R$
            {subtotal}
          </div>
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            onClick={ handleRemove }
          >
            Remover
          </button>
        </div>

      </div>
    </div>
  );
}

Product.propTypes = ({
  index: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.any,
  qty: PropTypes.any,
  price: PropTypes.any,
  cart: PropTypes.any,
  setCart: PropTypes.any,
}).isRequired;
