import React from 'react'

export default function Controls({ pokeTypes, typeSelection, filterChange, sort, setSortChange }) {
    return (
        <>
        <section style={{border: 'solid black 1px'}}>
            <div >
                <h4>Select Type: </h4>

                <select value={typeSelection} onChange={(e) => filterChange(e.target.value)}>
                    <option key='all' value='all'>All</option>
                    {pokeTypes.map(({type}) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div>
            <h4>Select direction </h4>
                <select value={sort} onChange={(e) => setSortChange(e.target.value)}>
                    <option value='desc' key='desc'>Desc</option>
                    <option value='asc' key='asc'>Asc</option>
                </select>
            </div>
        </section>
        </>
    )
}
