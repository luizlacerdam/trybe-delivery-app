import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { requestPostWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';

export default function AddUser({ setUsersLoaded, users, setUsers }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [res, setRes] = useState('');

  useEffect(() => {
    const validateEmail = () => {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return regexEmail.test(email);
    };

    const validateName = () => {
      const minCharacters = 12;
      return name.length >= minCharacters;
    };

    const validatePassword = () => {
      const minCharacters = 6;
      return password.length >= minCharacters;
    };

    const validateRole = () => {
      const minCharacters = 1;
      return role.length >= minCharacters;
    };

    if (validateEmail() && validatePassword() && validateName() && validateRole()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password, name, role]);

  const createUser = async () => {
    const { token } = getItem('user');
    try {
      const response = await requestPostWithToken('/admin/manage/', {
        name,
        email,
        password,
        role,
      }, token);
      setUsers([...users, response.user]);
      return response;
    } catch (error) {
      console.log(error);
      setRes(error.response.data.message);
    }
  };

  const handleClick = async () => {
    const response = await createUser();
    if (response) {
      setUsersLoaded(true);
      setRes('Usuário cadastrado com sucesso!');
    }
  };

  return (
    <div className="add-user-component">
      <span>Cadastrar novo usuário</span>
      <p
        data-testid="admin_manage__element-invalid-register"
      >
        {res}
      </p>
      <form id="add-new-user-form">
        <label htmlFor="new-user-name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            id="new-user-name"
            type="text"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
            required
          />
        </label>
        <label htmlFor="new-user-email">
          Email
          <input
            data-testid="admin_manage__input-email"
            id="new-user-email"
            type="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
            required
          />
        </label>
        <label htmlFor="new-user-password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            id="new-user-password"
            type="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            required
          />
        </label>
        <label htmlFor="new-user-select">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            name=""
            id="new-user-select"
            value={ role }
            onChange={ ({ target }) => setRole(target.value) }
            required
          >
            <option>Escolha o tipo</option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          onClick={ handleClick }
          disabled={ isDisabled }
          className="addUser-button"
          style={ isDisabled
            ? { backgroundColor: 'gray' } : { backgroundColor: 'green' } }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

AddUser.propTypes = ({
  setUsersLoaded: PropTypes.any,
  users: PropTypes.any,
  setUsers: PropTypes.any,
}).isRequired;
