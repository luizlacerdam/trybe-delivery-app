import React, { useEffect, useState } from 'react';
import { requestPost } from '../../../../services/requests';

export default function AddUser() {
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
    try {
      const response = await requestPost('/register', {
        name,
        email,
        password,
        role,
      });
      return response;
    } catch (error) {
      console.log(error);
      setRes(error.response.data.message);
    }
  };

  const handleClick = async () => {
    const response = await createUser();
    if (response) {
      setRes('Usuário cadastrado com sucesso!');
    }
  };

  return (
    <div>
      <span>Cadastrar novo usuário</span>
      <p>{res}</p>
      <form>
        <label htmlFor="new-user-name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            id="new-user-name"
            type="text"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
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

        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
