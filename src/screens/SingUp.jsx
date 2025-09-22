import { SingUpContainer, TitlePage, InputContainer, InputLogin, ButtonText, ButtonCadastrar, CloseContainer, ButtonClose,  BackGround  } from "./style/singUp"

export default function SingIn() {
    return (
        <SingUpContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <CloseContainer>
                    <ButtonClose source={require('../assets/Button-Close.png')}/>
                </CloseContainer>
                <TitlePage>Cadastro</TitlePage>
                <InputContainer>
                    <InputLogin placeholder="Usuário"></InputLogin>
                    <InputLogin placeholder="Senha" secureTextEntry={true}></InputLogin>
                    <InputLogin placeholder="Confirmar Senha" secureTextEntry={true}></InputLogin>
                </InputContainer>
                <ButtonCadastrar>
                    <ButtonText>Criar Conta</ButtonText>
                </ButtonCadastrar>
            </BackGround>
        </SingUpContainer>
    )
}