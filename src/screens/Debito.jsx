import { DebitoContainer, TitlePage, InputContainer, BackGroundInput, InputDebito, PagarContainer, ButtonText, ButtonDefaul, BackGroundPagar, ButtonPagar, ButtonContainer, ButtonClose, BackGround  } from "./style/debito"

export default function Debito() {
    return (
        <DebitoContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                </ButtonContainer>
                <TitlePage>Débito</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputDebito placeholder="Número do Cartão"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputDebito placeholder="Títular do Cartão"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputDebito placeholder="Validade: Mês e Ano"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputDebito placeholder="Código de Segurança"/>
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
        </DebitoContainer>
    )
}