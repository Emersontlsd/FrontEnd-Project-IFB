import React from "react";
import InputField from "./InputField";

const EnderecoForm = ({ formData, onChange }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-lg w-full">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Cadastro de Endereço</h2>

      <InputField label="CEP" name="cep" value={formData.cep} onChange={onChange} />
      <InputField label="Logradouro" name="logradouro" value={formData.logradouro} onChange={onChange} />
      <InputField label="Número" name="numero" value={formData.numero} onChange={onChange} />
      <InputField label="Complemento" name="complemento" value={formData.complemento} onChange={onChange} />
      <InputField label="Bairro" name="bairro" value={formData.bairro} onChange={onChange} />
      <InputField label="Cidade" name="cidade" value={formData.cidade} onChange={onChange} />
      <InputField label="Estado" name="estado" value={formData.estado} onChange={onChange} />
      <InputField label="País" name="pais" value={formData.pais} onChange={onChange} />
    </div>
  );
};

export default EnderecoForm;
