import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Button from '../../Components/Button';
import colors from '../../Constants/colors';
import TypePill from '../../Components/TypePill';
import images from '../../../assets/images';
import Stats from '../../Components/Stats';
import Evolves from '../../Components/Evolves';
import Moves from '../../Components/Moves';
import { getEvolutions } from '../../Utils/Api';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/Ionicons';

import {Container,Back,Body,ImageContainer, Title,Row} from './styles'

const { width } = Dimensions.get('window');

const PokemonDetail = ({ route, navigation }) => {
    const { pokemon } = route.params;
    const image = pokemon.sprites.other.dream_world.front_default
    const [select, setSelect] = useState({ status: true });
    const [evolves, setEvolves] = useState([])

    const handleSelect = (name) => {
        setSelect({ [name]: true })
    }

    useEffect(() => {
        (async () => {
            try {
                const result = await getEvolutions(pokemon.name);
                setEvolves(result)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <Container color={colors[pokemon.types[0].type.name]}>
            <TouchableWithoutFeedback onPress={()=>{navigation.goBack()}}>
                <Back>
                    <Icon name="chevron-back" size={30} color="black" />
                </Back>
            </TouchableWithoutFeedback>
            <Body>
                <ImageContainer>
                    <SvgUri
                        width={width * 0.2}
                        height={width * 0.2}
                        source={{ uri: image }}
                    />
                    <Title>{pokemon.name}</Title>
                    <Row>
                        {
                            pokemon.types.map(({ type: { name } }, index) => <TypePill key={index} color={colors[name]} text={name} image={images[name]} />)
                        }
                    </Row>

                </ImageContainer>
                <Row>
                    <Button text="Stats" color={colors[pokemon.types[0].type.name]} selected={select['status']} onPress={() => { handleSelect('status') }} />
                    <Button text="evolves" color={colors[pokemon.types[0].type.name]} selected={select['evolves']} onPress={() => { handleSelect('evolves') }} />
                    <Button text="moves" color={colors[pokemon.types[0].type.name]} selected={select['moves']} onPress={() => { handleSelect('moves') }} />
                </Row>
                {
                    select['status'] ? <Stats stats={pokemon.stats} color={colors[pokemon.types[0].type.name]} /> :
                        select['evolves'] ? <Evolves baseColor={colors[pokemon.types[0].type.name]} evolves={evolves} /> : <Moves color={colors[pokemon.types[0].type.name]} moves={pokemon.moves} />
                }

            </Body>
        </Container>
    )
}


export default PokemonDetail;