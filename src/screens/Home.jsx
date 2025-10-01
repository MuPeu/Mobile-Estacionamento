import { TouchableOpacity } from "react-native";
import { HomeContainer, TitlePage, BackGroundHistorico, ButtonHistorico, ButtonsContainer, ButtonText, BackGroundEntrada, ButtonEntrada, BackGroundSaida, ButtonSaida, CloseContainer, ButtonClose, BackGround} from "./style/home"
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation()

    return (
        <HomeContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <CloseContainer>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                    </TouchableOpacity>
                </CloseContainer>
                <TitlePage>Pytter Parking</TitlePage>
                <ButtonsContainer>
                    <ButtonHistorico onPress={() => navigation.navigate('Historico')}>
                        <BackGroundHistorico source={require('../assets/imgs/Rectangle/Historico.png')}>
                            <ButtonText>Historico</ButtonText>
                        </BackGroundHistorico>
                    </ButtonHistorico>
                    <ButtonEntrada onPress={() => navigation.navigate('Entrada')}>
                        <BackGroundEntrada source={require('../assets/imgs/Rectangle/Entrada.png')}>
                            <ButtonText>Entrada</ButtonText>
                        </BackGroundEntrada>
                    </ButtonEntrada>
                    <ButtonSaida onPress={() => navigation.navigate('Saida')}>
                        <BackGroundSaida source={require('../assets/imgs/Rectangle/Saida.png')}>
                            <ButtonText>Saida</ButtonText>
                        </BackGroundSaida>
                    </ButtonSaida>
                </ButtonsContainer>
            </BackGround>
        </HomeContainer>
    )
}