import React, { useContext, useState } from 'react'
import { MainContext, TMainContext } from '../App'

import './../styles/main.css'

const GamePage = () => {
    const ctx = useContext(MainContext)
    
    return (
        <div className="wrapper flex-box flex-dir--row">
            <div className="wrapper flex-box flex-dir--col gap-9">
                user:
                
            </div>
            <div className="wrapper flex-box flex-dir--col gap-9">
                grapes:{' '}
                
            </div>
            <div className="wrapper flex-box flex-dir--col gap-9">
                countries:
                
            </div>
            <div className="wrapper flex-box flex-dir--col gap-9 ">
                regions:
                
            </div>
            <div className="wrapper flex-box flex-dir--col gap-9">
                appellations:
                
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
