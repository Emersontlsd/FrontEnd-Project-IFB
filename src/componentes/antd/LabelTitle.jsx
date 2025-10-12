// src/components/LabelTitle.jsx
import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function LabelTitle({ texto }) {
  return (
    <Title
      level={2}
      style={{
        color: "#5271A2",       // Azul petróleo suave da Paleta 3
        textAlign: "center",     // centralizado
        marginBottom: 20,        // espaçamento consistente
        fontWeight: 700,          // destaque do título
        lineHeight: 1.2,          // deixa mais compacto visualmente
      }}
    >
      {texto}
    </Title>
  );
}
