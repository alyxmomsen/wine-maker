import React, { useContext } from 'react'
import { Wine } from '../core/classes/Wine.class'
import { MainContext } from '../../App'
import { IWinery } from '../core/classes/Winery.class'
import Winery_ui from './Winery_ui'

const Winery_UI_prerview = ({
    playerWinery: playerWinery,
}: {
    playerWinery: IWinery
}) => {
    const ctx = useContext(MainContext)

    return (
        <div className="flex-box gap flex-dir--col bdr pdg">
            <div className={'flex-box gap'}>
                <div>{playerWinery.getName()}</div>
                <button
                    onClick={() => {
                        ctx.modal.component = () => (
                            <Winery_ui winery={playerWinery} />
                        )
                        ctx.application.update()
                        // alert('updated');
                    }}
                >
                    enter
                </button>
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
                        const canCreate = factory.canCreateWineForPerson(
                            ctx.application.player,
                            playerWinery
                        )

                        return (
                            <button
                                disabled={!canCreate}
                                onClick={() => {
                                    factory.tryCreate(
                                        ctx.application.player,
                                        playerWinery
                                    )
                                }}
                            >
                                {factory.getWineName()}
                            </button>
                        )
                    })}
            </div>
        </div>
    )
}

export default Winery_UI_prerview
