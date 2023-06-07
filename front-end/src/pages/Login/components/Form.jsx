import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { requestLogin } from '../../../services/requests';
import userContext from '../../../context/user/userContext';

function Form({ setResError, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const userCont = useContext(userContext);
  const history = useHistory();
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

  const saveLocalStorage = (user, token) => {
    localStorage.setItem('user', JSON.stringify({
      ...user, token,
    }));
  };

  const login = async () => {
    try {
      const response = await requestLogin('/login', { email, password });
      userCont.setUser(response);
      saveLocalStorage(response.user, response.token);
      return response;
    } catch (error) {
      setResError(error);
    }
  };

  const handleClick = async () => {
    const response = await login();
    setUser(response.user);
  };

  return (
    <form>
      <label htmlFor="input__email">
        Login
        <input
          data-testid="common_login__input-email"
          type="text"
          name="email"
          id="input__email"
          placeholder="email@email.com"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="input__password">
        Password
        <input
          data-testid="common_login__input-password"
          type="password"
          name="password"
          id="input__password"
          placeholder="******"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        id="login-button"
        data-testid="common_login__button-login"
        type="button"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Login
      </button>
      <button
        id="registrar-button"
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => history.push('/register') }

      >
        Ainda não tenho conta
      </button>
    </form>
  );
}
Form.propTypes = ({
  setResError: PropTypes.any,
  setUser: PropTypes.any,
}).isRequired;

export default Form;
