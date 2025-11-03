// import Login from "./componentes/props/Login"
// import Login from "./componentes/state/Login.jsx"
// import Login from "./componentes/css/Login.jsx"
// import CadastroPF from "./componentes/css/CadastroPF.jsx";
// import Login from "./componentes/tailwind/Login";
// import CadastroGeral from "./componentes/tailwind/Desafio/CadastroGeral";
// import PessoaFisicaForm from "./componentes/antd/desafio/PessoaFisicaForm"
// import PessoaJuridicaForm from "./componentes/antd/desafio/PessoaJuridicaForm"

import PF from "./componentes/cadastrapessoa/PF.jsx";
import PJ from "./componentes/cadastrapessoa/PJ.jsx";
// import PessoaForm from "./componentes/cadastrapessoa/PessoaForm.jsx";
//import PessoaFormOO from "./componentes/cadastrapessoa/PessoaFormOO.jsx";


// necessário apenas a partir da utilização de rotas para outras telas
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App