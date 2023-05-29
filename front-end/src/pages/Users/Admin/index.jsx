import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Loading from '../../components/Loading';

import { getItem } from '../../../utils/localStorageHandling';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

export default function Gerenciamento() {
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const localUser = getItem('user');
    setUser(localUser);
    setLoaded(true);
  }, []);
  return (
    <div>
      {loaded ? (
        <div>
          <Navbar role={ user.role } usernamer={ user.name } />
          <AddUser />
          <UserList />
        </div>
      ) : <Loading />}

    </div>
  );
}
