import React from 'react';
import Form from './components/Form';

function Login() {
  return (
    <div>
      <Form />
      <div
        data-testid="common_login__element-invalid-email"
      >
        Elemento oculto (Mensagens de error)
      </div>
    </div>
  );
}

export default Login;
