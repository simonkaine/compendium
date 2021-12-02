import PokemonDetails from "../PokemonDetails/PokemonDetails"

// Need to map thru pokemon & call on Individual pokemon in list element
export default function PokeList({ pokeList }) {
    return (
        <>
        <section>

        <ul aria-label='pokeList' style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
            {pokeList.map((indvPoke) => {
                return (
                    <li key={indvPoke.id}>
                        <PokemonDetails pokemon={indvPoke}/> 
                    </li>
                )
            })}
        </ul>

        </section>
        </>
    )
}