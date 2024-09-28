import React, { useContext, useState } from 'react'
import { MainContext, TMainContext } from '../App'

import './../styles/main.css';

const GamePage = () => {

    const ctx = useContext(MainContext);

    const player = ctx.application.getPlayer();
    const grapes = ctx.application.getGrapes();

    return (
        <div className='wrapper flex-box flex-dir--row'>
            
            <div  className='wrapper'>
                user:
                {
                    player.getMoney()
                } $
                {
                    player.getGrapeMediators().map(mediator => <li>{mediator.getGrapeId()}</li>)
                }
            </div>
            <div className='wrapper'>grapes: {
                grapes.map(grape => <li>{grape.getName()}</li>)
            }</div>
            <div className='wrapper'>countries: </div>
            <div className='wrapper'>regions: </div>
            <div className='wrapper'>appellations: </div>
            <button className='' onClick={() => upd(ctx)}>update and refresh</button>
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
