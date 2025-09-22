import { PagamentoContainer, TitlePage, ButtonContainer, ButtonText, ButtonDebito, ButtonCredito, ButtonPIX, BackGround } from "./style/pagamento"

export default function Pagamento() {
    return (
        <PagamentoContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <TitlePage>Pagamento</TitlePage>
                <ButtonContainer>
                    <ButtonDebito>
                        <ButtonText>Débito</ButtonText>
                    </ButtonDebito>
                    <ButtonCredito>
                        <ButtonText>Crédito</ButtonText>
                    </ButtonCredito>
                    <ButtonPIX>
                        <ButtonText>PIX</ButtonText>
                    </ButtonPIX>
                </ButtonContainer>
            </BackGround>
        </PagamentoContainer>
    )
}