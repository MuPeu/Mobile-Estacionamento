import styled from "styled-components/native"

export const CreditoContainer = styled.View`
    padding-top: 35px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  justify-content: center;
  gap: 75px
`

export const InputCredito = styled.TextInput`
  font-size: 36px;
  background-color: white;
  width: 365px;
  height: 82px;
  padding-left: 10px;
`

export const PagarContainer = styled.View`
  padding-bottom: 25px;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-size: 45px;
  color: black;
`

export const ButtonPagar = styled.TouchableOpacity`
  width: 235px;
  height: 83px;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const ButtonContainer = styled.View`
    padding-left: 340px;
`

export const ButtonClose = styled.Image`
    width: 30px;
    height: 30px;
`