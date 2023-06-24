import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getLocalStorage, setStorageArray } from '../../../../utils/localStorageHandling';

export default function QtyButton({ id, price, title, urlImage, setTotal }) {
  const [qty, setQty] = useState(0);
  const [localSs, setLocalSs] = useState(getLocalStorage('cart'));
  const product = {
    id,
    price,
    title,
    urlImage,
    qty,
  };
  useEffect(() => {
    if (qty > 0) {
      setTotal(localSs.reduce((acc, cur) => {
        const totalLocal = cur.price * cur.qty;
        return acc + totalLocal;
      }, 0));
    }
  }, [qty, localSs, setTotal]);

  useEffect(() => {
    const cartArr = getLocalStorage('cart');
    if (cartArr.find((p) => p.id === product.id)) {
      const cartArrFilter = cartArr.filter((p) => p.id === product.id);
      setQty(cartArrFilter[0].qty);
    } else {
      setQty(0);
    }
  }, []);

  useEffect(() => {
    console.log('log do qty');
    const cartArr = getLocalStorage('cart');
    if (qty > 0) {
      const novoArr = setStorageArray(cartArr, product, 'cart');
      setLocalSs(novoArr);
    }
  }, [qty]);

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
    setQty(+value);
  }
  return (
    <div className="qty-button">
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ handleQty }
      >
        -
      </button>
      <input
        type="number"
        min={ 0 }
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
  imgUrl: PropTypes.any,
  price: PropTypes.any,
  title: PropTypes.any,
  setTotal: PropTypes.any,
}).isRequired;
