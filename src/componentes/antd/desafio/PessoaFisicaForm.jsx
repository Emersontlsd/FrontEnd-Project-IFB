import React from "react";
import { Card, Space } from "antd";

import Label from "../Label";
import LabelTitle from "../LabelTitle";
import InputText from "../InputText";
import Button from "../Button";

export default function PessoaFisicaForm() {

    return (
        <div 
          style={{
            height:"100vh",
            width:"100vw",
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
            <LabelTitle texto="Cadastro Pessoa Física" />
            <Space direction="vertical" style={{width: "100%"}} size="middle">
                <div>
                    <Label texto="Nome:" />
                    <InputText placeholder="Nome completo" />
                </div>
                <div>
                    <Label texto="CPF:" />
                    <InputText placeholder="Cpf" />
                </div>
                <div>
                    <Label texto="Título de Eleitor:" />
                    <InputText placeholder="Número do título" />
                </div>
                <div>
                    <Label texto="Zona de Votação:" />
                    <InputText placeholder="Zona" />
                </div>
                <div>
                    <Label texto="Seção de Votação:" />
                    <InputText placeholder="Seção" />
                </div>
                <Button valor="Cadastrar" />  
            </Space>
          </Card>
        </div>
    )

}