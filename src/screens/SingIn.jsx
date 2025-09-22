import { SingInContainer, TitlePage, InputContainer, InputLogin, ButtonText, ButtonLogin, CloseContainer, ButtonClose, BackGround  } from "./style/singIn"

export default function SingIn() {
    return (
        <SingInContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <CloseContainer>
                    <ButtonClose source={require('../assets/Button-Close.png')}/>
                </CloseContainer>
                <TitlePage>Login</TitlePage>
                <InputContainer>
                    <InputLogin placeholder="Usuário"></InputLogin>
                    <InputLogin placeholder="Senha"></InputLogin>
                </InputContainer>
                <ButtonLogin>
                    <ButtonText>Login</ButtonText>
                </ButtonLogin>
            </BackGround>
        </SingInContainer>
    )
}