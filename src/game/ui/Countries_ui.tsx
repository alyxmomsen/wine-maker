import React, { useContext } from 'react'
import CommonCountryPeviewUI from './country/common_country_preview_ui'
import { MainContext } from '../../App'

const CountriesUI = () => {
    const ctx = useContext(MainContext)

    return (
        <div className={'flex-item'}>
            <h2>countries: </h2>
            <div className={'flex-box flex-wrap gap-2 justify--end'}>
                {ctx.application.countries.map((ctr) => (
                    <CommonCountryPeviewUI
                        country={ctr}
                        player={ctx.application.player}
                    />
                ))}
            </div>
        </div>
    )
}

export default CountriesUI
