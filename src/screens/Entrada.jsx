import { useState } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { EntradaContainer, ButtonContainer, ButtonBack, TitlePage, BackGroundInput, InputContainer, InputEntrada, EnviarContainer, BackGroundEnviar, ButtonEnviar, ButtonText, BackGround } from "./style/entrada"
import { useNavigation } from '@react-navigation/native';
import api from "../services/api";

export default function Entrada() {
    const navigation = useNavigation();
    const [placa, setPlaca] = useState("");
    const [modelo, setModelo] = useState("");

    async function registrarEntrada() {
        if (!placa || !modelo) {
            Alert.alert("Atenção", "Preencha todos os campos obrigatórios!");
            return;
        }

        try {
            await api.post("/entrada", { 
                id_placa: placa, 
                modelo,
                cor
            });
            Alert.alert("Sucesso", "Entrada registrada com sucesso!");
            setPlaca("");
            setModelo("");
            navigation.navigate("Home");
        } catch (error) {
            console.error("Erro ao registrar entrada:", error);
            Alert.alert("Erro", "Não foi possível registrar a entrada.");
        }
    }

    return (
        <EntradaContainer>
            <BackGround source={require("../assets/imgs/BackgroundDefault.png")}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonBack source={require("../assets/imgs/Button-Back.png")} />
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Entrada</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require("../assets/imgs/Rectangle/Input.png")}>
                        <InputEntrada
                            placeholder="Placa"
                            value={placa}
                            onChangeText={setPlaca}
                        />
                    </BackGroundInput>
                    <BackGroundInput source={require("../assets/imgs/Rectangle/Input.png")}>
                        <InputEntrada
                            placeholder="Modelo"
                            value={modelo}
                            onChangeText={setModelo}
                        />
                    </BackGroundInput>
                    <BackGroundInput source={require("../assets/imgs/Rectangle/Input.png")}>
                        <InputEntrada
                            placeholder="Cor"
                            value={cor}
                            onChangeText={setCor}
                        />
                    </BackGroundInput>
                </InputContainer>
                <EnviarContainer>
                    <ButtonEnviar onPress={registrarEntrada}>
                        <BackGroundEnviar source={require("../assets/imgs/Rectangle/Enviar.png")}>
                            <ButtonText>Enviar</ButtonText>
                        </BackGroundEnviar>
                    </ButtonEnviar>
                </EnviarContainer>
            </BackGround>
        </EntradaContainer>
    )
}