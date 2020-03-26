import React from 'react'
import { Link } from "react-router-dom"
import parksData from '../parks.json'

function Home() {

    const parkList = [...parksData].map((park, i) => {
        return (
            <Link key={i} to={`/park/${park.parkCode}`}>
                <div className="park-preview">
                    <img className="park-img" src={park.images[0].url} alt={park.fullName}/>
                    <p className="img-text">{park.fullName}</p>
                </div>
            </Link>
        );
    });
    return <div className="all-parks">{parkList}</div>;
}

export default Home