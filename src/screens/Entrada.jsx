import { EntradaContainer, TitlePage, InputContainer, InputEntrada, ButtonEnviar, ButtonText } from "./style/entrada"

export default function Entrada() {
    return (
        <EntradaContainer>
            <TitlePage>Entrada</TitlePage>
            <InputContainer>
                <InputEntrada placeholder="Placa"></InputEntrada>
                <InputEntrada placeholder="Modelo"></InputEntrada>
                <InputEntrada placeholder="Horario Entrada"></InputEntrada>
            </InputContainer>
            <ButtonEnviar>
                <ButtonText>Enviar</ButtonText>
            </ButtonEnviar>
        </EntradaContainer>
    )
}