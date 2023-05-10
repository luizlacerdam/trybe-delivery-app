import React from 'react';

function Login() {
  return (
    <div>

      <form>
        <label htmlFor="input__email">
          <input
            data-testid="email-input"
            type="text"
            name="email"
            id="input__email"
            placeholder="Email"

          />
        </label>
        <label htmlFor="input__password">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            id="input__password"
            placeholder="Password"

          />

        </label>
        <button
          data-testid="login-submit-btn"
          type="button"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
