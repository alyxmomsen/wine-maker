import React from 'react'
import { PlayerPerson } from '../game/core/classes/Player.class'
import {
    ITransition,
    LocationTransition,
} from '../game/core/classes/Transition.class'

const PlayerCountry = ({ player }: { player: PlayerPerson }) => {
    const currentLocation = player.getCurrentLocation()
    const locationTransitions: ITransition[] = player
        .getTransitions()
        .filter((transition) => transition instanceof LocationTransition)

    return (
        <div className={'pdg bdr'}>
            <span>Location: </span>
            <span>
                {locationTransitions.length ? (
                    'in transition..'
                ) : currentLocation ? (
                    currentLocation.getTitle().toUpperCase()
                ) : (
                    <b>{'not set'}</b>
                )}
            </span>
        </div>
    )
}

export default PlayerCountry
