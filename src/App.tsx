import { createContext, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Application } from './classes/class.app'
import Entity from './components/entity'
import Room from './components/entity.room'
import MainWrapper from './components/wrappers/mainWrapper'
import GamePage from './pages/game'

console.log('app startded')

const myapp = new Application();
export const MainContext = createContext<{ application: Application, updated: number , dispatcher:React.Dispatch<React.SetStateAction<number>>|null }>({application:myapp , updated:0 , dispatcher:null})

function App() {
    const [state , setState] = useState(0);
    useEffect(() => {})

    return (
        <>
            <MainContext.Provider value={{application:myapp , updated:state , dispatcher:setState}}>
                <GamePage />
            </MainContext.Provider>
        </>
    )
}

export default App
