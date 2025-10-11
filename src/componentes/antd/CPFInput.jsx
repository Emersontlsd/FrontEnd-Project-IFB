import React from "react";
import { Input } from "antd";

export default function CPFInput({ value, onChange, ...props }) {
  const handleChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, ""); // aceita só números
    if (onChange) onChange(onlyNumbers);
  };

  return (
    <Input
      {...props}
      maxLength={11}
      value={value}
      onChange={handleChange}
    />
  );
}

export function isValidCPF(cpf) {
  // remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf[10]);
}
