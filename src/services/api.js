import axios from "axios";
import { initLimit } from '../util'

const localhost = `https://pokeapi.co/api/v2/pokemon`


export const getPokemons = async (offset) => {

  const api = `${localhost}?offset=${offset}&limit=${initLimit}`
  const res = await axios.get(api);
  return res.data;
};

export const getPokemonDetail = async (id) => {
  const res = await axios.get(`${localhost}/${id}`);
  return res.data;
};

