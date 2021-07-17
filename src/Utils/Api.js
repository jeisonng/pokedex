import axios from 'axios';

const getPokemonList = async (data) => {
    const pokemonList = [];
    await Promise.all(
        data.map(async pokemon => {
            const result = await searchByName(pokemon.name);
            pokemonList.push(result);
        })
    )
    return pokemonList.sort((a, b) => a.id - b.id);
}

export const getData = async () => {
    try {
        const { data: { results, next, previous } } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        const pokemonList = await getPokemonList(results);
        return { pokemonList, next, previous };
    } catch (error) {
        return error;
    }
}

export const getNextOrPreviousData = async (url) => {
    try {
        const { data: { results, next, previous } } = await axios.get(url);
        const pokemonList = await getPokemonList(results);
        return { pokemonList, next, previous };
    } catch (error) {
        return error;
    }
}

export const searchByName = async (name) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${String(name).toLocaleLowerCase()}`);
    return data;
}

