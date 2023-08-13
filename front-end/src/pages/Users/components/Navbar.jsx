/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import menuWhite from '../../../assets/img/menu_white_36dp.svg';
import menuClose from '../../../assets/img/close_white_36dp.svg';

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

      <nav className="nav-bar">
        <div
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {username}
        </div>

        <div className="nav-list">
          <ul>
            {role === 'administrator' ? (
              <li
                className="nav-item"
              >
                <Link
                  className="nav-link"
                  data-testid="customer_products__element-navbar-link-orders"
                  to="/admin/manage"
                >
                  GERENCIAR USUÁRIOS
                </Link>
              </li>
            ) : null}
            <li
              className="nav-item"
            >
              <Link
                className="nav-link"
                data-testid="customer_products__element-navbar-link-products"
                to="/customer/products"
              >
                PRODUTOS
              </Link>
            </li>
            <li
              className="nav-item"
            >
              <Link
                className="nav-link"
                data-testid="customer_products__element-navbar-link-orders"
                to={ REDIRECT_PATHS[role] }
              >
                PEDIDOS
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="logout-button"
        >
          <button
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            onClick={ handleClick }
          >
            Sair
          </button>
        </div>

        <div className="mobile-menu-icon">
          <button
            type="button"
            onClick={ () => setMenu(!menu) }
          >
            <img className="icon" src={ menu ? menuClose : menuWhite } alt="" />

          </button>

        </div>
      </nav>
      {menu ? (
        <div className="mobile-menu">
          <ul>
            {role === 'administrator' ? (
              <li
                className="nav-item"
              >
                <Link
                  className="nav-link"
                  data-testid="customer_products__element-navbar-link-orders"
                  to="/admin/manage"
                >
                  GERENCIAR USUÁRIOS
                </Link>
              </li>
            ) : null}
            <li
              className="nav-item"
            >
              <Link
                className="nav-link"
                data-testid="customer_products__element-navbar-link-products"
                to="/customer/products"
              >
                PRODUTOS
              </Link>
            </li>
            <li
              className="nav-item"
            >
              <Link
                className="nav-link"
                data-testid="customer_products__element-navbar-link-orders"
                to={ REDIRECT_PATHS[role] }
              >
                PEDIDOS
              </Link>
            </li>
          </ul>
          <div
            className="logout-button"
          >
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
    </header>
  );
}

Navbar.propTypes = ({
  username: PropTypes.any,
  role: PropTypes.any,
}).isRequired;
