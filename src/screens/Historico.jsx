import { TouchableOpacity } from "react-native"
import { HistoricoContainer, TitlePage, TextNumVagas, ButtonsHistorico, ButtonText, BackGroundPlaca, ButtonRegistro, ButtonContainer, ButtonBack, BackGround } from "./style/historico"
import { useNavigation } from '@react-navigation/native';

export default function Historico() {
    const navigation = useNavigation()

    return (
        <HistoricoContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Histotico</TitlePage>
                <TextNumVagas>03 / 50</TextNumVagas>
                <ButtonsHistorico>
                    <ButtonRegistro onPress={() => navigation.navigate('Saida')}>
                        <BackGroundPlaca source={require('../assets/imgs/Rectangle/Placa.png')}>
                            <ButtonText>IUS-0449</ButtonText>
                        </BackGroundPlaca>
                    </ButtonRegistro>
                    <ButtonRegistro onPress={() => navigation.navigate('Saida')}>
                        <BackGroundPlaca source={require('../assets/imgs/Rectangle/Placa.png')}>
                            <ButtonText>LVY-3529</ButtonText>
                        </BackGroundPlaca>
                    </ButtonRegistro>
                    <ButtonRegistro onPress={() => navigation.navigate('Saida')}>
                        <BackGroundPlaca source={require('../assets/imgs/Rectangle/Placa.png')}>
                            <ButtonText>JGF-3348</ButtonText>
                        </BackGroundPlaca>
                    </ButtonRegistro>
                </ButtonsHistorico>
            </BackGround>
        </HistoricoContainer>
    )
}