import { CreditoContainer, TitlePage, InputContainer, BackGroundInput, InputCredito, PagarContainer, ButtonText, BackGroundPagar, ButtonDefaul, ButtonPagar, ButtonContainer, ButtonClose, BackGround  } from "./style/credito"

export default function Credito() {
    return (
        <CreditoContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                </ButtonContainer>
                <TitlePage>Crédito</TitlePage>
                <InputContainer>
                    <InputCredito placeholder="Número do Cartão">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputCredito>
                    <InputCredito placeholder="Títular do Cartão">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputCredito>
                    <InputCredito placeholder="Validade: Mês e Ano">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputCredito>
                    <InputCredito placeholder="Código de Segurança">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputCredito>
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
        </CreditoContainer>
    )
}