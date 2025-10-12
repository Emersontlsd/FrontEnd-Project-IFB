import React from "react";
import { Space } from "antd";
import Label from "../Label";
import LabelTitle from "../LabelTitle";
import InputText from "../InputText";
import Button from "../Button";

export default function EnderecoForm() {
  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        borderRadius: 8,
        padding: "16px 20px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <LabelTitle texto="ENDEREÇO" />

      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <div>
          <Label texto="CEP:" />
          <InputText placeholder="Digite o CEP" />
        </div>
        <div>
          <Label texto="Logradouro:" />
          <InputText placeholder="Rua, avenida..." />
        </div>
        <div>
          <Label texto="Complemento:" />
          <InputText placeholder="Apartamento, bloco..." />
        </div>
        <div>
          <Label texto="Bairro:" />
          <InputText placeholder="Bairro" />
        </div>
        <div>
          <Label texto="Cidade:" />
          <InputText placeholder="Cidade" />
        </div>
        <div>
          <Label texto="Estado:" />
          <InputText placeholder="Estado" />
        </div>
        <div>
          <Label texto="País:" />
          <InputText placeholder="Selecione o país" />
        </div>
      </Space>
    </div>
  );
}
