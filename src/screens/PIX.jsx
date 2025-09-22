import { Image } from "react-native"
import { PixContainer, TitlePage, InputContainer, InputPix, ButtonClose, ButtonContainer, BackGround  } from "./style/pix"

export default function PIX() {
    return (
        <PixContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
            <ButtonContainer>
                <ButtonClose source={require('../assets/Button-Close.png')}/>
            </ButtonContainer>
            <TitlePage>PIX</TitlePage>
            <Image source={{uri : `https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/368px-QR_Code_Example.svg.png`}}/>
            </BackGround>
        </PixContainer>
    )
}