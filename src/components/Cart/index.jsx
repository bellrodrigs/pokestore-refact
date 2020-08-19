import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function Cart() {
  let pokemon = useSelector(state => state.pokemon?.pokemon)
  
  return (
    <div>
      cart
        {pokemon.map(poke => <h1 key={poke.id}>{poke.name}</h1>)}
    </div>  
  );
}

export default Cart;