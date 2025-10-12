import React, { useState } from "react";
import { Button as AntButton, message } from "antd";

export default function Button({ valor }) {
  const [texto, setTexto] = useState(valor);

  const handleClick = () => {
    message.success("Botão clicado com sucesso!");
  };

  return (
    <AntButton
      type="primary"
      block
      size="large"
      onClick={handleClick}
      style={{
        backgroundColor: "#6CACE4", // Azul acinzentado - Paleta 3
        borderColor: "#6CACE4",
        color: "#FFFFFF",
        fontWeight: 600,
        borderRadius: 8,
        padding: "10px 20px",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#5271A2"; // Azul petróleo suave
        e.currentTarget.style.borderColor = "#5271A2";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#6CACE4";
        e.currentTarget.style.borderColor = "#6CACE4";
      }}
    >
      {texto}
    </AntButton>
  );
}
