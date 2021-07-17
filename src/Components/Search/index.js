import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchByName } from '../../Utils/Api';

const { width } = Dimensions.get('window');

// import { Container } from './styles';

const Search = ({ search, emptySearch }) => {

    const [text, setText] = useState('');

    const serachPokemonByName = async () => {
        const data = await searchByName(text);
        search(data)
    }

    useEffect(() => {
        (() => {
            if (text === "") emptySearch();
        })()
    }, [text])

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput onChangeText={(e) => { setText(e) }} value={text} style={styles.input} placeholder="Pesquisar por nome" />
                <TouchableWithoutFeedback onPress={serachPokemonByName}>
                    <Icon name="search" size={30} color="#b3b3b3" />
                </TouchableWithoutFeedback>
            </View>
            <Text style={styles.infoText}>*Digite o nome completo do pokemon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        marginVertical: 15
    },
    containerInput: {
        width: width * 0.9,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 2,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: width * 0.8,
        paddingLeft: 20
    },
    infoText: {
        fontSize: 8,
        fontFamily: 'PressStart2P-Regular',
        marginTop: 7,
        paddingLeft: 10
    }
})

export default Search;