import axios from "axios";
import { offset } from '../util'

const localhost = `https://pokeapi.co/api/v2/pokemon`


export const getPokemons = async (displayLimit) => {

    const api = `${localhost}?offset=${offset}&limit=${displayLimit}`
    const res = await axios.get(api);

    return res.data;
};

export const getPokemonDetail = async (id) => {
    const res = await axios.get(`${localhost}/${id}`);
    return res.data;
};

