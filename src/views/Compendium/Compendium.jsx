import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPoke, fetchAllPokemonTypes, fetchSelectedTypes } from '../../services/FetchPokemon';
import PokeList from '../../components/PokemonList/PokeList';
import pokeball from '../../assets/pokeball.png';
import Controls from '../../components/Controllers/Controls';

export default function Compendium() {
    // Set states needed for project.
    
    const [pokeDetails, setPokeDetails] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [pokeTypes, setPokeTypes] = useState([]); // fetch and store types
    const [selectedPokemonType, setSelectedPokemonType] = useState('all'); // load at ALL intially
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

    // Build useEffect to utilize dependency array of types
    // build fetched filtered types in services
    // if all isnt selected, populate with chosen type
    // else show intial load of pokemon
    useEffect(() => {
        async function runFilterOnPokemon() {
            if(!selectedPokemonType) return;
            setLoadingState(true)

            if(selectedPokemonType !== 'all') {
                const pokemonFiltered = await fetchSelectedTypes(selectedPokemonType);
                setPokeDetails(pokemonFiltered)
                console.log('NEW TYPES RENDERED: ',pokemonFiltered);
                
            } else {
                const pokemonTypesList = await fetchPoke();
                setPokeDetails(pokemonTypesList);
            }
            setLoadingState(false)
        }
        runFilterOnPokemon();
    }, [selectedPokemonType]);
    
    return (
        <div>
            <Controls 
                pokeTypes={pokeTypes}
                typeSelection={selectedPokemonType}
                filterChange={setSelectedPokemonType} 
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

