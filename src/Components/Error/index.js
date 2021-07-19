import React from 'react';
import images from '../../../assets/images';
import { Container,Image, Text } from './styles';


const Error = ({ text }) => {
    return (
        <Container>
            <Text>{text}</Text>
            <Image source={images.magikarp} />
        </Container>
    )
}

export default Error;