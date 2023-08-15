import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Loading from '../../components/Loading';

import { getItem } from '../../../utils/localStorageHandling';
import AddUser from './components/AddUser';
import { requestDataWithToken } from '../../../services/requests';
import UserCard from './components/UserCard';
import UserFilter from './components/UserFilter';
import ErrorComponent from '../components/ErrorComponent';

export default function Gerenciamento() {
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState();

  async function getUsers() {
    try {
      const { token } = getItem('user');
      const response = await requestDataWithToken('/admin/manage', token);
      setUsers(response.users);
      setFilteredUsers(response.users);
      setLoaded(true);
    } catch (e) {
      setError(e.response);
      console.log(e.response);
    }
  }

  useEffect(() => {
    const localUser = getItem('user');
    setUser(localUser);

    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
    setUsersLoaded(false);
  }, [usersLoaded]);

  return (
    <div>
      { error ? <ErrorComponent
        status={ error.status }
        statusText={ error.statusText }
        message={ error.data.error }
      /> : (
        <main>

          {loaded ? (
            <div>
              <Navbar role={ user.role } usernamer={ user.name } />
              <div className="admin-painel-index">
                <AddUser
                  setUsersLoaded={ setUsersLoaded }
                  usersLoaded={ usersLoaded }
                />
                <span>Gerenciamento de Usuários</span>
                <UserFilter
                  users={ users }
                  setUsers={ setUsers }
                  setFilteredUsers={ setFilteredUsers }
                  filteredUsers={ filteredUsers }
                />
                <div className="user-painel">

                  {filteredUsers.map(({ id, name, email, role }, key) => (<UserCard
                    key={ key }
                    index={ key }
                    id={ id }
                    name={ name }
                    email={ email }
                    role={ role }
                    users={ users }
                    setUsers={ setUsers }
                  />))}
                </div>

              </div>

            </div>
          ) : <Loading />}
        </main>

      )}
    </div>
  );
}
