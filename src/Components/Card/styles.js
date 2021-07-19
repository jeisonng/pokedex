import styled from 'styled-components/native'
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');


export const Title = styled.Text`
    fontSize: 15px;
    fontFamily: 'PressStart2P-Regular';
    textTransform: capitalize;
`

export const Row = styled.View`
    flexDirection: row;
`

export const withOutStyled = StyleSheet.create({
    container: {
        margin: 8,
        width: width * 0.45,
        height: width * 0.45,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        paddingVertical: 15
    },
});
