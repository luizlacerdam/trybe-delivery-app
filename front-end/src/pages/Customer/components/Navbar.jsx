import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar({ username, role }) {
  const history = useHistory();
  const handleClick = () => {
    localStorage.clear();
    history.push('/login');
  };
  return (
    <header>
      <div>
        <Link
          data-testid={ `${role}_products__element-navbar-link-products` }
          to="/customer/products"
        >
          PRODUTOS

        </Link>
      </div>
      <div>
        <Link
          data-testid={ `${role}_products__element-navbar-link-orders` }
          to="/customer/orders"
        >
          PEDIDOS
        </Link>
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
