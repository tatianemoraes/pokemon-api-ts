import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { setPokemon } from '../../store/modules/pokemons/action';

const SearchInput: React.FC = () => {

  const [ value, setValue ] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(!value) {
      return alert('Favor pesquisar um pokémon')
    } 
    dispatch(setPokemon(value));
    setValue('');
  };

  return (
    <Container>
      <div className='search-input'>
        <label htmlFor="">Digite o nome do Pokémon:</label>
        <input type="text" 
          value={ value || '' }
          onChange={(e) => setValue(e.target.value)}
        />
          <button
            onClick={() => handleSubmit()}

          >
            Pesquisar
          </button>
      </div>
    </Container>
  );
}

export default SearchInput;