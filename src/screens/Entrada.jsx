import { EntradaContainer, ButtonContainer, ButtonBack, TitlePage, BackGroundInput, InputContainer, InputEntrada, EnviarContainer, BackGroundEnviar, ButtonDefaul, ButtonEnviar, ButtonText, BackGround } from "./style/entrada"

export default function Entrada() {
    return (
        <EntradaContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                </ButtonContainer>
                <TitlePage>Entrada</TitlePage>
                <InputContainer>
                    <InputEntrada placeholder="Placa">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputEntrada>
                    <InputEntrada placeholder="Modelo">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputEntrada>
                    <InputEntrada placeholder="Horario Entrada">
                        <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}></BackGroundInput>
                    </InputEntrada>
                </InputContainer>
                <EnviarContainer>
                    <ButtonEnviar>
                        <BackGroundEnviar source={require('../assets/imgs/Rectangle/Enviar.png')}>
                            <ButtonDefaul>
                                <ButtonText>Enviar</ButtonText>
                            </ButtonDefaul>
                        </BackGroundEnviar>
                    </ButtonEnviar>
                </EnviarContainer>
            </BackGround>
        </EntradaContainer>
    )
}