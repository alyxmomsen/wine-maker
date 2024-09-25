import React, { useContext } from 'react'
import MainWrapper from '../components/wrappers/mainWrapper'
import { MainContext } from '../App'
import Entity from '../components/entity'
import Room from '../components/entity.room'

const GamePage = () => {

    const ctx = useContext(MainContext)

    return (
        <div>
            <MainWrapper foo={() => {}}>
                <div>hello world</div>
            </MainWrapper>
            {
                ctx.application.getEntities().map((entity) => {
                    entity.onHealthUpdate((value:number) => ctx.dispatcher?.(current => current++));
                    return (
                        <Entity value={entity.getHealth()} />
                    )
                  })
            }
            <Room
                fn={(cb: (value: string) => void) => {
                    ctx.application.getRooms().forEach((room) => room.onAttack(cb))
                }}
            />
            <button onClick={() => ctx.application.start()}>start</button>
            <button onClick={() => ctx.application.stop()}>stop</button>
        </div>
    )
}

export default GamePage
