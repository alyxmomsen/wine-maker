import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Application } from './classes/class.app'
import Entity from './components/entity'
import Room from './components/entity.room'
import MainWrapper from './components/wrappers/mainWrapper'

console.log('app startded')

function App() {
    const [myapp, setMyApp] = useState(new Application())
    const [roomTitle, setRoomTitle] = useState<string>('')

    useEffect(() => {})

    return (
        <>
            <MainWrapper foo={() => {}}>
                <div>hello world</div>
            </MainWrapper>
            {myapp.getEntities().map((entity) => {
                return (
                    <Entity
                        fn={(cb: (value: number) => void) =>
                            entity.onHealthUpdate(cb)
                        }
                    />
                )
            })}

            <Room
                fn={(cb: (value: string) => void) => {
                    myapp.getRooms().forEach((room) => room.onAttack(cb))
                }}
            />
            <button onClick={() => myapp.start()}>start</button>
            <button onClick={() => myapp.stop()}>stop</button>
        </>
    )
}

export default App
