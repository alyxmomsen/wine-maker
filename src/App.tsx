import { createContext, useEffect, useState } from 'react'

import './App.css'

import { GameFacade } from './game/core/classes/GameFacade'
import { Location } from './game/core/classes/Location.class'
import GamePage from './pages/game_page'

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
        component: (() => JSX.Element) | null
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
        component: null,
    },
})

function App() {
    console.log('root updated')

    return (
        <>
            <MainContext.Provider
                value={{
                    application: gameFacade,
                    updated: 0,
                    dispatcher: null,
                    playerFocusedCountry: null,
                    setPlayerFocusedCountry: () => {},
                    modal: { location: null, isOpen: false, component: null },
                }}
            >
                <GamePage />
            </MainContext.Provider>
        </>
    )
}

export default App
