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
    // const [regions, setRegions] = useState<Region[]>(ctx.application.countries regions)
    // const [appellations, setAppellations] = useState<Appellation[]>(
    //     ctx.application.appellations
    // )

    const [vineyards, setVineyard] = useState<Vineyard[]>(
        ctx.application.vineyards
    )

    const [grapes, setGrape] = useState<Grape[]>(ctx.application.grapes)
    const [player, setPlayer] = useState<Player>(ctx.application.player)
    const [marked, setMarked] = useState<Location | null>(null)

    useEffect(() => {
        if (marked) {
            // const country = marked.getCountry()
            // const title = country.getTitle()
        } else {
        }
    }, [marked])

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
                {
                    ctx.application.wineFactories.map(factory => {
                        return <button>btn</button>
                    })
                }
            </div>
        </div>
    )
}

export default GamePage

function upd(ctx: TMainContext) {
    const dispatcher = ctx.dispatcher
    const application = ctx.application

    if (dispatcher && application) {
        application.update()
        dispatcher((current) => current + 1)
    }
}

function actionWrapper(ctx: TMainContext, fn: () => void) {
    console.log(ctx)
    fn()
    ctx.application.update()
    const dispatcher = ctx.dispatcher
    if (dispatcher) {
        dispatcher((current) => current + 1)
    }
}

function checkIfMarkedCountry(isMarked: Location | null, current: Location) {
    // const markedCountry = isMarked?.getCountry()
    // const currentCountry = current.getCountry()
    // const isEqual = markedCountry === currentCountry
    // return isEqual
}

function checkIfMarkedRegion(isMarked: Location | null, current: Location) {
    // const markedRegion = isMarked?.getRegion()
    // const currentRegion = current.getRegion()
    // const isEqual = markedRegion === currentRegion
    // return isEqual
}
