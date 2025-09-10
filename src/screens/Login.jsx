import { LoginContainer, TitlePage, ButtonEntrar, ButtonCadastro, ButtonText } from "./style/login"

export default function Home() {
    return (
        <LoginContainer>
            <TitlePage>Pytter Parking</TitlePage>
            <ButtonEntrar>
                <ButtonText>Entrar</ButtonText>
            </ButtonEntrar>
            <ButtonCadastro>
                <ButtonText>Cadastro</ButtonText>
            </ButtonCadastro>
        </LoginContainer>
    )
}