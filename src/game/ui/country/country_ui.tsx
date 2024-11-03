import React, { useContext } from 'react'
import { PlayerPerson } from '../../core/classes/Player.class'
import { MainContext } from '../../../App'
import { Vineyard } from '../../core/classes/Vineyard.class'
import { randomName } from '../../../utils/utils'
import Winery_UI_prerview from '../Winery_UI_prerview'
import Grape_country_ui_preview from './grape_country_ui_preview'
import { Location } from '../../core/classes/Location.class'

const CountryUI = ({ player }: { player: PlayerPerson }) => {
    const ctx = useContext(MainContext)
    const playerWineries = player.getWineries()
    const playerVineyards = player.getVineyards()

    return (
        <div className="modal pdg-2 bdr">
            <div className="bg flex-box flex-dir--col gap pdg-2 bdr">
                <div className={'flex-box gap bdr pdg'}>
                    <button
                        onClick={() => {
                            ctx.modal.isOpen = false
                            ctx.application.update()
                        }}
                    >
                        close
                    </button>
                    <div>Country UI</div>
                    <div>{player.getCurrentLocation()?.getTitle()}</div>
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
                        <div className={'flex-box bdr'}>
                            {[...canCreateWinery]}
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
                            
                        </div>
                    )
                })()}
                <div className="flex-box bdr pdg">
                    <div className="bdr pdg flex-box flex-dir--col gap">
                        <h3>wineries</h3>
                        {playerWineries
                            .filter(
                                (plrWnr) => {
                                    return ((plrWnr.getLocation() === ctx.modal.location))
                                }
                            )
                            .map((playerWinery) => (
                                <Winery_UI_prerview
                                    playerWinery={playerWinery}
                                />
                            ))}
                    </div>
                    <div className={'bdr pdg'}>
                        <h3>grapes: </h3>
                        <Grape_country_ui_preview grapes={player.getGrapes().filter(grape => grape.getOrigin() === player.getCurrentLocation())} />
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
                
            </div>
        </div>
    )
}

export default CountryUI