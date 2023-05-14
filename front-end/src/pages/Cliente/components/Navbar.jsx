import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ username }) {
  return (
    <div>
      <div
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS

      </div>
      <div
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS

      </div>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {username}

      </div>
      <div
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair

      </div>
    </div>
  );
}

Navbar.propTypes = ({
  username: PropTypes.any,
}).isRequired;
