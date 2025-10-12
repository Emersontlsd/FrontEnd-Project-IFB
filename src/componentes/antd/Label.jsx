// src/components/Label.jsx
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

export default function Label({ texto }) {
  return (
    <Text
      strong
      style={{
        fontSize: 14,           // um pouco menor e mais harmonioso
        color: "#7B8B9A",       // Cinza neutro da Paleta 3
        display: "block",       // garante quebra de linha para alinhamento
        marginBottom: 4,        // espaçamento inferior consistente
      }}
    >
      {texto}
    </Text>
  );
}
