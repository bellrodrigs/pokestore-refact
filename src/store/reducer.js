
const INITIAL_STATE = {
    pokemon:[],
    // type:''
    };


    export default function pokemons(state = INITIAL_STATE, action){
     switch(action.type){
      case 'ADD_POKEMON':
        return { ...state, pokemon:[ ...state.pokemon, action.data]}
      // case 'ADD_TYPE_POKEMON':
      //     return { ...state, typePokemon: action.typePokemon}  
      case 'REMOVE_POKEMON':
        return { pokemon:[ ...state.pokemon.filter(pokemon => pokemon.id !== action.id )]}
      case 'CLEAN_CART_POKEMON':
        return { pokemon:[]}
      default:
        return state
      
    }
  }