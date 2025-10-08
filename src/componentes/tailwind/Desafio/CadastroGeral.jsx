import React, { useState } from "react";
import EnderecoForm from "./EnderecoForm";
import ContatoForm from "./ContatoForm";
import PessoaFisicaForm from "./PessoaFisicaForm";
import PessoaJuridicaForm from "./PessoaJuridicaForm";

const CadastroGeral = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-lg w-full">
      <h1 className="text-2xl font-bold mb-8 text-center text-indigo-400">
        Cadastro Completo
      </h1>

      {/* Layout em Grid Responsivo */}
      <div className="p-6 bg-gray-900 rounded-2xl shadow-lg w-full">
        <PessoaFisicaForm formData={formData} onChange={handleChange} />
        <PessoaJuridicaForm formData={formData} onChange={handleChange} />
        <ContatoForm formData={formData} onChange={handleChange} />
        <EnderecoForm formData={formData} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CadastroGeral;
