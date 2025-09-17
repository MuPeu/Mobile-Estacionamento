import { SaidaContainer, TitlePage, InputContainer, InputSaida, ButtonPagar, ButtonText } from "./style/saida"

export default function Saida() {
    return (
        <SaidaContainer>
            <TitlePage>Saída</TitlePage>
            <InputContainer>
                <InputSaida placeholder="Placa"></InputSaida>
                <InputSaida placeholder="Horario da Saída"></InputSaida>
            </InputContainer>
            <ButtonPagar>
                <ButtonText>Pagar</ButtonText>
            </ButtonPagar>
        </SaidaContainer>
    )
}