import styled from "styled-components/native"

export const HomeContainer = styled.View`
    padding-top: 47px;
    flex: 1;
    align-items: center;
    background-color: #6C6965;
    gap: 100px;
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

// export const Listra = styled.`
//   color: #FBBD0C;
//   width: 30px;
//   height: 120px;
//   fill: #FBBD0C;
//   stroke-width: 5px;
//   stroke: #FBBD0C;
// `

export const ButtonsContainer = styled.View`
  flex: 1;
  align-items: center;
  gap: 100px
`

export const ButtonText = styled.Text`
  font-size: 45px;
  color: black;
`

export const ButtonHistorico = styled.TouchableOpacity`
  width: 265px;
  height: 83px;
  align-items: center;
  justify-content: center;
  /* fill: white;
  stroke-width: 5px;
  stroke: white; */
  background-color: white;
`

export const ButtonEntrada = styled.TouchableOpacity`
  width: 257px;
  height: 83px;;
  align-items: center;
  justify-content: center;
  /* fill: white;
  stroke-width: 5px;
  stroke: white; */
  background-color: white;
`

export const ButtonSaida = styled.TouchableOpacity`
  width: 211px;
  height: 83px;;
  align-items: center;
  justify-content: center;
  /* fill: white;
  stroke-width: 5px;
  stroke: white; */
  background-color: white;
`

export const CloseContainer = styled.View`
    padding-left: 300px;
`

export const ButtonClose = styled.Image`
    width: 30px;
    height: 30px;
`