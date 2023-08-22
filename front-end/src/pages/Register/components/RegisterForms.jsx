import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import { requestPost } from '../../../services/requests';

function RegisterForms({ setResError }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();
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
    if (validateEmail() && validatePassword() && validateName()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password, name]);

  const saveLocalStorage = (user, token) => {
    localStorage.setItem('user', JSON.stringify({
      ...user, token,
    }));
  };

  const createUser = async () => {
    try {
      const response = await requestPost('/register', {
        name,
        email,
        password,
        role: 'customer',
      });
      saveLocalStorage(response.user, response.token);
      return response;
    } catch (error) {
      setResError(error);
    }
  };

  const handleClick = async () => {
    const response = await createUser();
    if (response) {
      history.push('/customer/products');
    }
  };

  return (
    <form>
      <label htmlFor="input_name">
        Nome
        <input
          data-testid="common_register__input-name"
          name="name"
          id="input_name"
          placeholder="Nome com 12 ou mais"
          type="text"
          minLength="12"
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="input_email">
        Email
        <input
          data-testid="common_register__input-email"
          name="email"
          id="input_email"
          placeholder="email@email.com"
          type="email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="input_password">
        Senha
        <input
          data-testid="common_register__input-password"
          name="password"
          id="input_password"
          placeholder="Minimo de 6 caracteres"
          type="password"
          minLength="6"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        data-testid="common_register__button-register"
        type="button"
        onClick={ handleClick }
        disabled={ isDisabled }
        id="cadastrar-button"
        style={ isDisabled ? { backgroundColor: '#727272' } : {} }
      >
        CADASTRAR
      </button>
    </form>
  );
}

RegisterForms.propTypes = ({
  setResError: PropTypes.any,
}).isRequired;

export default RegisterForms;
