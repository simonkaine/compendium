// only render these 10 on load so all 801 pokemon do not flood site
const tenPokemon = [
    'metapod',
    'squirtle',
    'duosion',
    'pikachu',
    'umbreon',
    'stunfisk',
    'blastoise',
    'simisear',
    'rhydon',
    'cinccino',
  ];

// fetch a list of 10-20 pokemon
export const fetchPoke = async () => {
    const fetched10List = await Promise.all(
        tenPokemon.map( async (pokemon) => {
            const fetchedPoke = await fetch(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${pokemon}`);
            const jsonified = await fetchedPoke.json();
            return jsonified.results[0];
        })
    );
    return fetched10List; // console logged
}

export const fetchAllPokemonTypes = async () => {
    const types = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
    const jsonTypes = await types.json()
    return jsonTypes; // console logged
}

export const fetchSelectedTypes = async (type) => {
    const typesResponse = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`);
    const jsonFilteredTypeData = await typesResponse.json();
    console.log("FILTERED TYPES", jsonFilteredTypeData.results)
    // const filteredPokemon = jsonFilteredTypeData.results.map((pokemon) => pokemon);
    // return filteredPokemon;
    return jsonFilteredTypeData.results;
}   

