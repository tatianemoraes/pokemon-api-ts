import React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import FoundPokemon from '../../components/FoundPokemon';

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <SearchInput />
      <FoundPokemon />
    </>
  );
}

export default Home;