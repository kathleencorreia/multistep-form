import React from "react";
import { FaLess } from "react-icons/fa";

function UserForm({data, updateFieldHandler}) {
  return (
    <div className="form-control">
      <label htmlFor="name">Nome: </label>
      <input
        type="text"
        name="text"
        id="name"
        placeholder="Digite o seu nome"
        required
        value={data.name || ""}
        onChange={(e) => updateFieldHandler("name", e.target.value)}
        tabIndex={-1}
      /> 
      <label htmlFor="email">E-mail: </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite o seu nome"
        required
        value={data.email || ""}
        onChange={(e) => updateFieldHandler("email", e.target.value)}
      />
    </div>
  );
}

export default UserForm;
