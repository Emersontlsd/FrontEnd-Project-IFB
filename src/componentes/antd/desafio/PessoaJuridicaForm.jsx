import React from "react";
import { Card, Space } from "antd";

import Label from "../Label";
import LabelTitle from "../LabelTitle";
import InputText from "../InputText";
import Button from "../Button";

export default function PessoaJuridicaForm() {

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Card
        style={{ width: 360 }}
        bordered
      >
        <LabelTitle texto="CADASTRO PESSOA JURÍDICA" />
        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          <div>
            <Label texto="Razão Social:" />
            <InputText placeholder="Nome razão social" />
          </div>
          <div>
            <Label texto="CNPJ:" />
            <InputText placeholder="Cnpj" />
          </div>
          <div>
            <Label texto="Inscrição Estadual:" />
            <InputText placeholder="Número de inscrição estadual" />
          </div>

          {/* Card do contato */}
          <Card bordered>
            <ContatoForm />
          </Card>

          {/* Card do endereço */}
          <Card bordered>
            <EnderecoForm />
          </Card>
          <Button valor="Cadastrar" />
        </Space>
      </Card>
    </div>
  )

}