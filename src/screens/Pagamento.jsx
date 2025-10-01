import { useEffect } from "react"
import { PagamentoContainer, ButtonContainer, ButtonBack, TitlePage, ButtonsPagamentoContainer, BackGroundDebito, BackGroundCredito, BackGroundPix, ButtonText, ButtonDebito, ButtonCredito, ButtonPIX, BackGround } from "./style/pagamento"
import * as Font from "expo-font"
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

export default function Pagamento() {
    const navigation = useNavigation()

    return (
        <PagamentoContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Pagamento</TitlePage>
                <ButtonsPagamentoContainer>
                    <ButtonDebito onPress={() => navigation.navigate('Debito')}>
                        <BackGroundDebito source={require('../assets/imgs/Rectangle/Debito.png')}>
                            <ButtonText>Débito</ButtonText>
                        </BackGroundDebito>
                    </ButtonDebito>
                    <ButtonCredito onPress={() => navigation.navigate('Credito')}>
                        <BackGroundCredito source={require('../assets/imgs/Rectangle/Credito.png')}>
                            <ButtonText>Crédito</ButtonText>
                        </BackGroundCredito>
                    </ButtonCredito>
                    <ButtonPIX onPress={() => navigation.navigate('PIX')}>
                        <BackGroundPix source={require('../assets/imgs/Rectangle/Pix.png')}>
                            <ButtonText>PIX</ButtonText>
                        </BackGroundPix>
                    </ButtonPIX>
                </ButtonsPagamentoContainer>
            </BackGround>
        </PagamentoContainer>
    )
}