export default function PokemonDetails({ pokemon }) {
    return (
        <figure aria-label='indvidualPokemon'>
            <div style={{
                height: 150,
                width: 150,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <img src={pokemon.url_image} alt="pokemon"></img>
                <h1>Name: {pokemon.pokemon}</h1>
                <h2>HP: {pokemon.hp}</h2>
                <h3>Attack: {pokemon.attack}</h3>
                <h3>Defense: {pokemon.defense}</h3>
                <h3>Defense: {pokemon.defense}</h3>
            </div>
        </figure>
    )
}