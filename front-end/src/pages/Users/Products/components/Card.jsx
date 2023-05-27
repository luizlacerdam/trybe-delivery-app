import React from 'react';
import PropTypes from 'prop-types';
import QtyButton from './QtyButton';

export default function Card({ id, urlImage, price, title, setTotal, total }) {
  console.log(total);
  return (
    <div>
      <div
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {title}
      </div>
      <div
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.replace('.', ',')}
      </div>
      <div>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt={ title }
        />
      </div>

      <QtyButton
        id={ id }
        urlImage={ urlImage }
        price={ price }
        title={ title }
        setTotal={ setTotal }
        total={ total }
      />
    </div>
  );
}

Card.propTypes = ({
  id: PropTypes.any,
  imgUrl: PropTypes.any,
  price: PropTypes.any,
  title: PropTypes.any,
  setTotal: PropTypes.any,
}).isRequired;