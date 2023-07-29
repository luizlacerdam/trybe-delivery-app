import React from 'react';
import PropTypes from 'prop-types';

export default function OrderItens({ index, name, qty, price, urlImage }) {
  const subTotal = (qty * price).toFixed(2);
  return (
    <div className="checkout-card">
      <img
        src={ urlImage }
        className="checkout-image"
        alt="Imagem do produto"
      />
      <div className="checkout-card-props">

        <div
          data-testid={ `customer_order_details__element-order-table-name-${index}` }
        >
          {name}
        </div>
        <div
          data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
        >
          Qty:
          {' '}
          {qty}
        </div>
        <div className="checkout-card-value-details">

          <div
            data-testid={
              `customer_order_details__element-order-table-unit-price-${index}`
            }
          >
            V. Unitário:
            R$
            {price.replace('.', ',')}
          </div>
          <div
            data-testid={
              `customer_order_details__element-order-table-sub-total-${index}`
            }
          >
            V. Subtotal:
            R$
            {subTotal.toString().replace('.', ',')}
          </div>
        </div>

      </div>

    </div>
  );
}

OrderItens.propTypes = ({
  id: PropTypes.any,
  name: PropTypes.any,
  qty: PropTypes.any,
  price: PropTypes.any,
  index: PropTypes.any,
  urlImage: PropTypes.any,
}).isRequired;
