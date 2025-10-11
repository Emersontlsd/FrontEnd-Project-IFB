import React from "react";
import { Input } from "antd";

export default function TituloInput({ value, onChange, ...props }) {
  const handleChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    if (onChange) onChange(onlyNumbers);
  };

  return (
    <Input
      {...props}
      maxLength={12}
      value={value}
      onChange={handleChange}
    />
  );
}

export function isValidTitulo(titulo) {
  // título tem 12 dígitos numéricos
  return /^\d{12}$/.test(titulo);
}
