import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ username, role }) {
  return (
    <header>
      <div>
        PRODUTOS

      </div>
      <div
        data-testid={ `${role}_products__element-navbar-link-products` }
      />
      11
      <div
        data-testid={ `${role}_products__element-navbar-link-orders` }
      >
        MEUS PEDIDOS

      </div>
      <div
        data-testid={ `${role}_products__element-navbar-user-full-name` }
      >
        {username}

      </div>
      <div
        data-testid={ `${role}_products__element-navbar-link-logout` }
      >
        Sair

      </div>
    </header>
  );
}

Navbar.propTypes = ({
  username: PropTypes.any,
  role: PropTypes.any,
}).isRequired;
