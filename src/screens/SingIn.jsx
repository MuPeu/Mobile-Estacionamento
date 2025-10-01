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
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Usuário"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Senha" secureTextEntry={true}/>
                    </BackGroundInput>
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