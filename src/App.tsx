import { createContext, useEffect, useState } from 'react'

import './App.css'

import GamePage from './pages/game'
import { Application } from './classes/Application.class'

const myapp = new Application();

export type TMainContext = {
    application: Application
    updated: number
    dispatcher: React.Dispatch<React.SetStateAction<number>> | null
}

export const MainContext = createContext<TMainContext>({
    application: myapp,
    updated: 0,
    dispatcher: null,
})

let reqAnimFrameId = 0

function App() {
    const [state, setState] = useState(0)
    useEffect(() => {
        console.log('reactjs updated')
        // window.cancelAnimationFrame(reqAnimFrameId);

        // const update = () => {
        //     myapp.update();
        //     reqAnimFrameId = window.requestAnimationFrame(update);
        // }

        // update();
    }, [])

    return (
        <>
            <MainContext.Provider
                value={{
                    application: myapp,
                    updated: state,
                    dispatcher: setState,
                }}
            >
                <GamePage />
            </MainContext.Provider>
        </>
    )
}

export default App
