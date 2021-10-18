 import React from 'react'

function Completed({title, filteredTask}) {
    return (
        <div>
            <h1>Completed Tasks</h1>
            {filteredTask.map(e => {
                return <h2>{e.title}</h2>
            })}
        </div>
    )
}

export default Completed
