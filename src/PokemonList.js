import React from 'react'

function clickHandle() {        
  window.open(            // Need to pull URL from API
    "#", "_blank")
}

// documentation at https://pokeapi.co/docs/v2#pokemon


export default function PokemonList( { pokemon, pokeUrl }) {
  return (
    <>
        {pokemon.map(p => (
            <div 
              className='pokemonCard' 
              key={p}
              onClick={clickHandle}>
                {p}
            </div>
        ))}

        {pokeUrl.map(u => (
          <>
            <a href={u}>Unique API link</a>
          </>
        ) )}
    </>
  )
}
