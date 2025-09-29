import { SingUpContainer, TitlePage, InputContainer, BackGroundInput, InputLogin, CriarContaContainer, ButtonText, BackGroundCadastar, ButtonDefaul, ButtonCadastrar, CloseContainer, ButtonClose,  BackGround  } from "./style/singUp"

export default function SingIn() {
    return (
        <SingUpContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <CloseContainer>
                    <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                </CloseContainer>
                <TitlePage>Cadastro</TitlePage>
                <InputContainer>
                    <InputLogin placeholder="Usuário">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputLogin>
                    <InputLogin placeholder="Senha" secureTextEntry={true}>
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputLogin>
                    <InputLogin placeholder="Confirmar Senha" secureTextEntry={true}>
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputLogin>
                </InputContainer>
                <CriarContaContainer>
                    <ButtonCadastrar>
                        <BackGroundCadastar source={require('../assets/imgs/Rectangle/CriarConta.png')}>
                            <ButtonDefaul>
                                <ButtonText>Criar Conta</ButtonText>
                            </ButtonDefaul>
                        </BackGroundCadastar>
                    </ButtonCadastrar>
                </CriarContaContainer>
            </BackGround>
        </SingUpContainer>
    )
}