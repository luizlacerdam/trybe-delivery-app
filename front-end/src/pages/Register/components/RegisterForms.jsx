import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegisterForms() {
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
  }, [email, password]);

  return (
    <form>
      <label htmlFor="input_name">
        Nome
        <input
          data-testid="common_register__input-name"
          name="name"
          id="input_name"
          placeholder="Seu nome"
          type="text"
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
          placeholder="*******"
          type="password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        data-testid="common_register__button-register"
        type="button"
        onClick={ () => history.push('/register') }
        disabled={ isDisabled }
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default RegisterForms;