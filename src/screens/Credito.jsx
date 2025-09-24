import { CreditoContainer, TitlePage, InputContainer, InputCredito, PagarContainer, ButtonText, ButtonPagar, ButtonContainer, ButtonClose, BackGround  } from "./style/credito"

export default function Credito() {
    return (
        <CreditoContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                </ButtonContainer>
                <TitlePage>Crédito</TitlePage>
                <InputContainer>
                    <InputCredito placeholder="Número do Cartão"></InputCredito>
                    <InputCredito placeholder="Títular do Cartão"></InputCredito>
                    <InputCredito placeholder="Validade: Mês e Ano"></InputCredito>
                    <InputCredito placeholder="Código de Segurança"></InputCredito>
                </InputContainer>
                <PagarContainer>
                    <ButtonPagar>
                        <ButtonText>Pagar</ButtonText>
                    </ButtonPagar>
                </PagarContainer>
            </BackGround>
        </CreditoContainer>
    )
}