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
                    <div>{player.getCurrentLocation()?.getTitle()}</div>
                    <div>Country UI</div>
                    <button
                        onClick={() => {
                            ctx.modal.isOpen = false
                            ctx.application.update()
                        }}
                    >
                        close
                    </button>
                </div>
                {(() => {
                    const canCreateVineyard =
                        ctx.application.vineyardFactory.canCreateForPlayer(
                            ctx.application.player
                        )
                            ? true
                            : false

                    const canCreateWineries =
                        ctx.application.wineryFactories.map((wineryFactory) => (
                            <button
                                disabled={
                                    !wineryFactory.canCreate(
                                        ctx.application.player
                                    )
                                }
                                onClick={() => {
                                    wineryFactory.tryCreate(
                                        ctx.application.player
                                    )
                                    ctx.application.update()
                                }}
                            >
                                create winery
                            </button>
                        ))

                    return (
                        <div className={'flex-box bdr pdg'}>
                            {[...canCreateWineries]}
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
                        <h3>Wineries</h3>
                        {playerWineries
                            .filter((plrWnr) => {
                                return (
                                    plrWnr.getLocation() === ctx.modal.location
                                )
                            })
                            .map((playerWinery) => (
                                <Winery_UI_prerview
                                    playerWinery={playerWinery}
                                />
                            ))}
                    </div>
                    <div className={'bdr pdg'}>
                        <h3>Vineyard</h3>
                        <h4>Grapes: </h4>
                        <Grape_country_ui_preview
                            grapes={player
                                .getGrapes()
                                .filter(
                                    (grape) =>
                                        grape.getOrigin() ===
                                        player.getCurrentLocation()
                                )}
                        />
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
                                                    <div
                                                        className={
                                                            'flex-box gap'
                                                        }
                                                    >
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
