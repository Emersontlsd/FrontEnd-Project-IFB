import React from "react";
import InputField from "./InputField";

const PessoaFisicaForm = ({ formData, onChange }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-lg w-full">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Pessoa Física</h2>

      <InputField label="Nome Completo" name="nome" value={formData.nome} onChange={onChange} />
      <InputField label="CPF" name="cpf" value={formData.cpf} onChange={onChange} />
      <InputField label="Título de Eleitor" name="tituloEleitor" value={formData.tituloEleitor} onChange={onChange} />
      <InputField label="Zona" name="zona" value={formData.zona} onChange={onChange} />
      <InputField label="Seção" name="secao" value={formData.secao} onChange={onChange} />
    </div>
  );
};

export default PessoaFisicaForm;
