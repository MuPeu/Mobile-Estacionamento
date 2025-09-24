import styled from "styled-components/native"

export const SingInContainer = styled.View`
    padding-top: 35px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-image: url('./src/assets/BackgroundDefault.png'); */
    background-color: #6C6965;
    gap: 15px;
`

export const BackGround = styled.ImageBackground`
    width: 100%;
    height: 100%;
`

export const TitlePage = styled.Text`
  text-align: center;
  font-size: 70px;
  color: white;
`

export const InputContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 175px;
  gap: 100px
`

// export const Listra = styled.`
//   color: #FBBD0C;
//   width: 30px;
//   height: 120px;
//   fill: #FBBD0C;
//   stroke-width: 5px;
//   stroke: #FBBD0C;
// `

export const InputLogin = styled.TextInput`
  font-size: 36px;
  background-color: white;
  width: 365px;
  height: 82px;
  padding-left: 10px;
`

export const LoginContainer = styled.View`
  padding-bottom: 25px;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-size: 45px;
  color: black;
`

export const ButtonLogin = styled.TouchableOpacity`
  width: 235px;
  height: 83px;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const CloseContainer = styled.View`
    padding-left: 350px;
`

export const ButtonClose = styled.Image`
    width: 30px;
    height: 30px;
`