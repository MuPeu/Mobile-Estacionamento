import { TouchableOpacity, Alert } from "react-native";
import { SaidaContainer, ButtonContainer, ButtonBack, TitlePage, InputContainer, InputSaida, BackGroundInput, PagarContainer, ButtonPagar, ButtonText, BackGroundPagar, BackGround } from "./style/saida"
import { useNavigation, useRoute} from '@react-navigation/native';
import api from "../services/api";

export default function Saida() {
    const navigation = useNavigation();
    const route = useRoute();
    const { placa } = route.params || {};

    async function registrarSaida() {
        try {
            await api.put(`/saida/${placa}`);
            Alert.alert("Sucesso", `Saída do veículo ${placa} registrada.`);
            navigation.navigate("Historico");
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Falha ao registrar saída.");
        }
    }

    return (
        <SaidaContainer>
            <BackGround source={require("../assets/imgs/backgroundDefault.png")}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonBack source={require("../assets/imgs/buttonBack.png")} />
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Saída</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require("../assets/imgs/rectangle/input.png")}>
                        <InputSaida value={placa} editable={false} />
                    </BackGroundInput>
                </InputContainer>
                <PagarContainer>
                    <ButtonPagar onPress={registrarSaida}>
                        <BackGroundPagar source={require("../assets/imgs/rectangle/pagar.png")}>
                            <ButtonText>Pagar</ButtonText>
                        </BackGroundPagar>
                    </ButtonPagar>
                </PagarContainer>
            </BackGround>
        </SaidaContainer>
    )
}