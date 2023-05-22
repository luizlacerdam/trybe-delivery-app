import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { requestPostWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';

export default function DetalhesEntrega({ sellers, total }) {
  const [seller, setSeller] = useState();
  const [adress, setAdress] = useState('');
  const [number, setNumber] = useState('');

  // function handleSelect(event) {
  //   setSeller(event.target.value);
  // }

  function handleAdress(event) {
    setAdress(event.target.value);
  }

  function handleNumber(event) {
    setNumber(event.target.value);
  }

  async function handleClick() {
    const user = getItem('user');
    // const { token } = user;

    const data = {
      userId: user.id,
      sellerId: seller,
      totalPrice: total,
      delivery_adress: adress,
      delivery_number: number,
      status: 'Pending',
    };
    console.log(data);
    // const request = await requestPostWithToken('/customer/orders', data, token);
  }

  return (
    <div>
      <select
        name=""
        id=""
        data-testid="customer_checkout__select-seller"
        value={ seller }
        onChange={ ({ target: { value } }) => setSeller(value) }
      >
        {sellers.map(({ name, id }, key) => (
          <option key={ key } value={ id }>{name}</option>
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
        type="number"
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
  total: PropTypes.any,
}).isRequired;
