import { DebitoContainer, TitlePage, InputContainer, InputDebito, ButtonText, ButtonPagar,ButtonContainer, ButtonClose, BackGround  } from "./style/debito"

export default function Debito() {
    return (
        <DebitoContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonClose source={require('../assets/Button-Close.png')}/>
                </ButtonContainer>
                <TitlePage>Débito</TitlePage>
                <InputContainer>
                    <InputDebito placeholder="Número do Cartão"></InputDebito>
                    <InputDebito placeholder="Títular do Cartão"></InputDebito>
                    <InputDebito placeholder="Validade: Mês e Ano"></InputDebito>
                    <InputDebito placeholder="Código de Segurança"></InputDebito>
                </InputContainer>
                <ButtonPagar>
                    <ButtonText>Pagar</ButtonText>
                </ButtonPagar>
            </BackGround>
        </DebitoContainer>
    )
}