import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width,height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    justifyContent: flex-start;
    alignItems: center;
    backgroundColor: ${({color})=>color};
`

 export const Back = styled.View`
    alignSelf: flex-start;
    marginTop: 10px;
    marginLeft: 10px;
  `
export const Body = styled.View`
    width: ${width}px;
    justifyContent: flex-start;
    alignItems: center;
    backgroundColor: #ffffff;
    borderTopStartRadius: 30px;
    borderTopEndRadius: 30px;
    marginTop:${height * 0.25}px;
    height:${height * 0.75}px;
`
export const ImageContainer = styled.View`
    marginTop:${-height * 0.21}0px;
    alignItems: center;
`
 export const Title = styled.Text`
    marginTop: 10px;
    fontSize: 12px;
    fontFamily: 'PressStart2P-Regular';
    textTransform: uppercase;
 `

 export const Row = styled.View`
    flexDirection: row;
    marginVertical: 15px;
 `
