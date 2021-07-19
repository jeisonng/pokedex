import React from 'react';
import { ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import { Row, Container, Circle, Text } from './styles';

const Evolves = ({ evolves, baseColor }) => {

    return (
        <ScrollView>
            <Row>
                {
                    evolves.map(({ image_url, species_name, min_level }, index) => {
                        return (
                            <Container key={index}>
                                <Circle color={baseColor}>
                                    <SvgUri
                                        width={50}
                                        height={50}
                                        source={{ uri: image_url }}
                                    />
                                </Circle>
                                <Text>{species_name}</Text>
                                <Text>LVL. {min_level}</Text>
                            </Container>
                        )
                    })
                }
            </Row>
        </ScrollView>
    )
}

export default Evolves;