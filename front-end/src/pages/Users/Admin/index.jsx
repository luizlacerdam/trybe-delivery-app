import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Loading from '../../components/Loading';

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
      {loaded ? <Navbar role={ user.role } usernamer={ user.name } /> : <Loading />}

    </div>
  );
}
