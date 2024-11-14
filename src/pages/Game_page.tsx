import './../styles/main.css'
import './../styles/components.css'

import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'
import PlayerUI from '../components/player_ui'
import CountryUI from '../game/ui/country/country_ui'
import CountriesUI from '../game/ui/Countries_ui'
import { Location } from '../game/core/classes/Location.class'

const GamePage = () => {
    const [globalState, setGlobalState] = useState(0)
    const ctx = useContext(MainContext)

    const [focusedCountry, setFocusedCountry] = useState<Location | null>(null)

    useEffect(() => {
        ctx.setPlayerFocusedCountry = (location: Location | null) =>
            setFocusedCountry(location)

        ctx.application.setUIRefresher(setGlobalState)
    }, [])

    return (
        <div className={'flex-box gap bdr pdg width-max'}>
            <PlayerUI />
            <CountriesUI />
            {ctx.modal.isOpen &&
            ctx.modal.location &&
            ctx.application.player.getCurrentLocation() ===
                ctx.modal.location ? (
                <CountryUI
                    player={ctx.application.player}
                    vineyardsInventory={ctx.application.vineyardInventory}
                />
            ) : null}
            {ctx.modal.component && <div className={'modal bdr pdg'}>{ctx.modal.component()}</div>}
        </div>
    )
}

export default GamePage
