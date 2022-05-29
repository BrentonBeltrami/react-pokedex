import React from 'react'

export default function PokemonList( { pokemon }) {
  return (
    <>
        {pokemon.map(p => (
            <div className='pokemonCard' key={p}>
                {p.toUpperCase(0).charAt(0) + p.toLowerCase().slice(1)}
            </div>
        ))}
        
    </>
  )
}
