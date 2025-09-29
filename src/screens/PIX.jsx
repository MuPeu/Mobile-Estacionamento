import { Image } from "react-native"
import { PixContainer, TitlePage, ButtonClose, ButtonContainer, QrContainer, BackGroundQr, QrImage, BackGround } from "./style/pix"

export default function PIX() {
    return (
        <PixContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
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