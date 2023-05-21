import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DetalhesEntrega({ sellers }) {
  const [seller, setSeller] = useState('');
  const [adress, setAdress] = useState('');
  const [number, setNumber] = useState();

  function handleSelect(event) {
    setSeller(event.target.value);
  }

  function handleAdress(event) {
    setAdress(event.target.value);
  }

  function handleNumber(event) {
    setNumber(event.target.value);
  }

  function handleClick() {

  }

  return (
    <div>
      <select
        name=""
        id=""
        data-testid="customer_checkout__select-seller"
        value={ seller }
        onChange={ handleSelect }
      >
        {sellers.map((s, key) => (
          <option key={ key } value={ s.name }>{s.name}</option>
        ))}
      </select>
      <input
        data-testid="customer_checkout__input-address"
        type="text"
        value={ adress }
        onChange={ handleAdress }
      />
      <input
        data-testid="customer_checkout__input-address-number"
        type="text"
        value={ number }
        onChange={ handleNumber }
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClick }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

DetalhesEntrega.propTypes = ({
  sellers: PropTypes.any,
}).isRequired;
