import React from 'react';
import {  Dimensions, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Constants/colors';
import images from '../../../assets/images';
import TypePill from '../TypePill';
import SvgUri from 'react-native-svg-uri';

const { width } = Dimensions.get('window');

import { Title, Row, withOutStyled } from './styles';

const Card = ({ name, image, types, onPress }) => {
    const color1 = types[0].type.name;
    const color2 = types[1]?.type?.name || types[0].type.name;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.5 }} colors={[colors[color1], colors[color2]]} style={withOutStyled.container}>
                <Title>{name}</Title>
                <SvgUri
                    width={width * 0.15}
                    height={width * 0.15}
                    source={{ uri: image }}
                />
                <Row>
                    {types.map(({ type: { name } }, index) => {
                        return <TypePill key={index} color={colors[name]} image={images[name]} />
                    })}
                </Row>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
};


export default Card;