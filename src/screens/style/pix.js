import styled from "styled-components/native"

export const PixContainer = styled.View`
    padding-top: 47px;
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
  gap: 100px
`

export const InputPix = styled.TextInput`
  font-size: 36px;
  background-color: white;
  width: 365px;
  height: 82px;
  padding-left: 10px;
`

export const ButtonContainer = styled.View`
    padding-left: 340px;
`

export const ButtonClose = styled.Image`
    width: 30px;
    height: 30px;
`