import React from 'react';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Pokedex</h1>
      <h3>Api de Pokémons</h3>
    </Container>
  );
}

export default Header;