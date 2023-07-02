import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function OrderCard({ id,
  status, totalPrice, date, role, deliveryAddress, deliveryNumber }) {
  const convertDate = new Date(date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const formattedDate = convertDate.toLocaleDateString('en-GB', options);

  return (
    <Link
      className="order-card-link"
      to={ `/${role}/orders/${id}` }
    >
      <div className="order-card">
        <label
          htmlFor="order-id"
        >
          Pedido
          <span
            data-testid={ `${role}_orders__element-order-id-${id}` }
            id="order-id"
          >
            {id}
          </span>
        </label>
        <div
          className="order-card-status"
          data-testid={ `${role}_orders__element-delivery-status-${id}` }
        >
          {status}
        </div>
        <div className="order-card-date-and-total">
          <div
            data-testid={ `${role}_orders__element-order-date-${id}` }
          >
            {formattedDate}
          </div>
          <div
            data-testid={ `${role}_orders__element-card-price-${id}` }
          >
            R$
            {totalPrice.replace('.', ',')}
          </div>
        </div>

        {role === 'seller'
          ? (
            <div
              data-testid={ `seller_orders__element-card-address-${id}` }
            >
              {`${deliveryAddress}, ${deliveryNumber}`}
            </div>
          )
          : ''}
      </div>
    </Link>
  );
}

OrderCard.propTypes = ({
  id: PropTypes.any,
  status: PropTypes.any,
  totalPrice: PropTypes.any,
  date: PropTypes.any,
  role: PropTypes.any,
  deliveryAddress: PropTypes.any,
  deliveryNumber: PropTypes.any,
}).isRequired;
