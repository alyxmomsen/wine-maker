import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'

import './../styles/main.css'
import { Country, Location } from '../game/core/classes/Location.class'
import { PlayerPerson } from '../game/core/classes/Player.class'
import { Grape } from '../game/core/classes/Grape.class'
import { Vineyard } from '../game/core/classes/Vineyard.class'
import Player from '../components/player'
import CommonCountryUI from '../components/common_country_ui'

const GamePage = () => {
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
    }, [])

    return (
        <div className={'flex-box gap bdr pdg width-max'}>
            <Player />
            <div>
                <button onClick={() => ctx.application.update()}>
                    upd --force
                </button>
            </div>
            <div>
                <span>countries: </span>
                {countries.map((ctr) => (
                    <CommonCountryUI country={ctr} />
                ))}
            </div>
            <div>
                <div>
                    <button
                        disabled={
                            !ctx.application.vineyardFactory.canCreateForPlayer(
                                ctx.application.player
                            )
                        }
                        onClick={() => {
                            ctx.application.vineyardFactory.createForPlayer(
                                ctx.application.player
                            )
                            console.log(player)
                            ctx.application.update()
                        }}
                    >
                        create vineyard
                    </button>
                </div>
                <div>
                    {ctx.application.wineryFactories.map((wineryFactory) => {
                        return (
                            <button
                                disabled={!wineryFactory.canCreate(player)}
                                onClick={() => {
                                    wineryFactory.tryCreate(player)
                                    ctx.application.update()
                                }}
                            >
                                create winery
                            </button>
                        )
                    })}
                    {/* <button disabled={ctx.application.wineryFactories}>create winery</button> */}
                </div>
            </div>
        </div>
    )
}

export default GamePage
