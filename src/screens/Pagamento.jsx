import { useEffect } from "react"
import { PagamentoContainer, ButtonContainer, ButtonBack, TitlePage, ButtonsPagamentoContainer, BackGroundDebito, BackGroundPix, ButtonText, ButtonDefaul, ButtonDebito, ButtonCredito, ButtonPIX, BackGround } from "./style/pagamento"
import * as Font from "expo-font"

export default function Pagamento() {
    useEffect(() => {
        Font.loadAsync({
            "ALoveOfThunder" : require('../assets/fonts/a-love-of-thunder.ttf')
        }).then(() => setLoaded(true))
    },[])

    return (
        <PagamentoContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                </ButtonContainer>
                <TitlePage>Pagamento</TitlePage>
                <ButtonsPagamentoContainer>
                    <ButtonDebito>
                        <BackGroundDebito source={require('../assets/imgs/RectangleDebito.png')}>
                            <ButtonDefaul>
                                <ButtonText>Débito</ButtonText>
                            </ButtonDefaul>
                        </BackGroundDebito>
                    </ButtonDebito>
                    <ButtonCredito>
                        <ButtonText>Crédito</ButtonText>
                    </ButtonCredito>
                    <ButtonPIX>
                        <BackGroundPix source={require('../assets/imgs/RectanglePix.png')}>
                            <ButtonDefaul>
                                <ButtonText>PIX</ButtonText>
                            </ButtonDefaul>
                        </BackGroundPix>
                    </ButtonPIX>
                </ButtonsPagamentoContainer>
            </BackGround>
        </PagamentoContainer>
    )
}