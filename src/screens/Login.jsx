import { LoginContainer, TitlePage, ButtonsContainer, ButtonDefaul, BackGroundEntrar, ButtonEntrar, BackGroundCadastro, ButtonCadastro, ButtonText, BackGround } from "./style/login"

export default function Login() {
    return (
        <LoginContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <TitlePage>Pytter Parking</TitlePage>
                <ButtonsContainer>
                    <ButtonEntrar>
                        <BackGroundEntrar source={require('../assets/imgs/Rectangle/Entrar.png')}>
                            <ButtonDefaul>
                                <ButtonText>Entrar</ButtonText>
                            </ButtonDefaul>
                        </BackGroundEntrar>
                    </ButtonEntrar>
                    <ButtonCadastro>
                        <BackGroundCadastro source={require('../assets/imgs/Rectangle/Cadastrar-se.png')}>
                            <ButtonDefaul>
                                <ButtonText>Cadastro</ButtonText>
                            </ButtonDefaul>
                        </BackGroundCadastro>
                    </ButtonCadastro>
                </ButtonsContainer>
            </BackGround>
        </LoginContainer>
    )
}