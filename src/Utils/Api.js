import axios from 'axios';

const BASE_URL = "https://pokeapi.co/api/v2/"

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
        const { data: { results, next, previous } } = await axios.get(`${BASE_URL}pokemon?limit=10&offset=0`);
        const pokemonList = await getPokemonList(results);
        return { pokemonList, next, previous };
    } catch (error) {
        return {error};
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
    const { data } = await axios.get(`${BASE_URL}pokemon/${String(name).toLocaleLowerCase()}`);
    return data;
}

export const getMoves = async (data) => {
    const movesList = [];
    await Promise.all(
        data.map(async ({ move }) => {
            const result = await axios.get(`${BASE_URL}move/${move.name}/`)
            movesList.push(result.data);
        })
    )
    return movesList.sort((a, b) => a.id - b.id);
}

export const getEvolutions = async (name) => {
    const { data: { evolution_chain } } = await axios.get(`${BASE_URL}pokemon-species/${name}`);
    const result = await axios.get(evolution_chain.url);
    const evoChain = [];
    let evoData = result.data.chain;

    do {
        const evoDetails = evoData['evolution_details'][0];

        evoChain.push({
            "species_name": evoData.species.name,
            "min_level": !evoDetails ? 1 : evoDetails.min_level,
            "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
            "item": !evoDetails ? null : evoDetails.item
        });

        evoData = evoData['evolves_to'][0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    for (let i = 0; i < evoChain.length; i++) {
        const response = await axios.get(`${BASE_URL}pokemon/${evoChain[i].species_name}`).catch((err) => console.log("Error:", err));
        response.data.sprites.other.dream_world.front_default ? evoChain[i]['image_url'] = response.data.sprites.other.dream_world.front_default : evoChainArr[i]['image_url'] = response.data.sprites.other['official-artwork'].front_default;
    }

    return evoChain;
}

