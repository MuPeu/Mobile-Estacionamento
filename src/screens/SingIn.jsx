import { SingInContainer, TitlePage, InputContainer, InputLogin, LoginContainer, ButtonText, ButtonLogin, CloseContainer, ButtonClose, BackGround  } from "./style/singIn"

export default function SingIn() {
    return (
        <SingInContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <CloseContainer>
                    <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                </CloseContainer>
                <TitlePage>Login</TitlePage>
                <InputContainer>
                    <InputLogin placeholder="Usuário"></InputLogin>
                    <InputLogin placeholder="Senha"></InputLogin>
                </InputContainer>
                <LoginContainer>
                    <ButtonLogin>
                        <ButtonText>Login</ButtonText>
                    </ButtonLogin>
                </LoginContainer>
            </BackGround>
        </SingInContainer>
    )
}