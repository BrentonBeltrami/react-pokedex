import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokeUrl, setPokeUrl] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    let cancel
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
        setPokeUrl(res.data.results.map(u => u.url))
      })

      return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
 }

 function gotoPrevPage(){
  setCurrentPageUrl(prevPageUrl)
}

  if (loading) return <p className="loading">Loading...</p>

  return (
  <>
      <div className="pokedexBody">
        <PokemonList 
          pokemon={pokemon}
          pokeUrl={pokeUrl}
        />
      </div>
        <Pagination 
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
  </>
  );
}

export default App;