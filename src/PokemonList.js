// documentation at https://pokeapi.co/docs/v2#pokemon
import React from 'react'


export default function PokemonList( { pokeData }) {

  function clickHandle({ url }) {
    //NOTE: I am not sure why this requires pokeman instead of pokeman.url
    window.open(`${url}`, "_blank")
  }

  return (
    <>
        {pokeData.map(pokeman => (
            <div
              className='pokemonCard'
              key={pokeman.name}
              onClick={() => clickHandle(pokeman)}>
                {pokeman.name}
            </div>
        ))}
    </>
  )
}
