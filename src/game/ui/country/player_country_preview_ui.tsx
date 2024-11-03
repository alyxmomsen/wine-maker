import React from 'react'
import { PlayerPerson } from '../../core/classes/Player.class'
import {
    ITransition,
    LocationTransition,
} from '../../core/classes/Transition.class'

const PlayerCountry = ({
    player,
    transitions,
}: {
    player: PlayerPerson
    transitions: ITransition[]
}) => {
    const currentLocation = player.getCurrentLocation()
    const locationTransitions: ITransition[] = transitions.filter(
        (transition) => {
            return (
                transition instanceof LocationTransition &&
                transition.getSubj() === player
            )
        }
    )

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
