import React from 'react'

function Park(props) {

    const park = props.parks.find(p => p.parkCode === props.match.params.id)

    return <h1>{park.fullName}</h1>
}

export default Park