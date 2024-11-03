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
        </div>
    )
}

export default Winery_UI_prerview
