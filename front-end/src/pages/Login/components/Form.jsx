import React, { useEffect, useState } from 'react';
import { requestLogin } from '../../../services/requests';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const validateEmail = () => {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return regexEmail.test(email);
    };

    const validatePassword = () => {
      const minCharacters = 6;
      return password.length >= minCharacters;
    };
    if (validateEmail() && validatePassword()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const login = async () => {
    const post = await requestLogin('/login', { email, password });
    console.log(post);
  };

  const handleClick = async () => {
    login();
  };

  return (
    <form>
      <label htmlFor="input__email">
        <input
          data-testid="common_login__input-email"
          type="text"
          name="email"
          id="input__email"
          placeholder="Email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="input__password">
        <input
          data-testid="common_login__input-password"
          type="password"
          name="password"
          id="input__password"
          placeholder="Password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Login
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}

export default Form;
