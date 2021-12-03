import React from 'react'

export default function Controls({ pokeTypes }) {

    console.log('POKEMON TYPES',pokeTypes);

    return (
        <div style={{border: 'solid black 1px'}}>
            <h4>Select Type: </h4>
            <select>
                {pokeTypes.map(({type}) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    )
}
