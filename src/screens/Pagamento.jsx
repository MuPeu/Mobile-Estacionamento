import { PagamentoContainer, TitlePage, ButtonContainer, ButtonText, ButtonDebito, ButtonCredito, ButtonPIX } from "./style/pagamento"

export default function Pagamento() {
    return (
        <PagamentoContainer>
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
        </PagamentoContainer>
    )
}