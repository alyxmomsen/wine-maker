import React, { useContext } from 'react'
import { Wine } from '../core/classes/Wine.class'
import { MainContext } from '../../App'
import { IWinery } from '../core/classes/Winery.class'

const Winery_UI_prerview = ({
    playerWinery: playerWinery,
}: {
    playerWinery: IWinery
}) => {
    const ctx = useContext(MainContext)

    return (
        <div className="flex-box gap flex-dir--col bdr pdg">
            <div>
                <div>{playerWinery.getName()}</div>
            </div>
            <div className={'flex-box gap flex-wrap'}>
                {ctx.application.wineFactories
                    .filter((factory) => {
                        const canCreate = factory.canCreateForLocation(
                            ctx.application.player,
                            playerWinery.getLocation()
                        )

                        return canCreate
                    })
                    .map((factory) => {
                        const canCreate = factory.canCreateWineForPlayer(
                            ctx.application.player,
                            playerWinery
                        )

                        return (
                            <button disabled={!canCreate} onClick={() => {}}>
                                {factory.getWineName()}
                            </button>
                        )
                    })}
            </div>
        </div>
    )
}

export default Winery_UI_prerview
