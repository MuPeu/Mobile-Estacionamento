import { EntradaContainer, TitlePage, InputContainer, InputEntrada, ButtonEnviar, ButtonText, BackGround } from "./style/entrada"

export default function Entrada() {
    return (
        <EntradaContainer>
            <BackGround source={require('../assets/BackgroundDefault.png')}>
                <TitlePage>Entrada</TitlePage>
                <InputContainer>
                    <InputEntrada placeholder="Placa"></InputEntrada>
                    <InputEntrada placeholder="Modelo"></InputEntrada>
                    <InputEntrada placeholder="Horario Entrada"></InputEntrada>
                </InputContainer>
                <ButtonEnviar>
                    <ButtonText>Enviar</ButtonText>
                </ButtonEnviar>
            </BackGround>
        </EntradaContainer>
    )
}