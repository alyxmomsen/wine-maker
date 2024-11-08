import React, { useContext } from 'react'
import { PlayerPerson } from '../../core/classes/Player.class'
import { MainContext } from '../../../App'
import { IVineyard, Vineyard } from '../../core/classes/Vineyard.class'
import { randomName } from '../../../utils/utils'
import Winery_UI_prerview from '../Winery_UI_prerview'
import Grape_country_ui_preview from './grape_country_ui_preview'
import { Location } from '../../core/classes/Location.class'
import Vineyard_ui from '../Vineyard_ui'
import { Inventory } from '../../core/classes/Inventory-registry'

const CountryUI = ({
    player,
    vineyardsInventory,
}: {
    player: PlayerPerson
    vineyardsInventory: Inventory<number,IVineyard>
}) => {
    const ctx = useContext(MainContext)
    const playerWineries = player.getWineries()
    const playerVineyards = player.getVineyards()

    return (
        <div className="modal pdg-2 bdr">
            <div className="bg flex-box flex-dir--col gap pdg-2 bdr">
                <div className={'flex-box gap bdr pdg'}>
                    <div>Country UI</div>
                    <div className={'font-bold'}>
                        {player.getCurrentLocation()?.getTitle()}
                    </div>
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
                                build a winery
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
                                                      ctx.application.player,
                                                      ctx.application
                                                          .vineyardInventory
                                                  )
                                                  ctx.application.update()
                                              }
                                            : () => {}
                                    }
                                    disabled={!canCreateVineyard}
                                >
                                    build a vineyard
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
                    <div className="bdr pdg">
                        <h3>Vineyards:</h3>
                        {
                            // [...vineyardsInventory.getItems()].map(elem => <div></div>)
                        }
                        {[...vineyardsInventory
                            .getItems()]
                            .filter(
                                (vineyard) =>
                                    vineyard[1].getLocation() ===
                                    ctx.modal.location
                            )
                            .map((playerVineyard) => (
                                <div>
                                    <div>{playerVineyard[1].getName()}</div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                ctx.modal.component = () => (
                                                    <Vineyard_ui
                                                        person={player}
                                                        vineyard={
                                                            playerVineyard[1]
                                                            }
                                                    />
                                                )
                                                ctx.application.update()
                                            }}
                                        >
                                            click me
                                        </button>
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
