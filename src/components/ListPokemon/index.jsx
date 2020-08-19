import React,{ useState, useContext } from 'react';
import { ThemeContext } from 'styled-components'
import { useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import CardPokemon from './PokemonCard'

//Styles
import { Container, Row, Col } from '../../styles/shared';
import { Card, CardTitle, CardImage, CardButton } from './style'

//Functions

const getPokemonsFromType = (key, pokemonType) => {
  return fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`).then(response => response.json()).then(data => data.pokemon);
}

const usePokemonByType = (pokemonType) => useQuery(["POKEMONS", pokemonType], getPokemonsFromType, {
  refetchOnWindowFocus: false
});

function ListPokemon({ changeTheme: changeThemeHandler,  setPokemonType,  pokemonType}) {
  const dispatch = useDispatch();

  const [types, setType] = useState([{id: 1, name: 'Fogo' ,type: 'fire'}, {id: 2, name: 'Água' ,type: 'water'}]);
  const [pokeCart, setPokeCart] = useState();
  const { title } = useContext(ThemeContext)

  const { data: pokemon, status } = usePokemonByType(pokemonType.type);
  
  // if(status === "loading") return <Loader />
  // if(status === "error") return <Error />

  const addPokemonOnCart = (data) => {
    dispatch({type:'ADD_POKEMON', data})
  }

  return status === "success" && (
    <Container>
      {types.map(type => <button key={type.id} onClick={() => setPokemonType(type)}> {type.name} </button>)}
      <Row>
        {pokemon.map(({pokemon}) => 
          <CardPokemon key={pokemon.url} pokemon={pokemon} addPokemonOnCart={addPokemonOnCart} />
        )}
      </Row>
   </Container>
  );
}

export default ListPokemon;