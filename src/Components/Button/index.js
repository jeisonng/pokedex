import React from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';

import { Container,Title } from './styles';

const Button = ({ onPress, text, selected,color }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Container selected={selected} color={color} >
                <Title selected={selected} color={color}>{text}</Title>
            </Container>
        </TouchableOpacity>
    )
}

export default Button;