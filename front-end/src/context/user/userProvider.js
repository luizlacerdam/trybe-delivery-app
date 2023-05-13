import { useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';

export default function UserProvider({ children }) {
  const [token, setToken] = useState('');
  return (
    <userContext.Provider value={ { token, setToken } }>
      {children}
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
