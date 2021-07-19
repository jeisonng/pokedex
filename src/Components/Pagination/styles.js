import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const Container = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    width: ${width * 0.95}px;
    paddingHorizontal: 20px;
`

export const Button = styled.View`
    paddingHorizontal: 20px;
    paddingVertical: 5px;
    shadowOffset: {
        width: 1px;
        height: 1px;
    };
    shadowOpacity: 0.27;
    shadowRadius: 4.65px;
    elevation: 2;
    borderRadius: 50px;
    marginVertical: 5px;
    backgroundColor: #ffffff;
`

export const Text = styled.Text`
    fontSize: 10px;
    fontFamily: 'PressStart2P-Regular';
    textTransform: uppercase;`
