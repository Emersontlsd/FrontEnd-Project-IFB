import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import EnderecoForm from "./EnderecoForm";
import EnderecoFormComBuscaCep from "./EnderecoFormComBuscaCep";
import TelefoneList from "./TelefoneList";
import "./pessoaform.css";



function PF() {

    const [form] = Form.useForm();
    const [mostrarTopo, setMostrarTopo] = useState(false);

    function onFinish(values) {
        console.log("📋 Dados submetidos:", values);
        message.success("Dados armazenados localmente (modo formulário).");
    }

    useEffect(() => {
        const handleScroll = () => {
            setMostrarTopo(window.scrollY > 300); // aparece após 300px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Função para subir a tela ao topo
    const voltarAoTopo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="main-scroll">
            <div className="form-container">
                <h2>Cadastro Pessoa Física</h2>

                <Form layout="vertical" form={form} onFinish={onFinish}>

                    <Form.Item
                        label="Nome"
                        name="nome"
                        rules={[{ required: true, message: "Informe o nome!" }]}
                    >
                        <Input placeholder="Nome completo " />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Informe o e-mail!" },
                            { type: "email", message: "Formato de e-mail inválido!" },
                        ]}
                    >
                        <Input placeholder="exemplo@email.com" />
                    </Form.Item>

                    <EnderecoForm />
                    <TelefoneList form={form} />

                    <Form.Item
                        label="CPF"
                        name="cpf"
                        rules={[{ required: true, message: "Informe o CPF!" }]}
                    >
                        <Input placeholder="Somente números" maxLength={11} />
                    </Form.Item>

                    <Form.Item label="Data de Nascimento" name="dataNascimento">
                        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item label="Título Eleitoral - Número" name={["titulo", "numero"]}>
                        <Input placeholder="Número do título" />
                    </Form.Item>
                    <Form.Item label="Zona" name={["titulo", "zona"]}>
                        <Input placeholder="Zona eleitoral" />
                    </Form.Item>
                    <Form.Item label="Seção" name={["titulo", "secao"]}>
                        <Input placeholder="Seção eleitoral" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={onFinish} block>
                            Salvar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <button
                className={`scroll-top-button ${mostrarTopo ? "" : "hidden"}`}
                onClick={voltarAoTopo}
                title="Voltar ao topo"
            >
                <ArrowUpOutlined />
            </button>
        </div>
    );

}

export default PF;