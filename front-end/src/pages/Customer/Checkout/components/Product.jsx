import React from 'react';
import PropTypes from 'prop-types';
import { setItem } from '../../../../utils/localStorageHandling';

export default function Product({ index, id, title, qty, price, cart, setCart }) {
  const subtotal = (qty * price).toFixed(2).toString().replace('.', ',');

  function handleRemove() {
    const newArr = cart.filter((p) => p.id !== id);
    setCart(newArr);
    setItem('cart', newArr);
  }
  return (
    <div>
      <div
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {title}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {qty}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price.replace('.', ',')}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
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
