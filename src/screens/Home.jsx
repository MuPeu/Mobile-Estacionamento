import { HomeContainer, TitlePage, ButtonHistorico, ButtonCadastro, ButtonText, ButtonEntrada, ButtonSaida } from "./style/home"

export default function Login() {
    return (
        <HomeContainer>
            <TitlePage>Pytter Parking</TitlePage>
            <ButtonHistorico>
                <ButtonText>Histórico</ButtonText>
            </ButtonHistorico>
            <ButtonEntrada>
                <ButtonText>Entrada</ButtonText>
            </ButtonEntrada>
            <ButtonSaida>
                <ButtonText>Saída</ButtonText>
            </ButtonSaida>
        </HomeContainer>
    )
}