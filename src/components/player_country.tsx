import React from 'react'
import { PlayerPerson } from '../game/core/classes/Player.class'

const PlayerCountry = ({ player }: { player: PlayerPerson }) => {
    const currentLocation = player.getCurrentLocation()

    return (
        <div>
            <h2>Location:</h2>
            <p>{currentLocation ? currentLocation.getTitle() : 'undefined'}</p>
        </div>
    )
}

export default PlayerCountry
