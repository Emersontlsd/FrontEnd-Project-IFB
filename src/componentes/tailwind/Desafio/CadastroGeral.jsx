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
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-8 text-center text-indigo-400">
        Cadastro Completo
      </h1>

      {/* Layout em Grid Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PessoaFisicaForm formData={formData} onChange={handleChange} />
        <PessoaJuridicaForm formData={formData} onChange={handleChange} />
        <ContatoForm formData={formData} onChange={handleChange} />
        <EnderecoForm formData={formData} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CadastroGeral;
