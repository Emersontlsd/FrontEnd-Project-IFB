import "./CadastroPF.css";

import LabelTitle from "./LabelTitle";
import Label from "./Label.jsx";
import InputText from "./InputText.jsx";
import Button from "./Button.jsx";

function CadastroPF() {
    return (
        <div className="cadastro-container">
            <form className="cadastro-form">
                {/* Seção Cadastro Pessoa Física */}
                <section className="cadastro-pessoa">
                    <LabelTitle texto="Cadastro Pessoa Física" />

                    <div className="form-group">
                        <Label texto="Nome:" />
                        <InputText placeholder="nome..." />
                    </div>
                    <div className="form-group">
                        <Label texto="E-mail:" />
                        <InputText placeholder="e-mail..." />
                    </div>
                    <div className="form-group">
                        <Label texto="CPF:" />
                        <InputText placeholder="cpf..." />
                    </div>
                </section>

                {/* Seção Título de Eleitor */}
                <section className="titulo-eleitor">
                    <LabelTitle texto="Título de Eleitor:" />

                    <div className="form-group">
                        <Label texto="Número:" />
                        <InputText placeholder="núm do título..." />
                    </div>
                    <div className="form-group">
                        <Label texto="Zona:" />
                        <InputText placeholder="zona eleitoral..." />
                    </div>
                    <div className="form-group">
                        <Label texto="Seção:" />
                        <InputText placeholder="seção eleitoral..." />
                    </div>
                </section>
                <section className="teste">
                    <LabelTitle texto="Teste 1:" />

                    <div className="form-group">
                        <Label texto="Teste:" />
                        <InputText placeholder="Teste..." />
                    </div>
                    <div className="form-group">
                        <Label texto="Teste:" />
                        <InputText placeholder="Teste Teste..." />
                    </div>
                    <div className="form-group">
                        <Label texto="Teste:" />
                        <InputText placeholder="Teste Teste..." />
                    </div>
                </section>

                {/* Seção Endereço */}
                <section className="endereco">
                    <LabelTitle texto="Endereço:" />

                    <div className="form-group">
                        <Label texto="Logradouro:" />
                        <InputText placeholder="logradouro..." />
                    </div>
                    <div className="form-group">
                        <Label texto="CEP:" />
                        <InputText placeholder="cep..." />
                    </div>
                </section>

                {/* Seção Contato */}
                <section className="contato">
                    <LabelTitle texto="Contato:" />

                    <div className="form-group">
                        <Label texto="Telefone:" />
                        <InputText placeholder="telefone..." />
                    </div>
                    <div className="form-group">
                        <Label texto="Celular:" />
                        <InputText placeholder="celular..." />
                    </div>
                </section>

                <Button valor="Cadastrar" />
            </form> 
        </div>
    );
}

export default CadastroPF;
