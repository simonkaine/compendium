import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPoke } from '../../services/FetchIndvPokemon';
import PokeList from '../../components/PokemonList/PokeList';

export default function Compendium() {
    // Set states needed for project.
    
    const [pokeDetails, setPokeDetails] = useState([]);
    // const [loadingState, setLoadingState] = useEffect(true);
    // const [pokeTypes, setPokeTypes] = useEffect([]);
    // const [selected, setSelectedPokemon] = useEffect('');
    // const [sort, setSort] = useEffect([]);

    useEffect(() => {
        async function getAllPokemon() {
          const fullPokeList = await fetchPoke();
          console.log("full list..", fullPokeList);
          setPokeDetails(fullPokeList);
        //   setLoadingState(false);
        }
        getAllPokemon();
    }, []);

    // need pokeList to render after load state closes 
    // render the first 10 pokemon and their 5 stats.. 
    // Need to build PokemonDetails page ^
    
    return (
        <div>
            <h1>Working?</h1>
            <PokeList pokeList={pokeDetails}/>
        </div>
    )
}

