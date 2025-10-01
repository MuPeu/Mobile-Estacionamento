import { TouchableOpacity } from "react-native";
import { CreditoContainer, TitlePage, InputContainer, BackGroundInput, InputCredito, PagarContainer, ButtonText, BackGroundPagar, ButtonPagar, ButtonContainer, ButtonClose, BackGround  } from "./style/credito"
import { useNavigation } from '@react-navigation/native';

export default function Credito() {
    const navigation = useNavigation()

    return (
        <CreditoContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Crédito</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputCredito placeholder="Número do Cartão"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputCredito placeholder="Títular do Cartão"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputCredito placeholder="Validade: Mês e Ano"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputCredito placeholder="Código de Segurança"/>
                    </BackGroundInput>
                </InputContainer>
                <PagarContainer>
                    <ButtonPagar onPress={() => navigation.navigate('Home')}>
                        <BackGroundPagar source={require('../assets/imgs/Rectangle/Pagar.png')}>
                            <ButtonText>Pagar</ButtonText>
                        </BackGroundPagar>
                    </ButtonPagar>
                </PagarContainer>
            </BackGround>
        </CreditoContainer>
    )
}