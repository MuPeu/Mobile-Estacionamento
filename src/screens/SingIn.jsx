import { TouchableOpacity } from "react-native";
import { SingInContainer, TitlePage, InputContainer, BackGroundInput, InputLogin, LoginContainer, ButtonText, ButtonLogin, CloseContainer, BackGroundLogin, ButtonClose, BackGround  } from "./style/singIn"
import { useNavigation } from '@react-navigation/native';

export default function SingIn() {
    const navigation = useNavigation()

    return (
        <SingInContainer>
            <BackGround source={require('../assets/imgs/BackgroundDefault.png')}>
                <CloseContainer>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <ButtonClose source={require('../assets/imgs/Button-Close.png')}/>
                    </TouchableOpacity>
                </CloseContainer>
                <TitlePage>Login</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Usuário"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/Rectangle/Input.png')}>
                        <InputLogin placeholder="Senha" secureTextEntry={true}/>
                    </BackGroundInput>
                </InputContainer>
                <LoginContainer>
                    <ButtonLogin onPress={() => navigation.navigate('Home')}>
                        <BackGroundLogin source={require('../assets/imgs/Rectangle/Entrar.png')}>
                            <ButtonText>Login</ButtonText>
                        </BackGroundLogin>
                    </ButtonLogin>
                </LoginContainer>
            </BackGround>
        </SingInContainer>
    )
}