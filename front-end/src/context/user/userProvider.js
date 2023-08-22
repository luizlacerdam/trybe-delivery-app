import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';

export default function UserProvider({ children }) {
  const [contextUser, setContextUser] = useState({});
  return (
    <userContext.Provider
      value={ useMemo(() => ({
        contextUser, setContextUser }), [contextUser]) }
    >
      {children}
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
