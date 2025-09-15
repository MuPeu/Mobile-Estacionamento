import { SingUpContainer, TitlePage, InputLogin  } from "./style/singUp"

export default function SingIn() {
    return (
        <SingUpContainer>
            <TitlePage>Cadastro</TitlePage>
            <InputLogin placeholder="Usuário"></InputLogin>
            <InputLogin placeholder="Senha" secureTextEntry={true}></InputLogin>
            <InputLogin placeholder="Confirmar Senha" secureTextEntry={true}></InputLogin>
        </SingUpContainer>
    )
}