import styled from 'styled-components/native'

export const Row = styled.View`
    flexDirection: row;
`

export const Container = styled.View`
    justifyContent: center;
    alignItems: center;
    marginHorizontal: 10px;
`
export const Text = styled.Text`
    marginVertical: 5px;
    fontSize: 10px;
    fontFamily: 'PressStart2P-Regular';
    textTransform: uppercase;
`

export const Circle = styled.View`
    backgroundColor:${({color})=>color};
    width: 80px;
    height: 80px;
    borderRadius: 50px;
    justifyContent: center;
    alignItems: center;
`