import React from 'react';
// import { useEffect } from 'react';
import { fetchPoke } from '../../services/FetchIndvPokemon';

export default function Compendium() {
    // Set states
    
    // const [loadingState, setLoadingState] = useEffect(true);
    // const [pokeDetails, setPokeDetails] = useEffect([]);
    // const [pokeTypes, setPokeTypes] = useEffect([]);
    // const [selected, setSelectedPokemon] = useEffect('');
    // const [sort, setSort] = useEffect([]);

    // useEffect(() => {
    //     async function getPokemon() {
    //       const fullPokeList = await fetchPoke();
    //       console.log("full list..", fullPokeList);
    //       setPokeDetails(fullPokeList);
    //       setLoadingState(false);
    //     }
    //     getPokemon();
    // }, []);

    // need pokeList to render after load state closes 
    // render the 

    async function getPokemon() {
        const fullPokeList = await fetchPoke();
        // console.log("full list..", fullPokeList);
      }
      getPokemon();
    
    return (
        <div>
            <h1>Working?</h1>
            {/* <pokeList pokemon={pokeDetails}/> */}
        </div>
    )
}

