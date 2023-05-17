import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Form from './components/Form';
// import userContext from '../../context/user/userContext';

// const REDIRECT_PATHS = {
//   customer: '/customer/products',
//   seller: '/seller/orders',
//   administrator: '/admin/manage',
// };

function Login() {
  // const { token } = useContext(userContext);
  const [resError, setResError] = useState();
  // const history = useHistory();
  // useEffect(() => {
  //   history.push(REDIRECT_PATHS[role]);
  // }, [role, history]);

  // useEffect(() => {
  //   if (token) history.push('/customer/products');
  // });

  return (
    <div>
      <Form setResError={ setResError } />
      <div
        data-testid="common_login__element-invalid-email"
      >
        {!resError ? '' : resError.response.statusText}
      </div>
    </div>
  );
}

export default Login;
