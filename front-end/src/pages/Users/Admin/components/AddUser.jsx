import React from 'react';

export default function AddUser() {
  return (
    <div>
      <span>Cadastrar novo usuário</span>
      <form>
        <label htmlFor="new-user-name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            id="new-user-name"
            type="text"
          />
        </label>
        <label htmlFor="new-user-email">
          Email
          <input
            data-testid="admin_manage__input-email"
            id="new-user-email"
            type="email"
          />
        </label>
        <label htmlFor="new-user-password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            id="new-user-password"
            type="password"
          />
        </label>
        <label htmlFor="new-user-select">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            name=""
            id="new-user-select"
          >
            <option>Escolha o tipo</option>
            <option>Vendedor</option>
            <option>Cliente</option>
            <option>Administrador</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
