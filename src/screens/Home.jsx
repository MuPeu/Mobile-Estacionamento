import { HomeContainer, TitlePage, ButtonEntrar, ButtonCadastro, ButtonText } from "./style/home"

export default function Login() {
    return (
        <HomeContainer>
            <TitlePage>Pytter Parking</TitlePage>
            <ButtonEntrar>
                <ButtonText>Entrar</ButtonText>
            </ButtonEntrar>
            <ButtonCadastro>
                <ButtonText>Cadastro</ButtonText>
            </ButtonCadastro>
        </HomeContainer>
    )
}