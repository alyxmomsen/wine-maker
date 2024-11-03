import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'

import './../styles/main.css'
import { Country, Location } from '../game/core/classes/Location.class'
import { PlayerPerson } from '../game/core/classes/Player.class'
import { Grape } from '../game/core/classes/Grape.class'
import { Vineyard } from '../game/core/classes/Vineyard.class'
import Player from '../components/player'
import CommonCountryPeviewUI from '../game/ui/country/common_country_preview_ui'
import CountryUI from '../game/ui/country/country_ui'
import Winery_ui from '../game/ui/Winery_ui'

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
    const [grapes, setGrape] = useState<Grape[]>(ctx.application.grapes)
    const [player, setPlayer] = useState<PlayerPerson>(ctx.application.player)

    const [focusedCountry, setFocusedCountry] = useState<Location | null>(null)

    useEffect(() => {
        ctx.setPlayerFocusedCountry = (location: Location | null) =>
            setFocusedCountry(location)

        ctx.application.setUIRefresher(setGlobalState)
    }, [])

    useEffect(() => {
        console.log({ modal: ctx.modal })
    })

    return (
        <div className={'flex-box gap bdr pdg width-max'}>
            <Player />
            <div className={'flex-item'}>
                <button onClick={() => ctx.application.update()}>
                    upd --force
                </button>
            </div>
            <div className={'flex-item'}>
                <h2>countries: </h2>
                <div className={'flex-box flex-wrap gap-2 justify--end'}>
                    {countries.map((ctr) => (
                        <CommonCountryPeviewUI
                            country={ctr}
                            player={ctx.application.player}
                        />
                    ))}
                </div>
            </div>
            {ctx.modal.isOpen &&
            ctx.modal.location &&
            ctx.application.player.getCurrentLocation() ===
                ctx.modal.location ? (
                <CountryUI player={ctx.application.player} />
            ) : null}
            {ctx.modal.component && ctx.modal.component(<Winery_ui />)}
        </div>
    )
}

export default GamePage
