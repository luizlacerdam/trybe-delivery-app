import React from 'react';

function Login() {
  return (
    <div>

      <form>
        <label htmlFor="input__email">
          <input
            data-testid="common_login__input-email"
            type="text"
            name="email"
            id="input__email"
            placeholder="Email"

          />
        </label>
        <label htmlFor="input__password">
          <input
            data-testid="common_login__input-password"
            type="password"
            name="password"
            id="input__password"
            placeholder="Password"

          />

        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
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
      <div
        data-testid="common_login__element-invalid-email"
      >
        Elemento oculto (Mensagens de error)
      </div>
    </div>
  );
}

export default Login;
