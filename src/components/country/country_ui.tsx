import React, { useContext } from 'react'
import { PlayerPerson } from '../../game/core/classes/Player.class'
import { MainContext } from '../../App'

const CountryUI = ({ player }: { player: PlayerPerson }) => {
    const ctx = useContext(MainContext)

    const playerWineries = player.getWineries()
    const playerVineyards = player.getVineyards()

    return (
        <div className="modal flex-box flex-dir--col pdg bdr">
            <h2>Country UI</h2>
            <div className="flex-box">
                <div className="bdr pdg">
                    {playerWineries
                        .filter(
                            (plrWnr) =>
                                plrWnr.getLocation() === ctx.modal.location
                        )
                        .map((playerWinery) => (
                            <div>winery</div>
                        ))}
                </div>
                <div className="bdr pdg">
                    {playerVineyards
                        .filter(
                            (plrVnrd) =>
                                plrVnrd.getLocation() === ctx.modal.location
                        )
                        .map((playerVineyard) => (
                            <div>wineyard</div>
                        ))}
                </div>
            </div>

            <button
                onClick={() => {
                    ctx.modal.isOpen = false
                    ctx.application.update()
                }}
            >
                == close ==
            </button>
            {(() => {
                const canCreateVineyard =
                    ctx.application.vineyardFactory.canCreateForPlayer(
                        ctx.application.player
                    )
                        ? true
                        : false

                const canCreateWinery = ctx.application.wineryFactories.map(
                    (wineryFactory) =>
                        wineryFactory.canCreate(ctx.application.player) ? (
                            <button
                                onClick={() => {
                                    wineryFactory.tryCreate(
                                        ctx.application.player
                                    )
                                    ctx.application.update()
                                }}
                            >
                                create winery
                            </button>
                        ) : (
                            <button disabled>you cant</button>
                        )
                )

                return (
                    <div>
                        <h2>
                            {ctx.application.player
                                .getCurrentLocation()
                                ?.getTitle()}
                        </h2>{' '}
                        {
                            <button
                                onClick={
                                    canCreateVineyard
                                        ? () => {
                                              ctx.application.vineyardFactory.createForPlayer(
                                                  ctx.application.player
                                              )
                                              ctx.application.update()
                                          }
                                        : () => {}
                                }
                                disabled={!canCreateVineyard}
                            >
                                create vrd
                            </button>
                        }
                        {[...canCreateWinery]}
                    </div>
                )
            })()}
        </div>
    )
}

export default CountryUI