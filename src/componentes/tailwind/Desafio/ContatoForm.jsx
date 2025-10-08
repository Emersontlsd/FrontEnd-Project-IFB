import React from "react";
import InputField from "./InputField";

const ContatoForm = ({ formData, onChange }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-lg w-full">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Cadastro de Contato</h2>

      <InputField label="E-mail" name="email" type="email" value={formData.email} onChange={onChange} />
      <InputField label="Telefone" name="telefone" value={formData.telefone} onChange={onChange} />
      <InputField label="Celular" name="celular" value={formData.celular} onChange={onChange} />
    </div>
  );
};

export default ContatoForm;
