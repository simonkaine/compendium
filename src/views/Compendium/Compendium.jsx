import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPoke, fetchAllPokemonTypes } from '../../services/FetchPokemon';
import PokeList from '../../components/PokemonList/PokeList';
import pokeball from '../../assets/pokeball.png';
import Controls from '../../components/Controllers/Controls';

export default function Compendium() {
    // Set states needed for project.
    
    const [pokeDetails, setPokeDetails] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [pokeTypes, setPokeTypes] = useState([]); // fetch and store types
    // const [selectedType, setSelectedPokemonType] = useState('all') // load at ALL intially
    // const [sort, setSort] = useState('asc');

    useEffect(() => {
        async function getAllPokemon() {
          const fullPokeList = await fetchPoke();
          setPokeDetails(fullPokeList);

          setTimeout(() => {
              setLoadingState(false);
          }, 500)
        }
        getAllPokemon();
    }, []);

    // useEffect to fetch types from services then store in an array
    // Build fetch types function in services
    useEffect(() => {
        async function getAllPokeTypes() {
            const pokemonTypes = await fetchAllPokemonTypes();
            setPokeTypes(pokemonTypes)
        }
        getAllPokeTypes()
    }, []);

    // need pokeList to render after load state closes 
    // render the first 10 pokemon and their 5 stats.. 
    // Need to build PokemonDetails page ^
    
    return (
        <div>

            <Controls 
                pokeTypes={pokeTypes}
            /> 
            {loadingState ? (
            <>
                <p style={{fontFamily: 'Brush Script MT', fontSize: '2em'}}>
                    Gotta catch em' all!
                </p>
                <img src={pokeball} alt='Pokeball'></img>
            </>
            ) : (
                <main style={{}}> 
                    <PokeList pokeList={pokeDetails}/>
                </main>
            )}
        </div>
    )
}

