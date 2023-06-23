import React, { useState } from 'react';
import RegisterForms from './components/RegisterForms';

function Register() {
  const [resError, setResError] = useState();
  return (
    <div id="index">

      <RegisterForms setResError={ setResError } />
      <div
        className="error-message"
        data-testid="common_register__element-invalid_register"
      >
        {!resError ? '' : resError.response.data.message}
      </div>
    </div>
  );
}

export default Register;
