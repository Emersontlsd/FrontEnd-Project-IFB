import React from "react";
import { Space } from "antd";
import Label from "../Label";
import LabelTitle from "../LabelTitle";
import InputText from "../InputText";

export default function ContatoForm() {
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
      <LabelTitle texto="CONTATO" />

      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <div>
          <Label texto="Email:" />
          <InputText placeholder="exemplo@email.com" />
        </div>
        <div>
          <Label texto="Telefone:" />
          <InputText placeholder="(xx) xxxx-xxxx" />
        </div>
        <div>
          <Label texto="Celular:" />
          <InputText placeholder="(xx) xxxxx-xxxx" />
        </div>
      </Space>
    </div>
  );
}
