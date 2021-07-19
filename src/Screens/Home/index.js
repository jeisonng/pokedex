import React, { useEffect, useState } from 'react';
import { View, FlatList, RefreshControl, ScrollView } from 'react-native';
import Pagination from '../../Components/Pagination';
import Loading from '../../Components/Loading'
import { getData, getNextOrPreviousData } from '../../Utils/Api';
import Search from '../../Components/Search';
import Card from '../../Components/Card';
import Error from '../../Components/Error';
import { Container } from './styles';



const Home = ({ navigation }) => {
    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [previousPage, setPreviousPage] = useState(null);
    const [noData, setNoData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hidePagination, setHidePagination] = useState(false);
    const [messageError, setMessageError] = useState('Ooops.. tivemos um problema!\n\nPuxe para baixo para recarregar!');

    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = async () => {
        try {
            setRefresh(true)
            const { next, previous, pokemonList, error } = await getData();
            if (error) throw Error('nodata')
            setNextPage(next);
            setPreviousPage(previous)
            setPokemons(pokemonList);
            setLoading(false);
            setHidePagination(false);
            setRefresh(false)
            setNoData(false)
        } catch (error) {
            setRefresh(false)
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
            setNoData(false)
        } catch (error) {
            setNoData(true)
            setLoading(false);
        }
    }

    if (loading) return <Loading />;
    if (noData) return (
        <ScrollView
            contentContainerStyle={{flex:1}}
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={getData}
                />
            }>
            <Search />
            <Error text={messageError} />
        </ScrollView>)

    return <Container>
        <Search />
        <FlatList
            contentContainerStyle={{ alignItems: 'center' }}
            numColumns={2}
            columnCount={2}
            data={pokemons}
            horizontal={false}
            renderItem={({ item }) => {
                return <Card onPress={() => {
                    navigation.navigate('Detail', { pokemon: item })
                }} name={item.name} types={item.types} image={item.sprites.other.dream_world.front_default} type1={item.types[0]} type2={item.types[1] || item.types[0]} />
            }}
            keyExtractor={item => item.id}
            ListFooterComponent={() => {
                if (!hidePagination)
                    return <Pagination
                        page={page} next={() => { getNextData(nextPage); setPage(page + 1) }}
                        previous={() => { getNextData(previousPage); setPage(page - 1) }}
                    />
                else return <View />
            }}
        />
    </Container>
}



export default Home;