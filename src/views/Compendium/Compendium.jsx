import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPoke, fetchAllPokemonTypes, fetchSelectedTypes, fetchSortedPokemon } from '../../services/FetchPokemon';
import PokeList from '../../components/PokemonList/PokeList';
import pokeball from '../../assets/pokeball.png';
import Controls from '../../components/Controllers/Controls';

export default function Compendium() {
    // Set states needed for project.
    
    const [pokeDetails, setPokeDetails] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [pokeTypes, setPokeTypes] = useState([]); // fetch and store types
    const [selectedPokemonType, setSelectedPokemonType] = useState('all'); // load at ALL intially
    const [sort, setSort] = useState('asc');

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

    useEffect(() => {
        async function getAllPokeTypes() {
            const pokemonTypes = await fetchAllPokemonTypes();
            setPokeTypes(pokemonTypes)
        }
        getAllPokeTypes()
    }, []);

    useEffect(() => {
        async function runFilterOnPokemon() {
            if(!selectedPokemonType) return;
            setLoadingState(true)

            if(selectedPokemonType !== 'all') {
                const pokemonFiltered = await fetchSelectedTypes(selectedPokemonType);
                setPokeDetails(pokemonFiltered)
                
            } else {
                const pokemonTypesList = await fetchPoke();
                setPokeDetails(pokemonTypesList);
            }
            setTimeout(() => {
                setLoadingState(false);
            }, 500)
        }
        runFilterOnPokemon();
    }, [selectedPokemonType]);
    
    useEffect(() => {
        async function sortPokemon() {
            if (!sort) return;
                setLoadingState(true);

            if(sort === 'desc') {
                const fetchedSort = await fetchSortedPokemon(sort);
                setPokeDetails(fetchedSort);
            } else {
                const pokemonList = await fetchPoke();
                setPokeDetails(pokemonList);
            }
            setTimeout(() => {
                setLoadingState(false);
            }, 500)
            setSort(sort);
        }
        sortPokemon();
    }, [sort]);

    return (
        <div>
            <Controls 
                pokeTypes={pokeTypes}
                typeSelection={selectedPokemonType}
                filterChange={setSelectedPokemonType}
                sort={sort} 
                setSortChange={setSort}
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

