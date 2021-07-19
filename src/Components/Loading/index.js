import React from "react";
import images from '../../../assets/images';
import { Container, Image, Title } from './styles';


const Loading = () => {
    return (
        <Container>
            <Image source={images.pikachuRun} />
            <Title>Carregando...</Title>
        </Container>
    );
};
export default Loading;