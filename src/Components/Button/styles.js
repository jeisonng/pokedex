import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');


export const Container = styled.View`
    shadowOffset: {
        width: 0px;
        height: ${({ selected }) => selected ? 2 : 0}px;
    };
    shadowOpacity:${({ selected }) => selected ? 0.27 : 0};
    shadowRadius: ${({ selected }) => selected ? 4.65 : 0};
    elevation: ${({ selected }) => selected ? 2 : 0};
    paddingHorizontal: 20px;
    paddingVertical: 5px;
    borderRadius: 20px;
    backgroundColor: ${({ selected, color }) => selected ? color : '#ffffff'};
    marginHorizontal: 4px;
    width:${width * 0.3}px;
    justifyContent: center;
    alignItems: center;
    paddingTop: 10px;
`

export const Title = styled.Text`
    color: ${({ selected, color }) => selected ? '#ffffff' : color};
    fontSize: 8px;
    fontFamily: 'PressStart2P-Regular';
    textTransform: uppercase;
`