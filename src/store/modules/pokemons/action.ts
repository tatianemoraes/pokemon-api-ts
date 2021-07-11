import { TYPES } from './types';
import { api } from '../../../services/api';

const { GET_POKEMON } = TYPES;

export function setPokemon(pokemon: string) {
  return async (dispatch: any) => {
    try {
      const {data: { name, sprites }} = await api.get(`/${pokemon}`)
      const values = { name, sprites };
      if(!values.name) {
        return alert('Pokémon não existente');
      }
      dispatch(getPokemon(values));
    } catch {
      alert('Pokémon não existente');
    }
  }
}

export function getPokemon(values: object) {
  return {
    type: GET_POKEMON, 
    payload: values,
  }
}

