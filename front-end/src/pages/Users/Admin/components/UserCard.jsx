import React from 'react';
import PropTypes from 'prop-types';
import { requestPostWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';

export default function UserCard({ index, id, name, email, role, setUsers, users }) {
  async function removeUser() {
    const { token } = getItem('user');
    const response = await requestPostWithToken('./admin/manage/destroy', { id }, token);
    return response;
  }

  function handleClick() {
    removeUser();
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }
  return (
    <div className="users-card">
      <div
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        {index + 1}
      </div>
      <div
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        {name}
      </div>
      <div
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        {email}
      </div>
      <div
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        {role}
      </div>
      <div>
        <button
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          type="button"
          onClick={ handleClick }
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
UserCard.propTypes = ({
  index: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.any,
  email: PropTypes.any,
  role: PropTypes.any,
  users: PropTypes.any,
  setUsers: PropTypes.any,
}).isRequired;
