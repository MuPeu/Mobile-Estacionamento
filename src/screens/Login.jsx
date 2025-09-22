import { LoginContainer, TitlePage, ButtonsContainer, ButtonEntrar, ButtonCadastro, ButtonText, BackGround } from "./style/login"

export default function Login() {
    return (
        <LoginContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <TitlePage>Pytter Parking</TitlePage>
                <ButtonsContainer>
                    <ButtonEntrar>
                        <ButtonText>Entrar</ButtonText>
                    </ButtonEntrar>
                    <ButtonCadastro>
                        <ButtonText>Cadastro</ButtonText>
                    </ButtonCadastro>
                </ButtonsContainer>
            </BackGround>
        </LoginContainer>
    )
}