import React, { useContext, useState } from 'react'
import { MainContext, TMainContext } from '../App'

import './../styles/main.css'

const GamePage = () => {
    const ctx = useContext(MainContext)

    const player = ctx.application.getPlayer()
    const grapes = ctx.application.getGrapes()
    const countries = ctx.application.getCountries()
    const regions = ctx.application.getRegions()
    const appellations = ctx.application.getAppellations()

    return (
        <div className="wrapper flex-box flex-dir--row">
            <div className="wrapper flex-box flex-dir--col gap-9">
                user:
                {player.getMoney()} $
                {player.getGrapeBearers().map((mediator) => (
                    <div>
                        <li className="wrapper">{mediator.getGrapeName()}</li>
                        <button>hello</button>
                    </div>
                ))}
            </div>
            <div className="wrapper flex-box flex-dir--col gap-9">
                grapes:{' '}
                {grapes.map((grape) => (
                    <div>
                        <li className="wrapper">{grape.getName()}</li>
                        <button
                            className="btn"
                            onClick={() =>
                                actionWrapper(ctx, () =>
                                    player.addGrapeMediator(grape)
                                )
                            }
                        >
                            add owner
                        </button>
                    </div>
                ))}
            </div>
            <div className="wrapper flex-box flex-dir--col gap-9">
                countries:
                {countries.map((country) => (
                    <li className="wrapper">{country.getName()}</li>
                ))}
            </div>
            <div className="wrapper flex-box flex-dir--col gap-9 ">
                regions:
                {regions.map((region) => (
                    <li className="wrapper">{region.getName()}</li>
                ))}
            </div>
            <div className="wrapper flex-box flex-dir--col gap-9">
                appellations:
                {appellations.map((appellation) => (
                    <li className="wrapper">{appellation.getName()}</li>
                ))}
            </div>
            <button className="" onClick={() => upd(ctx)}>
                update and refresh
            </button>
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
