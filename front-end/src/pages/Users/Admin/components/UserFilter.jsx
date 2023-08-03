import React from 'react';
import PropTypes from 'prop-types';

export default function UserFilter({ users, setFilteredUsers }) {
  function handleName({ target: { value } }) {
    const newUsers = users.filter((user) => user.name.includes(value));
    setFilteredUsers(newUsers);
  }

  function handleEmail({ target: { value } }) {
    const newUsers = users.filter((user) => user.email.includes(value));
    setFilteredUsers(newUsers);
  }

  return (

    <form id="user-manage-filter">
      <label htmlFor="name">
        Filtrar por nome:
        <input
          type="text"
          name="name"
          onChange={ handleName }
        />
      </label>
      <label htmlFor="email">
        Filtrar por email:
        <input
          type="text"
          name="email"
          onChange={ handleEmail }
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
UserFilter.propTypes = ({
  users: PropTypes.any,
  setUsers: PropTypes.any,
}).isRequired;
