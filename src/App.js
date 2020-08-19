import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'



//Styles
import GlobalStyle from './styles/global'
import { Container, Row, Col } from './styles/shared'

//Components
import ListPokemon from './components/ListPokemon'
import Cart from './components/Cart'

//Themes
import fire from './styles/themes/fire'
import water from './styles/themes/water'

const THEMES = {
  fire, water
}


function App() {
  const [pokemonType, setPokemonType] = useState({
    name: "Fogo",
    type: "fire",
    id: 1
  });

  return (
    <ThemeProvider theme={THEMES[pokemonType.type]}>
      <div className="App">
        <GlobalStyle />
        <Container>
          <Row>
            <Col dt='9'> <ListPokemon pokemonType={pokemonType} setPokemonType={setPokemonType} /> </Col>
            <Col dt='3'> <Cart /> </Col>
          </Row>
        </Container>  
      </div>
    </ThemeProvider>
  );
}

export default App;
