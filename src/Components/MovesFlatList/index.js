import React from 'react';
import colors from '../../Constants/colors';
import images from '../../../assets/images';
import TypePill from '../TypePill';


import { Container, Title } from './styles';

const MovesFlatList = ({ item, color }) => {
    return <Container color={color}>
        <Title>{item.name}</Title>
        <TypePill color={colors[item.type.name]} text={item.type.name} image={images[item.type.name]} />
    </Container>
}

export default MovesFlatList;