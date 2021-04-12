import React from 'react'
import './factnumber.scss'

function FactNumbers({num,fact}) {
    return (
        <div className="py-4 px-5 w-25">
            <h2>{num}</h2>
            <h5>{fact}</h5>
        </div>
    )
}

export default FactNumbers
