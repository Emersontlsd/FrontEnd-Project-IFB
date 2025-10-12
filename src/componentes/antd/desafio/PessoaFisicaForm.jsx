import React from "react";
import { Card, Space } from "antd";

import Label from "../Label";
import LabelTitle from "../LabelTitle";
import InputText from "../InputText";
import Button from "../Button";
import ContatoForm from "../../antd/desafio/ContatoForm";
import EnderecoForm from "../../antd/desafio/EnderecoForm";

export default function PessoaFisicaForm() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center", // ✅ Centraliza horizontalmente
        alignItems: "center", // ✅ Centraliza verticalmente
        overflow: "hidden", // impede scroll externo
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <Card
        bordered
        style={{
          width: "100%",
          maxWidth: 700, // ✅ largura máxima
          maxHeight: "90vh",
          borderRadius: 10,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "24px",
          overflowY: "auto", // ✅ scroll interno
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 550,
            margin: "0 auto", // ✅ força centralização do conteúdo
          }}
        >
          <LabelTitle texto="CADASTRO PESSOA FÍSICA" />

          <Space
            direction="vertical"
            style={{ width: "100%", gap: "16px" }}
            size="middle"
          >
            <div>
              <Label texto="Nome:" />
              <InputText placeholder="Nome completo" />
            </div>

            <div>
              <Label texto="CPF:" />
              <InputText placeholder="CPF" />
            </div>

            <div>
              <Label texto="Título de Eleitor:" />
              <InputText placeholder="Número do título" />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1, minWidth: 130 }}>
                <Label texto="Zona de Votação:" />
                <InputText placeholder="Zona" />
              </div>

              <div style={{ flex: 1, minWidth: 130 }}>
                <Label texto="Seção de Votação:" />
                <InputText placeholder="Seção" />
              </div>
            </div>

            {/* 🔹 Centraliza os forms dentro do card */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                width: "100%",
                marginTop: "8px",
              }}
            >
              <div style={{ width: "100%" }}>
                <EnderecoForm />
              </div>
              <div style={{ width: "100%" }}>
                <ContatoForm />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 16,
                marginBottom: 8,
              }}
            >
              <Button valor="CADASTRAR" />
            </div>
          </Space>
        </div>
      </Card>
    </div>
  );
}
