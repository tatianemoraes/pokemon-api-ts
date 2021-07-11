import React, { useEffect, useState } from 'react';
import { Container } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules/rootReducer';

const FoundPokemon: React.FC = () => {

  interface IPokemon {
    name: string, 
    sprites: {
      front_default: string,
    }
  }

  const { response } = useSelector((state: RootState)  => state.pokemons);
  const [ pokemon, setPokemon ] = useState<IPokemon>();

  useEffect(() => {
    if(response) {
      setPokemon(response); 
    }
  }, [response]);

  return (
    <Container>
      {
        pokemon && pokemon.name !== '' ?
        <>
          <div className='results-search'>
            <h4>Pokémon:</h4>
            <p>{pokemon?.name}</p>
          </div>
          <div className='img-search'>
            <img src={pokemon?.sprites.front_default} alt="Pokémon pesquisado" />
          </div> 
        </>
        : ''
      }
    </Container>
  );
}

export default FoundPokemon;