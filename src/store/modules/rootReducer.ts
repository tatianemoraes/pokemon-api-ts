import { combineReducers } from 'redux';
import pokemons from './pokemons/reducer';

export const rootReducer = combineReducers({
  pokemons,
});

export type RootState = ReturnType<typeof rootReducer>