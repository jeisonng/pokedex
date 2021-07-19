import styled from 'styled-components/native'


export const Title = styled.Text`
    marginLeft: 5px;
    fontFamily: 'PressStart2P-Regular';
    fontSize: 10px;
    marginTop:3px;
    textTransform: uppercase;
    color:#ffffff;
`

export const Image = styled.Image`
    width: 15px;
    height: 15px;
`

export const Container = styled.View`
    flexDirection: row;
    borderRadius: 50px;
    marginHorizontal: 5px;
    justifyContent: center;
    alignItems: center;
    backgroundColor:${props=>props.color};
    shadowColor: #000;
    shadowOffset: {
        width: 0;
        height: 3;
    };
    shadowOpacity: 0.27;
    shadowRadius: 4.65;
    elevation: 6;
    paddingVertical: 10px;
    paddingHorizontal: 10px;
`