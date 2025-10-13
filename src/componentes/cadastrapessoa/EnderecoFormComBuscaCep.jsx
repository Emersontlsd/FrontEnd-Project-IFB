import React from "react";
import { Form, Input, Row, Col, Select, message } from "antd";
import axios from "axios";

const { Option } = Select;

function EnderecoFormComBuscaCep() {
    const [form] = Form.useForm(); // Adicionado para manipular os valores do formulário

    // Função que consulta o ViaCEP
    const buscarEnderecoPorCep = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                throw new Error("CEP não encontrado");
            }
            return response.data;
        } catch (err) {
            throw new Error("Erro ao consultar o CEP");
        }
    };

    // Detectar mudança no campo de CEP e preencher os outros campos
    const handleCepChange = async (e) => {
        const cep = e.target.value.replace(/\D/g, "");

        if (cep.length === 8) {
            try {
                const dados = await buscarEnderecoPorCep(cep);

                // Mapear a UF para Região
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

                // Preenche os campos do formulário
                form.setFieldsValue({
                    endereco: {
                        logradouro: dados.logradouro,
                        bairro: dados.bairro,
                        cidade: dados.localidade,
                        uf: dados.uf,
                        regiao: regiao,
                    },
                });
            } catch (error) {
                message.error(error.message);
            }
        }
    };

    return (
        <>
            {/* Formulario passa a usar o form hook local */}
            <Form form={form} layout="vertical">
                <Form.Item 
                    label="CEP"
                    name={["endereco", "cep"]}
                    rules={[{ required: true, message: "Informe o CEP:" }]}
                >
                    <Input 
                        placeholder="00000-000" 
                        maxLength={9} 
                        onChange={handleCepChange} // Detecta mudança no CEP
                    />
                </Form.Item>

                <Form.Item 
                    label="Logradouro"
                    name={["endereco", "logradouro"]}
                    rules={[{ required: true, message: "Informe o Logradouro:" }]}
                >
                    <Input placeholder="Rua / Avenida" />
                </Form.Item>

                <Form.Item 
                    label="Bairro"
                    name={["endereco", "bairro"]}
                    rules={[{ required: true, message: "Informe o Bairro:" }]}
                >
                    <Input placeholder="Bairro" />
                </Form.Item>

                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item 
                            label="Cidade"
                            name={["endereco", "cidade"]}
                            rules={[{ required: true, message: "Informe a cidade!" }]}
                        >
                            <Input placeholder="Cidade" />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item 
                            label="UF"
                            name={["endereco", "uf"]}
                            rules={[{ required: true, message: "Informe a UF!" }]}
                        >
                            <Input placeholder="UF" maxLength={2} />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item 
                            label="Região"
                            name={["endereco", "regiao"]}
                            rules={[{ required: true, message: "Informe a região!" }]}
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
        </>
    );
}

export default EnderecoFormComBuscaCep;
