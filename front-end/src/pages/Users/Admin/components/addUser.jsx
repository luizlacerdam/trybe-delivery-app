import React from 'react';

export default function addUser() {
  return (
    <div>
      <span>Cadastrar novo usuário</span>
      <div>
        <label htmlFor="new-user-name">
          Nome
          <input id="new-user-name" type="text" />
        </label>
      </div>
    </div>
  );
}
