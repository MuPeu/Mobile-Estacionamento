import { SingInContainer, TitlePage, InputContainer, BackGroundInput, InputLogin, LoginContainer, ButtonText, ButtonLogin, CloseContainer, BackGroundLogin, ButtonDefaul, ButtonClose, BackGround  } from "./style/singIn"

export default function SingIn() {
    return (
        <SingInContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <CloseContainer>
                    <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                </CloseContainer>
                <TitlePage>Login</TitlePage>
                <InputContainer>
                    <InputLogin placeholder="Usuário">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputLogin>
                    <InputLogin placeholder="Senha">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputLogin>
                </InputContainer>
                <LoginContainer>
                    <ButtonLogin>
                        <BackGroundLogin source={require('../assets/imgs/Rectangle/Entrar.png')}>
                            <ButtonDefaul>
                                <ButtonText>Login</ButtonText>
                            </ButtonDefaul>
                        </BackGroundLogin>
                    </ButtonLogin>
                </LoginContainer>
            </BackGround>
        </SingInContainer>
    )
}