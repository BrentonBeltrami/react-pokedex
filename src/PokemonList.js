import React from 'react'

export default function PokemonList( { pokemon }) {
  return (
    <div className='pokemonList'>
        {pokemon.map(p => (
            <div className='pokemonCard' key={p}>{p.toUpperCase()}</div>
        ))}
    </div>
  )
}
