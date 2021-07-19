import React from 'react';

import { Container,Title,Image } from './styles';

const TypePill = ({ color, image, text }) => {
    return (
        <Container color={color}>
            <Image source={image} />
            {text && <Title>{text}</Title>}
        </Container>
    )
}

export default TypePill;