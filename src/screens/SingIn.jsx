import { SingInContainer, TitlePage, InputContainer, InputLogin, ButtonText, ButtonLogin  } from "./style/singIn"

export default function SingIn() {
    return (
        <SingInContainer>
            <TitlePage>Login</TitlePage>
            <InputContainer>
                <InputLogin placeholder="Usuário"></InputLogin>
                <InputLogin placeholder="Senha"></InputLogin>
            </InputContainer>
            <ButtonLogin>
                <ButtonText>Login</ButtonText>
            </ButtonLogin>
        </SingInContainer>
    )
}