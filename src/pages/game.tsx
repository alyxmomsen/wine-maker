import React, { useContext, useEffect, useState } from 'react'
import { MainContext, TMainContext } from '../App'

import './../styles/main.css'
import { ItaliaCountry } from '../classes/Location.Country.concrete'
import {
    Appellation,
    Country,
    Location,
    Region,
} from '../classes/Location.class'
import { Player } from '../classes/Player.class'
import { ElementWrapper } from '../components/wrappers/elementWrapper'

const GamePage = () => {
    const ctx = useContext(MainContext)
    const [countries, setCountries] = useState<Country[]>(
        ctx.application.countries
    )
    const [regions, setRegions] = useState<Region[]>(ctx.application.regions)
    const [appellations, setAppellations] = useState<Appellation[]>(
        ctx.application.appellations
    )
    const [player, setPlayer] = useState<Player>(ctx.application.player)
    const [marked, setMarked] = useState<Location | null>(null)

    useEffect(() => {
        if (marked) {
            const country = marked.getCountry()
            const title = country.getTitle()
        } else {
        }
    }, [marked])

    return (
        <div>
            <div>
                <span>countries: </span>
                {countries.map((ctr) => (
                    <ElementWrapper
                        isMarked={checkIfMarkedCountry(marked , ctr)}
                    >
                        <button>{ctr.getTitle()}</button>
                    </ElementWrapper>
                ))}
            </div>
            <div>
                <span>regions: </span>
                {regions.map((region) => (
                    <ElementWrapper isMarked={checkIfMarkedRegion(marked , region)}>
                        <button
                        onMouseOver={() => setMarked(region)}
                        onMouseLeave={() => setMarked(null)}
                    >
                        {region.getTitle()}
                    </button>
                    </ElementWrapper>
                ))}
            </div>
            <div>
                <span>appellations: </span>
                {appellations.map((appellation) => (
                    <button
                        onMouseOver={() => setMarked(appellation)}
                        onMouseLeave={() => setMarked(null)}
                    >
                        {appellation.getAppellationName()}
                    </button>
                ))}
            </div>
            <div>
                <button
                    onClick={() =>
                        console.log(
                            'i love Italia becose there have a much of sundays'
                        )
                    }
                >
                    make try make italia the country
                </button>
            </div>
            <div>
                <span>the factories: </span>
            </div>
            <div>
                <span>the factories: </span>
            </div>
            <div>
                <span>the factories: </span>
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

function checkIfMarkedCountry (isMarked: Location | null , current:Location) {
    const markedCountry = isMarked?.getCountry()
    const currentCountry = current.getCountry()
    const isEqual = markedCountry === currentCountry

    if (isEqual) {

        console.log(markedCountry
            // .getRegion()
            .getAppellation()
            , currentCountry
            // .getRegion()
        );
    }

    return isEqual
}

function checkIfMarkedRegion (isMarked: Location | null , current:Location) {
    const markedRegion = isMarked?.getRegion()
    const currentRegion = current.getRegion()
    const isEqual = markedRegion === currentRegion

    if (isEqual) {

        // console.log(markedRegion
        //     // .getRegion()
        //     .getAppellation()
        //     , currentCountry
        //     // .getRegion()
        // );
    }

    return isEqual
}
