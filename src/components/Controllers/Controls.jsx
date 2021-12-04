import React from 'react'

export default function Controls({ pokeTypes, typeSelection, filterChange }) {
    return (
        <>
        <section>
            <div style={{border: 'solid black 1px'}}>
                <h4>Select Type: </h4>

                <select value={typeSelection} onChange={(e) => filterChange(e.target.value)}>
                    <option key='all' value='all'>All</option>
                    {pokeTypes.map(({type}) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div>

            </div>
        </section>
        </>
    )
}
