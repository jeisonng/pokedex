import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width}px;
    paddingVertical: 1px;
    backgroundColor: #ffffff;
`

export const Title = styled.Text`
    fontSize: 15px;
    fontFamily: 'PressStart2P-Regular';
    marginTop: 7px;
    paddingLeft: 10px;
    color: #0d0d0d;
`