import React from 'react';
import PropTypes from 'prop-types';
import QtyButton from './QtyButton';

export default function Card({ id, role, imgUrl, price, title }) {
  return (
    <div>
      <div
        data-testid={ `${role}_products__element-card-price-${id}` }
      >
        {price}
      </div>
      <div
        data-testid={ `${role}_products__img-card-bg-image-${id}` }
      >
        <img src={ imgUrl } alt="" />
      </div>
      <div
        data-testid={ `${role}_products__img-card-title-${id}` }
      >
        {title}
      </div>
      <QtyButton id={ id } role={ role } />
    </div>
  );
}

Card.propTypes = ({
  id: PropTypes.any,
  role: PropTypes.any,
  imgUrl: PropTypes.any,
  price: PropTypes.any,
  title: PropTypes.any,
}).isRequired;
