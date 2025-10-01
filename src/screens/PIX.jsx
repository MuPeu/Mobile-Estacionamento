import { Image, TouchableOpacity } from "react-native"
import { PixContainer, TitlePage, ButtonClose, ButtonContainer, QrContainer, BackGroundQr, QrImage, BackGround } from "./style/pix"
import { useNavigation } from '@react-navigation/native';

export default function PIX() {
    const navigation = useNavigation()
    
    return (
        <PixContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>PIX</TitlePage>
                <QrContainer>
                    <BackGroundQr>
                        <QrImage source={require('../assets/imgs/QrCode.png')}/>
                    </BackGroundQr>
                </QrContainer>
            </BackGround>
        </PixContainer>
    )
}