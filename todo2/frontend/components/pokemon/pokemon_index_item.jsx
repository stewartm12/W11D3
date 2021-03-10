import React from 'react';
import { Link } from "react-router-dom";


export const PokemonIndexItem = (props)=>{
    debugger
    return(
        <Link to = {`/pokemon/${props.pokemon.id}`}>
            <li>{props.pokemon.name} 
            <img src= {props.pokemon.imageUrl} width="50" height="60" />
            </li>
        </Link>
        
    )
}