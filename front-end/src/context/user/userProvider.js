import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';

export default function UserProvider({ children }) {
  const [token, setToken] = useState('');
  return (
    <userContext.Provider value={ useMemo(() => ({ token, setToken }), [token]) }>
      {children}
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
