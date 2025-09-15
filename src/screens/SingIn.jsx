import { SingInContainer, TitlePage, InputLogin  } from "./style/singIn"

export default function SingIn() {
    return (
        <SingInContainer>
            <TitlePage>Entrar</TitlePage>
            <InputLogin placeholder="Usuário"></InputLogin>
            <InputLogin placeholder="Senha"></InputLogin>
        </SingInContainer>
    )
}