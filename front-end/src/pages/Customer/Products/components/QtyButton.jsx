import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function QtyButton({ id }) {
  const [qty, setQty] = useState(0);

  function handleQty(event) {
    const targetId = event.target.id;

    if (targetId === 'add-qty') {
      setQty(+qty + 1);
    } else {
      if (qty === 0) {
        return false;
      }
      setQty(+qty - 1);
    }
  }

  function handleChange(event) {
    const { value } = event.target;
    setQty(value);
  }
  return (
    <div>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ handleQty }
      >
        -
      </button>
      <input
        type="number"
        onChange={ handleChange }
        value={ qty }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        id="add-qty"
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ handleQty }
      >
        +
      </button>
    </div>
  );
}

QtyButton.propTypes = ({
  id: PropTypes.any,
}).isRequired;
