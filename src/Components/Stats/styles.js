import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');



export const Container = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginVertical: 3px;
    width: ${width}px;
    paddingHorizontal: 12px;
    alignItems:center;
`

export const Title = styled.Text`
    fontSize: 10px;
    fontFamily: 'PressStart2P-Regular';
`