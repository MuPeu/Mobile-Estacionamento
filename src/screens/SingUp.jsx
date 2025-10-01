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
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Usuário"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Senha" secureTextEntry={true}/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Confirmar Senha" secureTextEntry={true}/>
                    </BackGroundInput>
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