import React, { useState } from 'react';
import Loading from '../../../components/Loading';

export default function UserList() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      {loaded ? '' : <Loading />}
    </div>
  );
}
