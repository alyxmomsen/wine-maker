import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'

import './../styles/main.css'
import './../styles/components.css'

import { Country, Location } from '../game/core/classes/Location.class'
import { PlayerPerson } from '../game/core/classes/Player.class'
import { Grape, IGrape } from '../game/core/classes/Grape.class'
import { Vineyard } from '../game/core/classes/Vineyard.class'
import PlayerUI from '../components/player_ui'
import CountryUI from '../game/ui/country/country_ui'
import CountriesUI from '../game/ui/Countries_ui'

const GamePage = () => {
    const [globalState, setGlobalState] = useState(0)
    const ctx = useContext(MainContext)
    const [countries, setCountries] = useState<Country[]>(
        ctx.application.countries
    )
    const moneyInputDefaultValue = 1000
    const [playerMoneyInput, setPlayerMoneyInput] = useState(
        moneyInputDefaultValue
    )
    const [vineyards, setVineyard] = useState<Vineyard[]>(
        ctx.application.vineyards
    )
    const [grapes, setGrape] = useState<IGrape[]>(ctx.application.grapes)
    const [player, setPlayer] = useState<PlayerPerson>(ctx.application.player)

    const [focusedCountry, setFocusedCountry] = useState<Location | null>(null)

    useEffect(() => {
        ctx.setPlayerFocusedCountry = (location: Location | null) =>
            setFocusedCountry(location)

        ctx.application.setUIRefresher(setGlobalState)
    }, [])

    useEffect(() => {
        // console.log({ modal: ctx.modal })
    })

    return (
        <div className={'flex-box gap bdr pdg width-max'}>
            <PlayerUI />
            <CountriesUI />
            {ctx.modal.isOpen &&
            ctx.modal.location &&
            ctx.application.player.getCurrentLocation() ===
                ctx.modal.location ? (
                <CountryUI player={ctx.application.player} vineyardsInventory={ctx.application.vineyardInventory} />
            ) : null}
            {ctx.modal.component && ctx.modal.component()}
        </div>
    )
}

export default GamePage
