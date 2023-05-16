import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function QtyButton({ id, role }) {
  const [qty, setQty] = useState(0);

  function handleQty(event) {
    const targetId = event.target.id;

    if (targetId === 'add-qty') {
      setQty(qty + 1);
    } else {
      if (qty === 0) {
        return false;
      }
      setQty(qty - 1);
    }
  }

  return (
    <div>
      <button
        data-testid={ `${role}_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ handleQty }
      >
        -
      </button>
      <div
        data-testid={ `${role}_products__input-card-quantity-${id}` }
      >
        { qty }
      </div>
      {/* <input
        type="number"
        value={ qty }
        onChange={}
        data-testid={ `${role}_products__input-card-quantity-${id}` }
      /> */}
      <button
        id="add-qty"
        type="button"
        data-testid={ `${role}_products__button-card-add-item-${id}` }
        onClick={ handleQty }
      >
        +
      </button>
    </div>
  );
}

QtyButton.propTypes = ({
  id: PropTypes.any,
  role: PropTypes.any,
}).isRequired;
