import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Bar } from 'react-native-progress';
const { width } = Dimensions.get('window');

import { Container, Title } from './styles';

const Stats = ({ stats, color }) => {
    return <ScrollView>
        {
            stats.map((item, index) => {
                return <Container key={index}>
                    <Title>
                        {item.stat.name}
                    </Title>
                    <Bar animated={true} progress={item.base_stat / 100} color={color} width={width * 0.5} height={13} />
                </Container>
            })
        }
    </ScrollView>
}

export default Stats;