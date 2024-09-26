import React, { useContext, useState } from 'react'
import { MainContext } from '../App'

const GamePage = () => {

    const ctx = useContext(MainContext);

    ctx.dispatcher;

    const [countries , setCountries] = useState(ctx.application.getRegions());
    const [regions , setRegions] = useState(ctx.application.getRegions());
    const [appellations, setAppellations] = useState(ctx.application.getRegions());
    const [player , setPlayer] = useState(ctx.application.getPlayer());

    return (
        <div>
            <h2>globals:</h2>
            <h3>countries:</h3>
            {
            countries.map((country , i) => <li key={i}>{country.getName()}</li>)
            }
            <h3>regions:</h3>
            {
                regions.map((region,  i) => <li key={i}>{region.getName()}</li>)
            }
            <h3>appellations:</h3>
            {
                appellations.map((appellation , i) => <li key={i}>{appellation.getName()}</li>)
            }
            <h2>player:</h2>
            {
                player.getGrapes().map(grape => <li><span>{grape.name}</span><span>{/* grape.location.getName() */}</span></li>)
            }
            <button onClick={() => null}>start</button>
            <button onClick={() => null}>stop</button>
        </div>
    )
}

export default GamePage
