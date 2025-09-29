import Labelln from "./Labelln";
import Label from "./Label";
import InputText from "./InputText";
import Button from "./Button";

function Login() {

    return(
        <>
            <Labelln texto="Login"/>
            <Label texto="Usuário: "/>
            <InputText placeholder="user..."/> <br/>
            <Label texto="Senha: "/>
            <InputText placeholder="password..."/> <br/>
            <Button valor="Logar" />
        </>
    )
}// fim function 

export default Login;