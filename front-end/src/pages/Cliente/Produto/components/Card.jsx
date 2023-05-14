import React from 'react';

export default function Card() {
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
    </div>
  );
}
