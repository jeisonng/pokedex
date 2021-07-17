import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Constants/colors';
import images from '../../../assets/images';
import Pagination from '../../Components/Pagination';
import Loading from '../../Components/Loading'
import { getData, getNextOrPreviousData } from '../../Utils/Api';
import Search from '../../Components/Search';

const { width } = Dimensions.get('window');


const Item = ({ name, image, types }) => {
    const color1 = types[0].type.name;
    const color2 = types[1]?.type?.name || types[0].type.name;
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.5 }} colors={[colors[color1], colors[color2]]} style={styles.item}>

            <Text style={styles.title}>{name}</Text>
            <Image style={styles.image} progressiveRenderingEnabled={true} source={{ uri: image }} />
            <View style={{ flexDirection: 'row' }}>
                {types.map(({ type: { name } }, index) => {
                    return <View key={index} style={{
                        width: 30, height: 30, borderRadius: 50, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: colors[name], shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 6,
                    }}>
                        <Image style={{ width: 15, height: 15 }} progressiveRenderingEnabled={true} source={images[name]} />
                    </View>
                })}
            </View>
        </LinearGradient>
    )
};

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [noData, setNoData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hidePagination, setHidePagination] = useState(false);
    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = async () => {
        try {
            const { next, previous, pokemonList } = await getData();
            setNextPage(next);
            setPreviousPage(previous)
            setPokemons(pokemonList);
            setLoading(false);
            setHidePagination(false);
        } catch (error) {
            setNoData(true)
            setLoading(false);
        }
    }

    const getNextData = async (url) => {
        try {
            setLoading(true);
            const { next, previous, pokemonList } = await getNextOrPreviousData(url);
            setNextPage(next);
            setPreviousPage(previous)
            setPokemons(pokemonList);
            setLoading(false);
            setHidePagination(false);
        } catch (error) {
            setNoData(true)
            setLoading(false);
        }
    }

    const renderItem = ({ item }) => (
        <Item name={item.name} types={item.types} image={item.sprites.front_default} type1={item.types[0]} type2={item.types[1] || item.types[0]} />
    );

    if (loading) return <Loading />;

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Search search={(pokemon) => {
            setPokemons([pokemon]);
            setHidePagination(true)
        }}
            emptySearch={() => {
                getPokemons()
            }}
        />

        {
            noData ?
                <Image style={{ width: 60, height: 60 }} source={images.magikarp} />
                :
                <FlatList
                    contentContainerStyle={{ alignItems: 'center' }}
                    numColumns={2}
                    columnCount={2}
                    data={pokemons}
                    horizontal={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => {
                        if (!hidePagination)
                            return <Pagination
                                page={page} next={() => { getNextData(nextPage); setPage(page + 1) }}
                                previous={() => { getNextData(previousPage); setPage(page - 1) }}
                            />
                        else return <View />
                    }}
                />}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        margin: 8,
        width: width * 0.45,
        height: (width * 0.45),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    title: {
        fontSize: 15,
        fontFamily: 'PressStart2P-Regular',
        textTransform: 'capitalize'

    },
    image: {
        width: 70,
        height: 70
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.5,
        paddingHorizontal: 20
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 2,
        borderRadius: 50,
        marginVertical: 5
    }
});

export default Home;