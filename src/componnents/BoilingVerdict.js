import React from 'react'

function BoilingVerdict(props) {

    if(props.celsius >= 100)
        return <div>The water will boil</div>

    return (
        <div>
            The water would not boil
        </div>
    )
}

export default BoilingVerdict
