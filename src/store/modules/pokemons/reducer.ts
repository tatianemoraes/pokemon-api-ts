import { TYPES } from './types'; 
import { INITIAL_STATE } from './state';

const { GET_POKEMON } = TYPES;

interface IAction {
  type: string,
  payload: object,
}

const pokemons = (state = INITIAL_STATE, action: IAction) => {
  switch(action.type) {

    case GET_POKEMON: {
      return { ...state, response: action.payload }
    }

    default: {
      return state;
    }
  }
}

export default pokemons;