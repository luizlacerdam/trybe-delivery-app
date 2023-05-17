import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';

export default function UserProvider({ children }) {
  // const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  return (
    <userContext.Provider value={ useMemo(() => ({ user, setUser }), [user]) }>
      {children}
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
