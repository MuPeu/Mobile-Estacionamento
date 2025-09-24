import { HistoricoContainer, TitlePage, ButtonsHistorico, ButtonText, ButtonRegistro, ButtonContainer, ButtonBack, BackGround } from "./style/historico"

export default function Historico() {
    return (
        <HistoricoContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                </ButtonContainer>
                <TitlePage>Histótico</TitlePage>
                <ButtonsHistorico>
                    <ButtonRegistro>
                        <ButtonText>IUS-0449</ButtonText>
                    </ButtonRegistro>
                    <ButtonRegistro>
                        <ButtonText>LVY-3529</ButtonText>
                    </ButtonRegistro>
                    <ButtonRegistro>
                        <ButtonText>JGF-3348</ButtonText>
                    </ButtonRegistro>
                </ButtonsHistorico>
            </BackGround>
        </HistoricoContainer>
    )
}