import React, { useContext, useState } from 'react'
import { MainContext, TMainContext } from '../App'

const GamePage = () => {

    const ctx = useContext(MainContext);

    const player = ctx.application.getPlayer();

    return (
        <div>
            
            <div>
                user:
                {
                    player.getMoney()
                } $
                {
                    player.getGrapes().map(grape => <li>{grape.getName()}</li>)
                }
            </div>
            <div>grapes: </div>
            <div>countries: </div>
            <div>regions: </div>
            <div>appellations: </div>
            <button onClick={() => upd(ctx)}>update and refresh</button>
        </div>
    )
}

export default GamePage


function upd(ctx:TMainContext) {
    const dispatcher = ctx.dispatcher ;
    const application = ctx.application;
    
    if (dispatcher && application) {
        application.update();
        dispatcher(current => current + 1);
    }
}
