import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SingUpContainer, TitlePage, InputContainer, BackGroundInput, InputLogin, CriarContaContainer, ButtonText, BackGroundCadastar, ButtonCadastrar, CloseContainer, ButtonClose,  BackGround  } from "./style/singUp"
import { useNavigation } from '@react-navigation/native';
import api from "../services/api";

export default function SingIn() {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    async function handleSingUp() {
        if(senha !== confirmaSenha) {
            alert("Senhas não coincidem");
            return;
        }

        try {
            await api.post("/api/usuario/signup", {
                usuario,
                senha
            });
            alert("Usuário criado com sucesso!");
            navigation.navigate('SingIn');
        } catch (err) {
            alert("Erro ao criar usuário");
        }
    }

    return (
        <SingUpContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <CloseContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonClose source={require('../assets/imgs/Button-Close.png')} />
                    </TouchableOpacity>
                </CloseContainer>
                <TitlePage>Cadastro</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin
                            placeholder="Usuário"
                            value={usuario}
                            onChangeText={setUsuario}
                        />
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin
                            placeholder="Senha"
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={setSenha}
                        />
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin
                            placeholder="Confirmar Senha"
                            secureTextEntry={true}
                            value={confirmaSenha}
                            onChangeText={setConfirmaSenha}
                        />
                    </BackGroundInput>
                </InputContainer>
                <CriarContaContainer>
                    <ButtonCadastrar onPress={handleSingUp}>
                        <BackGroundCadastar source={require('../assets/imgs/Rectangle/CriarConta.png')}>
                            <ButtonText>Criar Conta</ButtonText>
                        </BackGroundCadastar>
                    </ButtonCadastrar>
                </CriarContaContainer>
            </BackGround>
        </SingUpContainer>
    )
}