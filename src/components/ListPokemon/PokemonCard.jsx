import React from 'react';

import { Container, Row, Col } from '../../styles/shared';
import { Card, CardTitle, CardImage, CardButton } from './style'
import { useQuery } from 'react-query';

const enhancePokemonData = (key, pokemonUrl) => {
  return fetch(pokemonUrl).then(response => response.json()).then(data => data);
};

const PokemonCard = ({pokemon, addPokemonOnCart}) => {

    const { data: enhancedPokemon, status } = useQuery(["POKEMON", pokemon.url], enhancePokemonData, {
      refetchOnWindowFocus: false
    })

    console.log(enhancedPokemon)

  if(status !== "success") return null;

  return(
    <Col mb='12' dt='2'>
    <Card>
      <CardTitle>{enhancedPokemon.name}</CardTitle>
      <CardImage src={enhancedPokemon.sprites.front_default} />
      <CardButton onClick={() => addPokemonOnCart(enhancedPokemon)}>Comprar</CardButton>
    </Card>
  </Col>
  );
}

export default PokemonCard;