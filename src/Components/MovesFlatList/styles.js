import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

export const Container = styled.View`
    backgroundColor: ${({ color }) => color};
    marginVertical: 2px;
    padding: 10px;
    width: ${width * 0.8}px;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    borderRadius: 10px;
`

export const Title = styled.Text`
    width: ${width * 0.5}px;
    fontSize: 10px;
    fontFamily: 'PressStart2P-Regular';
    textTransform: capitalize;
    marginTop: 5px;
`