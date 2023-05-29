import React, { useEffect, useState } from 'react';
import Loading from '../../../components/Loading';
import { requestDataWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';
import UserCard from './UserCard';

export default function UserList() {
  const [loaded, setLoaded] = useState(false);
  const [users, setUser] = useState([]);

  async function getUsers() {
    const { token } = getItem('user');
    const response = await requestDataWithToken('/admin/manage', token);
    setUser(response.users);
    setLoaded(true);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {loaded ? users.map((user, key) => (<UserCard
        key={ key }
        index={ key }
        name={ user.name }
        email={ user.email }
        role={ user.role }
      />)) : <Loading />}
    </div>
  );
}
