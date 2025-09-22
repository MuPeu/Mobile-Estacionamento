import { SaidaContainer, TitlePage, InputContainer, InputSaida, ButtonPagar, ButtonText, BackGround } from "./style/saida"

export default function Saida() {
    return (
        <SaidaContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <TitlePage>Saída</TitlePage>
                <InputContainer>
                    <InputSaida placeholder="Placa"></InputSaida>
                    <InputSaida placeholder="Horario da Saída"></InputSaida>
                </InputContainer>
                <ButtonPagar>
                    <ButtonText>Pagar</ButtonText>
                </ButtonPagar>
            </BackGround>
        </SaidaContainer>
    )
}