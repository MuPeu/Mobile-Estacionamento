import { HomeContainer, TitlePage, BackGroundHistorico, ButtonHistorico, ButtonsContainer, ButtonText, ButtonDefaul, BackGroundEntrada, ButtonEntrada, BackGroundSaida, ButtonSaida, CloseContainer, ButtonClose, BackGround} from "./style/home"

export default function Login() {
    return (
        <HomeContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <CloseContainer>
                    <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                </CloseContainer>
                <TitlePage>Pytter Parking</TitlePage>
                <ButtonsContainer>
                    <ButtonHistorico>
                        <BackGroundHistorico source={require('../assets/imgs/Rectangle/Historico.png')}>
                            <ButtonDefaul>
                                <ButtonText>Histórico</ButtonText>
                            </ButtonDefaul>
                        </BackGroundHistorico>
                    </ButtonHistorico>
                    <ButtonEntrada>
                        <BackGroundEntrada source={require('../assets/imgs/Rectangle/Entrada.png')}>
                            <ButtonDefaul>
                                <ButtonText>Entrada</ButtonText>
                            </ButtonDefaul>
                        </BackGroundEntrada>
                    </ButtonEntrada>
                    <ButtonSaida>
                        <BackGroundSaida source={require('../assets/imgs/Rectangle/Saida.png')}>
                            <ButtonDefaul>
                                <ButtonText>Saída</ButtonText>
                            </ButtonDefaul>
                        </BackGroundSaida>
                    </ButtonSaida>
                </ButtonsContainer>
            </BackGround>
        </HomeContainer>
    )
}