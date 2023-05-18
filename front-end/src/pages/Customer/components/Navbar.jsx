import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar({ username, role }) {
  const history = useHistory();
  const handleClick = () => {
    localStorage.clear();
    history.push('/login');
  };
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
      <div>
        <button
          data-testid={ `${role}_products__element-navbar-link-logout` }
          type="button"
          onClick={ handleClick }
        >
          Sair

        </button>

      </div>
    </header>
  );
}

Navbar.propTypes = ({
  username: PropTypes.any,
  role: PropTypes.any,
}).isRequired;
