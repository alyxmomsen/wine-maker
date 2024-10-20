import React, { useContext } from 'react'
import { MainContext } from '../App'
import { Location } from '../game/core/classes/Location.class'
import { LocationTransition } from '../game/core/classes/Transition.class'

const CommonCountryUI = ({ country }: { country: Location }) => {
    const ctx = useContext(MainContext)

    const currentUserLocation = ctx.application.player.getCurrentLocation()

    console.log(
        'current',
        currentUserLocation,
        country,
        currentUserLocation === country
    )

    return (
        <div
            className={
                'bdr pdg' +
                (currentUserLocation === country ? ' mrk-bkg-1' : '')
            }
        >
            <h2>{country.getTitle()}</h2>
            <button
                onClick={() => {
                    ctx.application.setTransition(new LocationTransition(ctx.application.player , country , 5000));
                    // ctx.application.player.setCurrentLocation(country)
                    ctx.application.update()
                }}
            >
                Go Here
            </button>
        </div>
    )
}

export default CommonCountryUI
