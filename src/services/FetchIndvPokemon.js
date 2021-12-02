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
    console.log("FETCHED 10 Pokemon....", fetched10List);
    return fetched10List;
}

