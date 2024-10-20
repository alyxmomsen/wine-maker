import { createContext, useEffect, useState } from 'react'

import './App.css'

import GamePage from './pages/game'
import { GameFacade } from './game/core/classes/GameFacade'
import { Location } from './game/core/classes/Location.class'

const gameFacade = new GameFacade(null)

export type TMainContext = {
    application: GameFacade
    updated: number
    dispatcher: React.Dispatch<React.SetStateAction<number>> | null
    playerFocusedCountry: Location | null
    setPlayerFocusedCountry: (location: Location | null) => void
}

export const MainContext = createContext<TMainContext>({
    application: gameFacade,
    updated: 0,
    dispatcher: null,
    playerFocusedCountry: null,
    setPlayerFocusedCountry: () => {},
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
                    playerFocusedCountry: null,
                    setPlayerFocusedCountry: () => {},
                }}
            >
                <GamePage />
            </MainContext.Provider>
        </>
    )
}

export default App
