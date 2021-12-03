import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPoke } from '../../services/FetchIndvPokemon';
import PokeList from '../../components/PokemonList/PokeList';
import pokeball from '../../assets/pokeball.png';

export default function Compendium() {
    // Set states needed for project.
    
    const [pokeDetails, setPokeDetails] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    // const [pokeTypes, setPokeTypes] = useEffect([]);
    // const [selected, setSelectedPokemon] = useEffect('');
    // const [sort, setSort] = useEffect([]);

    useEffect(() => {
        async function getAllPokemon() {
          const fullPokeList = await fetchPoke();
          console.log("full list..", fullPokeList);
          setPokeDetails(fullPokeList);

          setTimeout(() => {
              setLoadingState(false);
          }, 500)
        }
        getAllPokemon();
    }, []);

    // need pokeList to render after load state closes 
    // render the first 10 pokemon and their 5 stats.. 
    // Need to build PokemonDetails page ^
    
    return (
        <div>
            {loadingState ? (
            <>
            <p style={{fontFamily: 'Brush Script MT', fontSize: '2em'}}>
                Gotta catch em' all!
            </p>
            <img src={pokeball} alt='Pokeball'></img>
            </>
            ) : (
                <PokeList pokeList={pokeDetails}/>
            )}
        </div>
    )
}

