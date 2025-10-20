import React from "react";
import { Form, Input, Row, Col, Select, message } from "antd";
import axios from "axios";
import InputMask from "react-input-mask";


const { Option } = Select;

function EnderecoFormComBuscaCep() {
    const [form] = Form.useForm();

    const buscarEnderecoPorCep = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                throw new Error("CEP não encontrado.");
            }
            return response.data;
        } catch (err) {
            throw new Error("Erro ao consultar. CEP INVÁLIDO!");
        }
    };

    const handleCepChange = async (e) => {
        const rawCep = e.target.value;
        const cep = rawCep.replace(/\D/g, ""); // Remove qualquer caractere não numérico

        // Atualiza o valor do campo no formulário para manter só os números
        form.setFieldsValue({
            endereco: {
                ...form.getFieldValue("endereco"),
                cep: cep,
            },
        });

        if (cep.length < 8) return; // Aguarda até o campo ter 8 dígitos

        if (!/^\d{8}$/.test(cep)) {
            form.setFields([
                {
                    name: ["endereco", "cep"],
                    errors: ["CEP inválido. Deve conter exatamente 8 números."],
                },
            ]);
            return;
        }
        

        try {
            const dados = await buscarEnderecoPorCep(cep);

            const regiaoPorUf = {
                AC: "Norte", AL: "Nordeste", AP: "Norte", AM: "Norte",
                BA: "Nordeste", CE: "Nordeste", DF: "Centro-Oeste", ES: "Sudeste",
                GO: "Centro-Oeste", MA: "Nordeste", MT: "Centro-Oeste", MS: "Centro-Oeste",
                MG: "Sudeste", PA: "Norte", PB: "Nordeste", PR: "Sul",
                PE: "Nordeste", PI: "Nordeste", RJ: "Sudeste", RN: "Nordeste",
                RS: "Sul", RO: "Norte", RR: "Norte", SC: "Sul",
                SP: "Sudeste", SE: "Nordeste", TO: "Norte"
            };

            const regiao = regiaoPorUf[dados.uf] || undefined;

            form.setFieldsValue({
                endereco: {
                    ...form.getFieldValue("endereco"),
                    logradouro: dados.logradouro,
                    bairro: dados.bairro,
                    cidade: dados.localidade,
                    uf: dados.uf,
                    regiao: regiao,
                },
            });
        } catch (error) {
            form.setFields([
                {
                    name: ["endereco", "cep"],
                    errors: [error.message || "Erro ao consultar o CEP. CEP INVÁLIDO!"],
                },
            ]);
        }
        
    };

    return (
        <Form form={form} layout="vertical">
            <Form.Item
                label="CEP"
                name={["endereco", "cep"]}
                rules={[
                    { required: true, message: "Informe o CEP." },
                    {
                        validator: (_, value) => {
                            const cep = value?.replace(/\D/g, "");
                            if (!cep || cep.length !== 8) {
                                return Promise.reject("CEP deve conter exatamente 8 números.");
                            }
                            return Promise.resolve();
                        }
                    }
                ]}
            >
                <Input
                    placeholder="00000000"
                    maxLength={8}
                    onChange={handleCepChange}
                />
            </Form.Item>


            <Form.Item
                label="Logradouro"
                name={["endereco", "logradouro"]}
                rules={[{ required: true, message: "Informe o Logradouro." }]}
            >
                <Input placeholder="Rua / Avenida" />
            </Form.Item>

            <Form.Item
                label="Bairro"
                name={["endereco", "bairro"]}
                rules={[{ required: true, message: "Informe o Bairro." }]}
            >
                <Input placeholder="Bairro" />
            </Form.Item>

            <Row gutter={8}>
                <Col span={12}>
                    <Form.Item
                        label="Cidade"
                        name={["endereco", "cidade"]}
                        rules={[{ required: true, message: "Informe a Cidade." }]}
                    >
                        <Input placeholder="Cidade" />
                    </Form.Item>
                </Col>

                <Col span={6}>
                    <Form.Item
                        label="UF"
                        name={["endereco", "uf"]}
                        rules={[{ required: true, message: "Informe a UF." }]}
                    >
                        <Input placeholder="UF" maxLength={2} />
                    </Form.Item>
                </Col>

                <Col span={6}>
                    <Form.Item
                        label="Região"
                        name={["endereco", "regiao"]}
                        rules={[{ required: true, message: "Informe a Região." }]}
                    >
                        <Select placeholder="Selecione">
                            <Option value="Norte">Norte</Option>
                            <Option value="Nordeste">Nordeste</Option>
                            <Option value="Centro-Oeste">Centro-Oeste</Option>
                            <Option value="Sudeste">Sudeste</Option>
                            <Option value="Sul">Sul</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default EnderecoFormComBuscaCep;
