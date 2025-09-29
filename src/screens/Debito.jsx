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
                    <InputDebito placeholder="Número do Cartão">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputDebito>
                    <InputDebito placeholder="Títular do Cartão">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputDebito>
                    <InputDebito placeholder="Validade: Mês e Ano">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputDebito>
                    <InputDebito placeholder="Código de Segurança">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputDebito>
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