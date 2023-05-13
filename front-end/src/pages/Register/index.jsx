import React from 'react';
import RegisterForms from './components/RegisterForms';

function Register() {
  return (
    <div>

      <RegisterForms />
      <div
        data-testid="common_register__element-invalid_register"
      >
        Elemento oculto (Mensagens de error)
      </div>
    </div>
  );
}

export default Register;
