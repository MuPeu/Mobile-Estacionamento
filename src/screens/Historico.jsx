import { HistoricoContainer, TitlePage, ButtonText, ButtonRegistro, ButtonContainer, ButtonBack, BackGround } from "./style/historico"

export default function Historico() {
    return (
        <HistoricoContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonBack source={require('../assets/Button-Back.png')}/>
                </ButtonContainer>
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
            </BackGround>
        </HistoricoContainer>
    )
}