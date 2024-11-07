import { useContext, useState } from 'react'
import { MainContext } from '../App'
import PlayerCountry from '../game/ui/country/player_country_preview_ui'

const PlayerUI = () => {
    const ctx = useContext(MainContext)
    const [playerMoneyInput, setPlayerMoneyInput] = useState(0)

    const [isAddMoneyYouWant, setIsAddMoneyYouWant] = useState(false)
    const [isMoneyInputVisible, setIsMoneyInputVisible] = useState(false)

    return (
        <div className="player__ui bdr pdg flex-box flex-dir--col gap">
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
                    apply damage ({5})
                </button>
            </div>
            <div className={'bdr pdg'}>
                <span>money: </span>
                <span>{ctx.application.player.getMoneyAmount()}</span>
                {isAddMoneyYouWant && (
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
                )}
                <div>
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
                        add money
                    </button>
                    <button
                        onClick={() =>
                            setIsAddMoneyYouWant((current) => !current)
                        }
                    >
                        {(isAddMoneyYouWant ? 'hide ' : 'open ').toUpperCase()}
                        input
                    </button>
                </div>
            </div>
            <div className={'bdr pdg'}>
                <div>grapes: </div>
                {ctx.application.player.getGrapes().map((grape, i) => (
                    <div>
                        <span>{i + 1 + '. ' + grape.getGrapeName()}</span>
                        <span>{' (' + grape.getOrigin().getTitle() + ')'}</span>
                    </div>
                ))}
            </div>
            <div className={'bdr pdg'}>
                <span>wine:</span>
                {ctx.application.player.getWine().map((wine) => {
                    return (
                        <div>
                            <span>{wine.getTitle()}</span>
                            <span>
                                <> </>
                                {'wine'}
                            </span>
                        </div>
                    )
                })}
            </div>
            <PlayerCountry
                player={ctx.application.player}
                transitions={ctx.application.getTransitions()}
            />
            <div className={'flex-box'}>
                {ctx.application.player.getVineyards().length ? (
                    <div className={'bdr'}>
                        <h2>Vineyards</h2>
                        <div className={'flex-box flex-dir--col gap'}>
                            {ctx.application.player.getVineyards().length}
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {ctx.application.player.getWineries().length > 0 && (
                    <div className={'bdr'}>
                        <h2>Wineries</h2>
                        {ctx.application.player.getWineries().length}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PlayerUI
