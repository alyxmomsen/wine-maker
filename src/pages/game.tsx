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
import { SoaveWine } from '../classes/Wine.concrete'

const GamePage = () => {
    const ctx = useContext(MainContext)
    const [countries, setCountries] = useState<Country[]>(
        ctx.application.countries
    )

    const [playerMoney, setPlayerMoney] = useState(
        ctx.application.player.getMoneyAmount()
    )
    const [playerMoneyInput, setPlayerMoneyInput] = useState(0)

    const [vineyards, setVineyard] = useState<Vineyard[]>(
        ctx.application.vineyards
    )

    const [grapes, setGrape] = useState<Grape[]>(ctx.application.grapes)
    const [player, setPlayer] = useState<Player>(ctx.application.player)

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
                            false
                            // checkIfMarkedCountry(marked, ctr)
                        }
                    >
                        <>
                            <button>{ctr.getTitle()}</button>
                            {ctr.getRegions().map((region) => (
                                <ElementWrapper isMarked={false}>
                                    <>
                                        {region
                                            .getAppellations()
                                            .map((appellation) => (
                                                <div></div>
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
                <h3>Player:</h3>
                <div>
                    <input
                        onChange={(e) =>
                            setPlayerMoneyInput(
                                Number.parseFloat(e.target.value)
                            )
                        }
                        type="number"
                        value={playerMoneyInput}
                    />
                    <button
                        onClick={() => {
                            ctx.application.player.setMoneyAmount(
                                playerMoneyInput
                            )
                            ctx.application.update();
                        }
                        }
                    >
                        increment money
                    </button>
                </div>
                {ctx.application.wineFactories.map((factory) => {
                    const canCreate = factory.canCreateVineFor(
                        player
                    )

                    return (
                        <button onClick={() => {
                            factory.createFor(player);
                            console.log({player});
                        }} disabled={!canCreate}>
                            {factory.getWineName()}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default GamePage
