import { HomeContainer, TitlePage, ButtonHistorico, ButtonsContainer, ButtonText, ButtonEntrada, ButtonSaida, CloseContainer, ButtonClose, BackGround} from "./style/home"

export default function Login() {
    return (
        <HomeContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <CloseContainer>
                    <ButtonClose source={require('../assets/Button-Close.png')}/>
                </CloseContainer>
                <TitlePage>Pytter Parking</TitlePage>
                <ButtonsContainer>
                    <ButtonHistorico>
                        <ButtonText>Histórico</ButtonText>
                    </ButtonHistorico>
                    <ButtonEntrada>
                        <ButtonText>Entrada</ButtonText>
                    </ButtonEntrada>
                    <ButtonSaida>
                        <ButtonText>Saída</ButtonText>
                    </ButtonSaida>
                </ButtonsContainer>
            </BackGround>
        </HomeContainer>
    )
}