import React from 'react';
import PropTypes from 'prop-types';

export default function UserCard({ index, name, email, role }) {
  function handleClick() {

  }
  return (
    <div>
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
  name: PropTypes.any,
  email: PropTypes.any,
  role: PropTypes.any,
}).isRequired;
