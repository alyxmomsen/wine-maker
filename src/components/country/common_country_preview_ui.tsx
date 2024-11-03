import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../App'
import { Location } from '../../game/core/classes/Location.class'
import { LocationTransition } from '../../game/core/classes/Transition.class'
import { PlayerPerson } from '../../game/core/classes/Player.class'

const CommonCountryPeviewUI = ({
    country,
    player,
}: {
    country: Location
    player: PlayerPerson
}) => {
    const ctx = useContext(MainContext)

    const currentUserLocation = ctx.application.player.getCurrentLocation()

    useEffect(() => {
        console.log('country', ctx.modal)
    })

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
                onClick={
                    country === currentUserLocation
                        ? () => {
                              ctx.modal.location = country
                              ctx.modal.isOpen = true
                              ctx.application.update()
                          }
                        : () => {
                              ctx.application.addTransition(
                                  LocationTransition.Instance(
                                      ctx.application.player,
                                      country,
                                      ctx.application.getTransitions(),
                                      1000
                                  )
                              )

                              ctx.application.update()
                          }
                }
            >
                {country === currentUserLocation ? 'Open' : 'Go Here'}
            </button>
        </div>
    )
}

export default CommonCountryPeviewUI
