import { HistoricoContainer, TitlePage, ButtonText, ButtonRegistro } from "./style/historico"

export default function Historico() {
    return (
        <HistoricoContainer>
            <TitlePage>Histótico</TitlePage>
            <ButtonRegistro>
                <ButtonText>IUS-0449</ButtonText>
            </ButtonRegistro>
            <ButtonRegistro>
                <ButtonText>LVY-3529</ButtonText>
            </ButtonRegistro>
            <ButtonRegistro>
                <ButtonText>JGF-3348</ButtonText>
            </ButtonRegistro>
        </HistoricoContainer>
    )
}