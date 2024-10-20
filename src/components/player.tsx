import { useContext, useState } from 'react'
import { MainContext } from '../App'
import PlayerCountry from './player_country'
import PlayerVineyardPreview from './player_vineyard_preview'
import PlayerGrapePreview from './player_grape_preview'

const Player = () => {
    const ctx = useContext(MainContext)
    const [playerMoneyInput, setPlayerMoneyInput] = useState(0)

    const [isAddMoneyYouWant, setIsAddMoneyYouWant] = useState(false)
    const [isMoneyInputVisible, setIsMoneyInputVisible] = useState(false)

    return (
        <div className="bdr pdg flex-box flex-dir--col gap">
            <h3>Player:{'  ' + ctx.application.player.getName()}</h3>
            <div className={'bdr pdg'}>
                <span>effir: </span>
                <span>{ctx.application.player.getEffirEnergyValue()}</span>
            </div>
            <div className={'bdr pdg'}>
                health:
                {ctx.application.player.getHealth()}
                <button
                    onClick={() => {
                        ctx.application.player.decrementHealth(5)
                        ctx.application.update()
                    }}
                >
                    get damage ({-5})
                </button>
            </div>
            <div className={'bdr pdg'}>
                <span>money: </span>
                <span>{ctx.application.player.getMoneyAmount()}</span>
                {isAddMoneyYouWant && (
                    <>
                        <input
                            onChange={(e) =>
                                setPlayerMoneyInput(
                                    Number.parseFloat(e.target.value)
                                )
                            }
                            step={100}
                            type="number"
                            value={playerMoneyInput}
                        />
                        <button
                            onClick={() => {
                                ctx.application.player.incrementMoneyAmountByValue(
                                    playerMoneyInput === 0
                                        ? 10000
                                        : playerMoneyInput
                                )
                                // setPlayerMoneyInput(0)
                                ctx.application.update()
                            }}
                        >
                            add
                        </button>
                    </>
                )}

                <button
                    onClick={() => setIsAddMoneyYouWant((current) => !current)}
                >
                    {(isAddMoneyYouWant ? 'hide' : 'input').toUpperCase()}
                </button>
            </div>
            <div className={'bdr pdg'}>
                <div>grapes: </div>
                {ctx.application.player.getGrapes().map((grape) => (
                    <div>
                        <span>{grape.getGrapeName()}</span>
                        <span>
                            {' (' + grape.getLocation().getTitle() + ')'} ,
                        </span>
                    </div>
                ))}
            </div>
            <div className={'bdr pdg'}>
                <span>wine:</span>
                {ctx.application.player.getWine().map((wine) => {
                    return (
                        <div>
                            <span>{wine.title}</span>
                            <span>
                                <> </>
                                {'wine'}
                            </span>
                        </div>
                    )
                })}
            </div>

            <PlayerCountry player={ctx.application.player} />
            <div className={'flex-box'}>
                {ctx.application.player.getVineyards().length ? (
                    <div className={'bdr'}>
                        <h2>Vineyards</h2>
                        <div className={'flex-box flex-dir--col gap'}>
                            {ctx.application.player
                                .getVineyards()
                                .map((vrd) => (
                                    <PlayerVineyardPreview vrd={vrd} />
                                ))}
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {ctx.application.player.getWineries().length > 0 && (
                    <div className={'bdr'}>
                        <h2>Wineries</h2>
                        {ctx.application.player
                            .getWineries()
                            .map((winery, i) => {
                                return (
                                    <div className="bdr--1">
                                        {i + 1 + '. winery' + ' '}
                                        <> </>
                                        {'location:' +
                                            ' ' +
                                            winery.getLocationName()}
                                        {ctx.application.wineFactories.map(
                                            (wineFactory, i) => {
                                                const canCreate =
                                                    wineFactory.canCreateWineForPlayer(
                                                        ctx.application.player,
                                                        winery
                                                    )

                                                return canCreate ? (
                                                    <button
                                                        onClick={() => {
                                                            wineFactory.tryCreateFor(
                                                                ctx.application
                                                                    .player,
                                                                winery
                                                            )
                                                            ctx.application.update()
                                                        }}
                                                        disabled={
                                                            !wineFactory.canCreateWineForPlayer(
                                                                ctx.application
                                                                    .player,
                                                                winery
                                                            )
                                                        }
                                                    >
                                                        make{' '}
                                                        {wineFactory.getWineName()}
                                                    </button>
                                                ) : (
                                                    <></>
                                                )
                                            }
                                        )}
                                    </div>
                                )
                            })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Player
