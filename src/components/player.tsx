import { useContext, useState } from 'react'
import { MainContext } from '../App';

const Player = () => {
    
    const ctx = useContext(MainContext);
    const [playerMoneyInput , setPlayerMoneyInput] =  useState(0);

  return (
      <div>
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
                                    playerMoneyInput
                                )
                                // setPlayerMoneyInput(0)
                                ctx.application.update()
                            }}
                        >
                            add money
                        </button>
                    </li>
                    <li>
                        <span>current location: </span>
                        <span>{ctx.application.player.getCurrentLocation()?.getTitle()}</span>
                    </li>
                    <li>
                        <span>vineyards: </span>
                        <div className={'flex-box flex-wrap gap-9'}>
                            {ctx.application.player
                                .getVineyards()
                                .map((vrd) => (
                                    <div
                                        className="bdr--1 pdg--9"
                                        onMouseOver={() => {
                                            ctx.setPlayerFocusedCountry(vrd.getLocation())
                                        }}
                                        onMouseLeave={() => {
                                            ctx.setPlayerFocusedCountry(null)
                                        }}
                                    >
                                        <div>{vrd.getName()}</div>
                                        <div></div>
                                        <div className="flex-box flex-dir--col">
                                            {ctx.application.grapeFactories.map(
                                                (grpFactory) => {
                                                    const canCreate =
                                                        grpFactory.canCreateGrape(
                                                            ctx.application
                                                                .player,
                                                            vrd
                                                        )

                                                    return canCreate ? (
                                                        <button
                                                            onClick={() => {
                                                                grpFactory.create(
                                                                    ctx
                                                                        .application
                                                                        .player,
                                                                    vrd
                                                                ),
                                                                    ctx.application.update()
                                                            }}
                                                        >
                                                            make<> </>
                                                            {grpFactory.getTitle()}
                                                        </button>
                                                    ) : (
                                                        '0'
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </li>
                    <li>
                        <div>
                            wineries:
                            {ctx.application.player.getWineries().map((winery, i) => {
                                return (
                                    <div className="bdr--1">
                                        {'winery' + ' ' + (i + 1)}
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
                                                                ctx.application.player,
                                                                winery
                                                            )
                                                            ctx.application.update()
                                                        }}
                                                        disabled={
                                                            !wineFactory.canCreateWineForPlayer(
                                                                ctx.application.player,
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
                    </li>
                </ul>


    </div>
  )
}

export default Player