import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar({ username, role }) {
  const [menu, setMenu] = useState(false);

  const history = useHistory();
  const handleClick = () => {
    localStorage.clear();
    history.push('/login');
  };
  const REDIRECT_PATHS = {
    customer: '/customer/orders',
    seller: '/seller/orders',
  };
  return (
    <header>

      {menu ? (
        <div>

          <div>
            {role === 'administrator' ? (
              <Link
                data-testid="customer_products__element-navbar-link-orders"
                to="/admin/manage"
              >
                GERENCIAR USUÁRIOS
              </Link>
            ) : (
              <div>
                <div>
                  <Link
                    data-testid="customer_products__element-navbar-link-products"
                    to="/customer/products"
                  >
                    PRODUTOS
                  </Link>
                </div>
                <div>
                  <Link
                    data-testid="customer_products__element-navbar-link-orders"
                    to={ REDIRECT_PATHS[role] }
                  >
                    PEDIDOS
                  </Link>
                </div>
              </div>)}

          </div>
          <div
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {username}
          </div>
          <div>
            <button
              data-testid="customer_products__element-navbar-link-logout"
              type="button"
              onClick={ handleClick }
            >
              Sair
            </button>
          </div>
        </div>
      ) : null}
      <button
        id="menu-button"
        type="button"
        onClick={ () => setMenu(!menu) }
      >
        Menu
      </button>
    </header>
  );
}

Navbar.propTypes = ({
  username: PropTypes.any,
  role: PropTypes.any,
}).isRequired;
