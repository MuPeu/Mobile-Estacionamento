import { HistoricoContainer, TitlePage, ButtonsHistorico, ButtonText, BackGroundPlaca, ButtonDefaul, ButtonRegistro, ButtonContainer, ButtonBack, BackGround } from "./style/historico"

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
                        <BackGroundPlaca source={require('../assets/imgs/Rectangle/Placa.png')}>
                            <ButtonDefaul>
                                <ButtonText>IUS-0449</ButtonText>
                            </ButtonDefaul>
                        </BackGroundPlaca>
                    </ButtonRegistro>
                    <ButtonRegistro>
                        <BackGroundPlaca source={require('../assets/imgs/Rectangle/Placa.png')}>
                            <ButtonDefaul>
                                <ButtonText>LVY-3529</ButtonText>
                            </ButtonDefaul>
                        </BackGroundPlaca>
                    </ButtonRegistro>
                    <ButtonRegistro>
                        <BackGroundPlaca source={require('../assets/imgs/Rectangle/Placa.png')}>
                            <ButtonDefaul>
                                <ButtonText>JGF-3348</ButtonText>
                            </ButtonDefaul>
                        </BackGroundPlaca>
                    </ButtonRegistro>
                </ButtonsHistorico>
            </BackGround>
        </HistoricoContainer>
    )
}