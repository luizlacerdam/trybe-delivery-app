import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './components/Form';
import { getItem } from '../../utils/localStorageHandling';

function Login() {
  const [resError, setResError] = useState();
  const [user, setUser] = useState();
  const history = useHistory();

  const REDIRECT_PATHS = {
    customer: '/customer/products',
    seller: '/seller/orders',
    administrator: '/admin/manage',
  };
  useEffect(() => {
    const localUser = getItem('user');
    setUser(localUser);
  }, []);

  useEffect(() => {
    if (user) {
      history.push(REDIRECT_PATHS[user.role]);
    }
  }, [user]);

  return (
    <div id="index">
      <h1>DeliveryApp</h1>
      <Form setResError={ setResError } setUser={ setUser } />
      <div
        className="error-message"
        data-testid="common_login__element-invalid-email"
      >
        {!resError ? '' : resError.response.data.message}
      </div>
    </div>
  );
}

export default Login;
