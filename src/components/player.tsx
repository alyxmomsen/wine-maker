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
        <div className="bdr pdg">
            <h3>Player:{'name'}</h3>
            <ul>
                <li>
                    effir:
                    {ctx.application.player.getEffirEnergyValue()}
                </li>
                <li>
                    health:
                    {ctx.application.player.getHealth()}
                    <button
                        onClick={() => {
                            ctx.application.player.decrementHealth(5)
                            ctx.application.update()
                        }}
                    >
                        get damage
                    </button>
                </li>

                <li>
                    <span>grapes: </span>
                    {ctx.application.player.getGrapes().map((grape) => (
                        <span>
                            {grape.getGrapeName()} (
                            {grape.getLocation().getTitle()}) ,
                        </span>
                    ))}
                </li>
                <li>
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
                </li>
                <li>
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
                        onClick={() =>
                            setIsAddMoneyYouWant((current) => !current)
                        }
                    >
                        {(isAddMoneyYouWant ? 'hide' : 'input').toUpperCase()}
                    </button>
                </li>
                <PlayerCountry player={ctx.application.player} />
                {ctx.application.player.getVineyards().length ? (
                    <div className={'bdr'}>
                        <h2>Vineyards</h2>
                        <div className={'flex-box flex-wrap gap-9'}>
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
            </ul>
        </div>
    )
}

export default Player
