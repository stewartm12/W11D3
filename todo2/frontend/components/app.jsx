import { Route } from "react-router-dom";
import React from 'react';
import PokemonIndexComponent from './pokemon/pokemon_index_container'

export const App = () => {
  return <Route path="/" component={PokemonIndexComponent}/>

}