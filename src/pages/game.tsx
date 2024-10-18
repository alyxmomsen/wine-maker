import React, { useContext, useEffect, useState } from 'react'
import { MainContext, TMainContext } from '../App'

import './../styles/main.css'
import {
    Country,
    Location,
} from '../game/core/classes/Location.class'
import { Player } from '../game/core/classes/Player.class'
import { ElementWrapper } from '../components/wrappers/elementWrapper'
import { Grape } from '../game/core/classes/Grape.class'
import { Vineyard } from '../game/core/classes/Vineyard.class'

const GamePage = () => {
    const ctx = useContext(MainContext)
    const [countries, setCountries] = useState<Country[]>(
        ctx.application.countries
    )
    const moneyInputDefaultValue = 1000
    const [playerMoneyInput, setPlayerMoneyInput] = useState(
        moneyInputDefaultValue
    )
    const [vineyards, setVineyard] = useState<Vineyard[]>(
        ctx.application.vineyards
    )
    const [grapes, setGrape] = useState<Grape[]>(ctx.application.grapes)
    const [player, setPlayer] = useState<Player>(ctx.application.player)

    const [focusedCountry, setFocusedCountry] = useState<Location | null>(null)

    return (
        <div className={'flex-box flex-dir--col flex__align--start'}>
            <div>
                <button onClick={() => ctx.application.update()}>
                    udpdate
                </button>
                <span>countries: </span>
                {countries.map((ctr) => (
                    <ElementWrapper
                        isMarked={
                            ((location: Location | null) => {
                                if (location?.getTitle() === ctr.getTitle()) {
                                    return true
                                }
                                return false
                            })(focusedCountry)
                            // checkIfMarkedCountry(marked, ctr)
                        }
                    >
                        <>
                            <button
                                onClick={() => {
                                    ctx.application.player.setCurrentLocation(
                                        ctr
                                    )
                                    ctx.application.update()
                                }}
                            >
                                Go<> </>
                                {ctr.getTitle()}
                            </button>
                            {ctr.getRegions().map((region) => (
                                <ElementWrapper isMarked={false}>
                                    <>
                                        {region
                                            .getAppellations()
                                            .map((appellation) => (
                                                <div>appelllation</div>
                                            ))}
                                    </>
                                </ElementWrapper>
                            ))}
                        </>
                    </ElementWrapper>
                ))}
            </div>
            <div>
                <span>grape: </span>
                {grapes.map((grape) => (
                    <button
                    // onMouseOver={() => setMarked(grape)}
                    // onMouseLeave={() => setMarked(null)}
                    >
                        {grape.getGrapeName()}
                    </button>
                ))}
            </div>
            <div>
                <span>vineyard: </span>
                {vineyards.map((vineyard) => (
                    <button
                    // onMouseOver={() => setMarked(grape)}
                    // onMouseLeave={() => setMarked(null)}
                    >
                        {vineyard.getName()}
                    </button>
                ))}
            </div>
            <div>
                <h3>Player:{'name'}</h3>
                <ul>
                    <li>
                        effir:
                        {player.getEffirEnergyValue()}
                    </li>
                    <li>
                        health:
                        {player.getHealth()}
                        <button
                            onClick={() => {
                                player.decrementHealth(5)
                                ctx.application.update()
                            }}
                        >
                            get damage
                        </button>
                    </li>
                    <li>
                        <span>grapes: </span>
                        {player.getGrapes().map((grape) => (
                            <span>
                                {grape.getGrapeName()} (
                                {grape.getLocation().getTitle()}) ,
                            </span>
                        ))}
                    </li>
                    <li>
                        <span>wine:</span>
                        {
                            player.getWine().map(wine => {
                                return <div><span>{'wine'}</span><span>{'wine'}</span></div>
                            })
                        }
                    </li>
                    <li>
                        <span>money: </span>
                        <span>{player.getMoneyAmount()}</span>
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
                        <span>{player.getCurrentLocation()?.getTitle()}</span>
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
                                            setFocusedCountry(vrd.getLocation())
                                        }}
                                        onMouseLeave={() => {
                                            setFocusedCountry(null)
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
                            {player.getWineries().map((winery, i) => {
                                return (
                                    <div className="bdr--1">
                                        {'winery' + ' ' + (i + 1)}
                                        <> </>
                                        {'location:' +
                                            ' ' +
                                            winery.getLocationName()}
                                        {ctx.application.wineFactories.map(
                                            (wineFactory, i) => {
                                                return (
                                                    <button
                                                        onClick={() => {
                                                            wineFactory.tryCreateFor(
                                                                player,
                                                                winery
                                                            )
                                                            ctx.application.update()
                                                        }}
                                                        disabled={
                                                            !wineFactory.canCreateWineForPlayer(
                                                                player,
                                                                winery
                                                            )
                                                        }
                                                    >
                                                        make{' '}
                                                        {wineFactory.getWineName()}
                                                    </button>
                                                )
                                            }
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </li>
                </ul>
                <div>
                    <button
                        disabled={
                            !ctx.application.vineyardFactory.canCreateForPlayer(
                                ctx.application.player
                            )
                        }
                        onClick={() => {
                            ctx.application.vineyardFactory.createForPlayer(
                                ctx.application.player
                            )
                            console.log(player)
                            ctx.application.update()
                        }}
                    >
                        create vineyard
                    </button>
                </div>
                <div>
                    {ctx.application.wineryFactories.map((wineryFactory) => {
                        return (
                            <button
                                disabled={!wineryFactory.canCreate(player)}
                                onClick={() => {
                                    wineryFactory.tryCreate(player)
                                    ctx.application.update()
                                }}
                            >
                                create winery
                            </button>
                        )
                    })}
                    {/* <button disabled={ctx.application.wineryFactories}>create winery</button> */}
                </div>
            </div>
        </div>
    )
}

export default GamePage
