import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


function Home() {

    const [parkList, setParkList] = useState(false)

    useEffect(() => {
        const makeApiCall = async () => {
            const url = "https://developer.nps.gov/api/v1/parks?stateCode=md&api_key=3LPGi8GvCt8dedPIgTjFNBivWxKmCETdxgEq3aBh"
            const res = await fetch(url)
            const json = await res.json()
            setParkList(json.data)
        }
        makeApiCall()
    }, [])

    if (!parkList) {
        return <></>
    }

    const parkIcons = parkList.map((park, i) => {
        return (
            <Link key={i} to={`/park/${park.parkCode}`}>
                <div className="park-preview">
                    <img className="park-img" alt={park.fullName}
                        src={park.images[0] ? park.images[0].url : "https://i.pinimg.com/originals/90/5b/d0/905bd03c111f41c8f656e04f71b42ad8.png"}/>
                    <p className="img-text">{park.fullName}</p>
                </div>
            </Link>
        );
    });
    return <div className="all-parks">{parkIcons}</div>;
}

export default Home