import React from "react";
import InputField from "./InputField";

const PessoaJuridicaForm = ({ formData, onChange }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-lg w-full">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Pessoa Jurídica</h2>

      <InputField label="Razão Social" name="nome" value={formData.nome} onChange={onChange} />
      <InputField label="CNPJ" name="cnpj" value={formData.cnpj} onChange={onChange} />
      <InputField label="Inscrição Estadual" name="inscricaoEstadual" value={formData.inscricaoEstadual} onChange={onChange} />
    </div>
  );
};

export default PessoaJuridicaForm;
