import React from 'react';
import { TouchableOpacity, } from 'react-native';

import { Container, Button, Text } from './styles';

const Pagination = ({ next, previous, page }) => {
    return <Container>
        <TouchableOpacity onPress={previous}>
            <Button>
                <Text>Anterior</Text>
            </Button>
        </TouchableOpacity>
        <Text>Página {page}</Text>
        <TouchableOpacity onPress={next}>
            <Button>
                <Text>Próxima</Text>
            </Button>
        </TouchableOpacity>
    </Container>
}

export default Pagination;