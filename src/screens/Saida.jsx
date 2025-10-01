import { TouchableOpacity } from "react-native";
import { SaidaContainer, ButtonContainer, ButtonBack, TitlePage, InputContainer, InputSaida, BackGroundInput, PagarContainer, ButtonPagar, ButtonText, BackGroundPagar, BackGround } from "./style/saida"
import { useNavigation } from '@react-navigation/native';

export default function Saida() {
    const navigation = useNavigation()

    return (
        <SaidaContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Saida</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputSaida placeholder="Placa"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputSaida placeholder="Horario Saída"/>
                    </BackGroundInput>
                </InputContainer>
                <PagarContainer>
                    <ButtonPagar onPress={() => navigation.navigate('Pagamento')}>
                        <BackGroundPagar source={require('../assets/imgs/Rectangle/Pagar.png')}>
                            <ButtonText>Pagar</ButtonText>
                        </BackGroundPagar>
                    </ButtonPagar>
                </PagarContainer>
            </BackGround>
        </SaidaContainer>
    )
}