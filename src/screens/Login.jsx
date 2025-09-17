import { LoginContainer, TitlePage, ButtonContainer, ButtonEntrar, ButtonCadastro, ButtonText } from "./style/login"

export default function Login() {
    return (
        <LoginContainer>
            <TitlePage>Pytter Parking</TitlePage>
            <ButtonContainer>
                <ButtonEntrar>
                    <ButtonText>Entrar</ButtonText>
                </ButtonEntrar>
                <ButtonCadastro>
                    <ButtonText>Cadastro</ButtonText>
                </ButtonCadastro>
            </ButtonContainer>
        </LoginContainer>
    )
}