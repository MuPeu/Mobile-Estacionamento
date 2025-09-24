import { SaidaContainer, ButtonContainer, ButtonBack, TitlePage, InputContainer, InputSaida, PagarContainer, ButtonPagar, ButtonText, BackGround } from "./style/saida"

export default function Saida() {
    return (
        <SaidaContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                </ButtonContainer>
                <TitlePage>Saída</TitlePage>
                <InputContainer>
                    <InputSaida placeholder="Placa"></InputSaida>
                    <InputSaida placeholder="Horario da Saída"></InputSaida>
                </InputContainer>
                <PagarContainer>
                    <ButtonPagar>
                        <ButtonText>Pagar</ButtonText>
                    </ButtonPagar>
                </PagarContainer>
            </BackGround>
        </SaidaContainer>
    )
}