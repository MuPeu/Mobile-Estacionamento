import { CreditoContainer, TitlePage, InputContainer, InputCredito, ButtonText, ButtonPagar, ButtonContainer, ButtonClose, BackGround  } from "./style/credito"

export default function Credito() {
    return (
        <CreditoContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonClose source={require('../assets/Button-Close.png')}/>
                </ButtonContainer>
                <TitlePage>Crédito</TitlePage>
                <InputContainer>
                    <InputCredito placeholder="Número do Cartão"></InputCredito>
                    <InputCredito placeholder="Títular do Cartão"></InputCredito>
                    <InputCredito placeholder="Validade: Mês e Ano"></InputCredito>
                    <InputCredito placeholder="Código de Segurança"></InputCredito>
                </InputContainer>
                <ButtonPagar>
                    <ButtonText>Pagar</ButtonText>
                </ButtonPagar>
            </BackGround>
        </CreditoContainer>
    )
}