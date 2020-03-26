import React, {useEffect, useState} from 'react'

function Park(props) {
    const park = props.parks.find(p => p.parkCode === props.match.params.id)

    //const [park, setPark] = useState({})
    
    useEffect(() => {
        const makeApiCall = async () => {
            const url = `https://developer.nps.gov/api/v1/parks?parkCode=${props.match.params.id}&api_key=3LPGi8GvCt8dedPIgTjFNBivWxKmCETdxgEq3aBh`
            const res = await fetch(url);
            const json = await res.json();
            console.log('fetched park info:', json.data[0]);
            //setPark(json.data[0])
        };
        makeApiCall();
    }, []);
    
    const address = park.addresses[0]

    return (
        <>
        <div className="large-img-div">
            <h1 className="img-text">{park.fullName}</h1>
            <img className="large-img" src={park.images[0].url} alt={park.images[0].altText}></img>
        </div>
        <p className="description">{park.description}</p>
        <div className="address">
            <h2>Address</h2>
            <p>{address.line1}<br/>
                {`${address.city}, ${address.stateCode} ${address.postalCode}`}<br/>
            </p>
            <h2>Directions</h2>
            <p>{park.directionsInfo}</p>
            <a href={park.directionsUrl}>Get Directions</a>
        </div>
        </>
    )
}

export default Park

/*  "postalCode": "20002",
    "city": "Washington",
    "stateCode": "DC",
    "line1": "144 Constitution Ave NE",
    "type": "Physical",
    "line3": "",
    "line2": "900 Ohio Drive SW" */