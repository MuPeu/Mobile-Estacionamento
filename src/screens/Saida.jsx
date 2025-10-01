import { SaidaContainer, ButtonContainer, ButtonBack, TitlePage, InputContainer, InputSaida, BackGroundInput, PagarContainer, ButtonPagar, ButtonDefaul, ButtonText, BackGroundPagar, BackGround } from "./style/saida"

export default function Saida() {
    return (
        <SaidaContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                </ButtonContainer>
                <TitlePage>Saída</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputSaida placeholder="Placa"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputSaida placeholder="Horario Saída"/>
                    </BackGroundInput>
                </InputContainer>
                <PagarContainer>
                    <ButtonPagar>
                        <BackGroundPagar source={require('../assets/imgs/Rectangle/Pagar.png')}>
                            <ButtonDefaul>
                                <ButtonText>Pagar</ButtonText>
                            </ButtonDefaul>
                        </BackGroundPagar>
                    </ButtonPagar>
                </PagarContainer>
            </BackGround>
        </SaidaContainer>
    )
}