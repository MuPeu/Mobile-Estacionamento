import { SingUpContainer, TitlePage, InputContainer, InputLogin, ButtonText, ButtonCadastrar  } from "./style/singUp"

export default function SingIn() {
    return (
        <SingUpContainer>
            <TitlePage>Cadastro</TitlePage>
            <InputContainer>
                <InputLogin placeholder="Usuário"></InputLogin>
                <InputLogin placeholder="Senha" secureTextEntry={true}></InputLogin>
                <InputLogin placeholder="Confirmar Senha" secureTextEntry={true}></InputLogin>
            </InputContainer>
            <ButtonCadastrar>
                <ButtonText>Criar Conta</ButtonText>
            </ButtonCadastrar>
        </SingUpContainer>
    )
}