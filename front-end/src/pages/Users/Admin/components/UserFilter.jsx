import React from 'react';
import PropTypes from 'prop-types';

export default function UserFilter() {
  return (

    <form id="user-manage-filter">
      <label htmlFor="name">
        Filtrar por nome:
        <input
          type="text"
          name="name"
        />
      </label>
      <label htmlFor="email">
        Filtrar por email:
        <input
          type="text"
          name="email"
        />
      </label>
      <label htmlFor="role">
        Filtrar por cargo:
        <select
          name="role"
        >
          <option value="all">Todos</option>
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
    </form>

  );
}
