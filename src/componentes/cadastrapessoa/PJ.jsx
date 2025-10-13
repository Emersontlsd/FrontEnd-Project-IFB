import React, { useState, useEffect } from "react";
import { Form, Input, Button, Radio, DatePicker, Row, Col, message } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import EnderecoForm from "./EnderecoForm";
import TelefoneList from "./TelefoneList";
import "./pessoaform.css";

function PJ() {

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
                <h2>Cadastro Pessoa Jurídica</h2>

                <Form layout="vertical" form={form} onFinish={onFinish}>

                    <Form.Item
                        label="Nome"
                        name="nome"
                        rules={[{ required: true, message: "Informe o nome!" }]}
                    >
                        <Input placeholder="Nome completo ou razão social" />
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
                        label="CNPJ"
                        name="cnpj"
                        rules={[{ required: true, message: "Informe o CNPJ!" }]}
                    >
                        <Input placeholder="00.000.000/0000-00" />
                    </Form.Item>
                    <Form.Item label="Inscrição Estadual" name={["ie", "numero"]}>
                        <Input placeholder="Número da IE" />
                    </Form.Item>
                    <Form.Item label="Estado" name={["ie", "estado"]}>
                        <Input placeholder="UF" maxLength={2} />
                    </Form.Item>
                    <Form.Item label="Data de Registro" name={["ie", "dataRegistro"]}>
                        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
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

export default PJ;
