import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { requestPostWithToken } from '../../../../services/requests';
import { getItem, setItem } from '../../../../utils/localStorageHandling';

export default function DetalhesEntrega({ sellers, total, cart }) {
  const [seller, setSeller] = useState();
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const history = useHistory();
  function handleSelect(event) {
    setSeller(event.target.value);
  }

  function handleAddress(event) {
    setAddress(event.target.value);
  }

  function handleNumber(event) {
    setNumber(event.target.value);
  }

  async function handleClick() {
    const user = getItem('user');
    const { token } = user;
    const data = {
      order: {
        userId: +user.id,
        sellerId: +seller,
        totalPrice: +total.toFixed(2),
        deliveryAddress: address,
        deliveryNumber: +number,
        status: 'Pendente',
      },
      cart,
    };
    console.log(data);
    try {
      const response = await requestPostWithToken('/customer/orders', data, token);
      setItem('cart', []);
      history.push(`/customer/orders/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
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
        <option>Selecione o vendedor</option>
        {sellers.map(({ name, id }, key) => (
          <option key={ key } value={ id }>{name}</option>
        ))}
      </select>
      <input
        data-testid="customer_checkout__input-address"
        type="text"
        value={ address }
        onChange={ handleAddress }
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
  cart: PropTypes.any,
}).isRequired;
