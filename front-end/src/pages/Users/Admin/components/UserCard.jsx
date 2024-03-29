import React from 'react';
import PropTypes from 'prop-types';
import { requestPostWithToken } from '../../../../services/requests';
import { getItem } from '../../../../utils/localStorageHandling';

export default function UserCard({
  index,
  id, name, email, role, setFilteredUsers, filteredUsers }) {
  async function removeUser() {
    const { token } = getItem('user');
    const response = await requestPostWithToken('./admin/manage/destroy', { id }, token);
    return response;
  }

  function handleClick() {
    removeUser();

    const newUsers = filteredUsers.filter((user) => user.id !== id);
    setFilteredUsers(newUsers);
  }
  return (
    <div className="users-card">
      <div
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        Id:
        {' '}
        {id}
      </div>
      <div
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        Nome:
        {' '}
        {name}
      </div>
      <div
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        Email:
        {' '}
        {email}
      </div>
      <div
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        Role:
        {' '}
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
  filteredUsers: PropTypes.any,
  setFilteredUsers: PropTypes.any,
}).isRequired;
