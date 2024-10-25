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
    modal: {
        location: Location | null
        isOpen: boolean
    }
}

export const MainContext = createContext<TMainContext>({
    application: gameFacade,
    updated: 0,
    dispatcher: null,
    playerFocusedCountry: null,
    setPlayerFocusedCountry: () => {},
    modal: {
        location: null,
        isOpen: false,
    },
})

function App() {
    console.log('root updated')

    // const [state, setState] = useState(0)
    // useEffect(() => {
    //     gameFacade.setUIRefresher(setState)
    // }, [])

    return (
        <>
            <MainContext.Provider
                value={{
                    application: gameFacade,
                    updated: 0,
                    dispatcher: null,
                    playerFocusedCountry: null,
                    setPlayerFocusedCountry: () => {},
                    modal: { location: null, isOpen: false },
                }}
            >
                <GamePage />
            </MainContext.Provider>
        </>
    )
}

export default App
