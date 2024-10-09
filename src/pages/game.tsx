import React, { useContext, useEffect, useState } from 'react'
import { MainContext, TMainContext } from '../App'

import './../styles/main.css'
import {
    Appellation,
    Country,
    Location,
    Region,
} from '../classes/Location.class'
import { Player } from '../classes/Player.class'
import { ElementWrapper } from '../components/wrappers/elementWrapper'
import { Grape } from '../classes/Grape.class'
import { Vineyard } from '../classes/Vineyard.class'
import { VineyardFactory } from '../classes/WineyardFactory'

const GamePage = () => {
    const ctx = useContext(MainContext)
    const [countries, setCountries] = useState<Country[]>(
        ctx.application.countries
    )
    const [playerMoneyInput, setPlayerMoneyInput] = useState(0)
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
                                    <button
                                        onMouseOver={() => {
                                            setFocusedCountry(vrd.getLocation())
                                        }}
                                        onMouseLeave={() => {
                                            setFocusedCountry(null)
                                        }}
                                    >
                                        {vrd.getName()}
                                    </button>
                                ))}
                        </div>
                    </li>
                    <li>
                        <span></span>
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
                {ctx.application.wineFactories.map((factory) => {
                    const canCreate = factory.canCreateVineForPlayer(player)

                    return (
                        <button
                            onClick={() => {
                                factory.createFor(player)
                                ctx.application.update()
                                console.log({ player })
                            }}
                            disabled={!canCreate}
                        >
                            {factory.getWineName()}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default GamePage
