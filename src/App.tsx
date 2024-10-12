import { createContext, useEffect, useState } from 'react'

import './App.css'

import GamePage from './pages/game'
import { GameFacade } from './game/core/classes/GameFacade'

const gameFacade = new GameFacade(null)

export type TMainContext = {
    application: GameFacade
    updated: number
    dispatcher: React.Dispatch<React.SetStateAction<number>> | null
}

export const MainContext = createContext<TMainContext>({
    application: gameFacade,
    updated: 0,
    dispatcher: null,
})

let reqAnimFrameId = 0

function App() {
    console.log('root updated')

    const [state, setState] = useState(0)
    useEffect(() => {
        gameFacade.setUIRefresher(setState)

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
                    application: gameFacade,
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
