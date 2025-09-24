import { EntradaContainer, ButtonContainer, ButtonBack, TitlePage, InputContainer, InputEntrada, EnviarContainer, ButtonEnviar, ButtonText, BackGround } from "./style/entrada"

export default function Entrada() {
    return (
        <EntradaContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <ButtonContainer>
                    <ButtonBack source={require('../assets/imgs/Button-Back.png')}/>
                </ButtonContainer>
                <TitlePage>Entrada</TitlePage>
                <InputContainer>
                    <InputEntrada placeholder="Placa"></InputEntrada>
                    <InputEntrada placeholder="Modelo"></InputEntrada>
                    <InputEntrada placeholder="Horario Entrada"></InputEntrada>
                </InputContainer>
                <EnviarContainer>
                    <ButtonEnviar>
                        <ButtonText>Enviar</ButtonText>
                    </ButtonEnviar>
                </EnviarContainer>
            </BackGround>
        </EntradaContainer>
    )
}