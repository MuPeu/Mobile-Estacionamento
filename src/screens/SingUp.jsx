import { TouchableOpacity } from "react-native";
import { SingUpContainer, TitlePage, InputContainer, BackGroundInput, InputLogin, CriarContaContainer, ButtonText, BackGroundCadastar, ButtonCadastrar, CloseContainer, ButtonClose,  BackGround  } from "./style/singUp"
import { useNavigation } from '@react-navigation/native';

export default function SingIn() {
    const navigation = useNavigation()

    return (
        <SingUpContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <CloseContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                    </TouchableOpacity>
                </CloseContainer>
                <TitlePage>Cadastro</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Usuário"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Senha" secureTextEntry={true}/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Confirmar Senha" secureTextEntry={true}/>
                    </BackGroundInput>
                </InputContainer>
                <CriarContaContainer>
                    <ButtonCadastrar onPress={() => navigation.navigate('Home')}>
                        <BackGroundCadastar source={require('../assets/imgs/Rectangle/CriarConta.png')}>
                            <ButtonText>Criar Conta</ButtonText>
                        </BackGroundCadastar>
                    </ButtonCadastrar>
                </CriarContaContainer>
            </BackGround>
        </SingUpContainer>
    )
}