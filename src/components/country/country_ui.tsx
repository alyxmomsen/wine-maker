import React, { useContext } from 'react'
import { PlayerPerson } from '../../game/core/classes/Player.class'
import { MainContext } from '../../App'
import { Vineyard } from '../../game/core/classes/Vineyard.class'
import { randomName } from '../../utils/utils'

const CountryUI = ({ player }: { player: PlayerPerson }) => {
    const ctx = useContext(MainContext)

    const playerWineries = player.getWineries()
    const playerVineyards = player.getVineyards()

    return (
        <div className="modal flex-box flex-dir--col pdg bdr">
            <button
                onClick={() => {
                    ctx.modal.isOpen = false
                    ctx.application.update()
                }}
            >
                close
            </button>
            <h2>Country UI</h2>
            <h3>{player.getCurrentLocation()?.getTitle()}</h3>
            <div className="flex-box">
                <div className="bdr pdg">
                    {playerWineries
                        .filter(
                            (plrWnr) =>
                                plrWnr.getLocation() === ctx.modal.location
                        )
                        .map((playerWinery) => (
                            <div className="flex-box gap flex-dir--col">
                                <div>
                                    <div>winery name</div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={'flex-box gap flex-wrap'}>
                                    {ctx.application.wineFactories.map(
                                        (factory) => {
                                            const canCreate =
                                                factory.canCreateWineForPlayer(
                                                    ctx.application.player,
                                                    playerWinery
                                                )

                                            return (
                                                <button
                                                    disabled={!canCreate}
                                                    onClick={() => {}}
                                                >
                                                    {factory.getWineName()}
                                                </button>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
                <div className="bdr pdg">
                    {playerVineyards
                        .filter(
                            (plrVnrd) =>
                                plrVnrd.getLocation() === ctx.modal.location
                        )
                        .map((playerVineyard) => (
                            <div>
                                <div>{playerVineyard.getName()}</div>
                                <div>
                                    {ctx.application.grapeFactories.map(
                                        (grapeFactory) => {
                                            return (
                                                <div className={'flex-box'}>
                                                    <div>
                                                        {grapeFactory.getTitle()}
                                                    </div>
                                                    <div>
                                                        <button
                                                            disabled={
                                                                !grapeFactory.canCreateGrape(
                                                                    ctx
                                                                        .application
                                                                        .player,
                                                                    playerVineyard
                                                                )
                                                            }
                                                            onClick={() => {
                                                                grapeFactory.create(
                                                                    ctx
                                                                        .application
                                                                        .player,
                                                                    playerVineyard
                                                                )
                                                                ctx.application.update()
                                                            }}
                                                            className={
                                                                'inline-block'
                                                            }
                                                        >
                                                            plant
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

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
