import { TouchableOpacity } from "react-native";
import { EntradaContainer, ButtonContainer, ButtonBack, TitlePage, BackGroundInput, InputContainer, InputEntrada, EnviarContainer, BackGroundEnviar, ButtonEnviar, ButtonText, BackGround } from "./style/entrada"
import { useNavigation } from '@react-navigation/native';

export default function Entrada() {
    const navigation = useNavigation()

    return (
        <EntradaContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Entrada</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputEntrada placeholder="Placa"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputEntrada placeholder="Modelo"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputEntrada placeholder="Horario Entrada"/>
                    </BackGroundInput>
                </InputContainer>
                <EnviarContainer>
                    <ButtonEnviar onPress={() => navigation.navigate('Home')}>
                        <BackGroundEnviar source={require('../assets/imgs/Rectangle/Enviar.png')}>
                                <ButtonText>Enviar</ButtonText>
                        </BackGroundEnviar>
                    </ButtonEnviar>
                </EnviarContainer>
            </BackGround>
        </EntradaContainer>
    )
}