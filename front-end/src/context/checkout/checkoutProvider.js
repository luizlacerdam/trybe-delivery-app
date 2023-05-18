import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import checkoutContext from './checkoutContext';

export default function CheckoutProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [checkoutValue, setCheckoutValue] = useState(0.00);
  return (
    <checkoutContext.Provider
      value={
        useMemo(() => ({ checkoutValue,
          setCheckoutValue,
          cart,
          setCart }), [checkoutValue, cart])
      }
    >
      {children}
    </checkoutContext.Provider>
  );
}

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
