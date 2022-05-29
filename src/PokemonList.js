import React from 'react'

function clickHandle() {        
  window.open(            // Need to pull URL from API
    "#", "_blank")
}


export default function PokemonList( { pokemon, pokeUrl }) {
  return (
    <>
        {pokemon.map(p => (
            <div 
              className='pokemonCard' 
              key={p}
              onClick={clickHandle}>
                {p.toUpperCase(0).charAt(0) + p.toLowerCase().slice(1)}
            </div>
        ))}

        {/* {pokeUrl.map(u => (
          <div>
            <a href={u}>link</a>
          </div>
        ) )} */}
    </>
  )
}
