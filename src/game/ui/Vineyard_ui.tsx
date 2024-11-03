import React, { useContext } from 'react'
import { MainContext } from '../../App'
import { Vineyard } from '../core/classes/Vineyard.class'
import { IPerson } from '../core/classes/Player.class'
import Grape_country_ui_preview from './country/grape_country_ui_preview'

const Vineyard_ui = ({
    person,
    vineyard,
}: {
    person: IPerson
    vineyard: Vineyard
}) => {
    const ctx = useContext(MainContext)

    return (
        <div className={'modal bdr pdg'}>
            <div className={'bdr pdg'}>
                <div className={'bdr pdg flex-box gap'}>
                    <div>Vineyard</div>
                    <div>
                        location:{' '}
                        {vineyard.getLocation().getTitle().toUpperCase()}
                    </div>
                    <div>name: {vineyard.getName()}</div>
                    <button
                        onClick={() => {
                            ctx.modal.component = null
                            ctx.application.update()
                        }}
                    >
                        esc
                    </button>
                </div>
                <div className={'bdr pdg'}>
                    {ctx.application.grapeFactories.map((grapeFactory) => {
                        return (
                            <div className={'flex-box gap'}>
                                <div>{grapeFactory.getTitle()}</div>
                                <div>
                                    <button
                                        disabled={
                                            !grapeFactory.canCreateGrape(
                                                ctx.application.player,
                                                vineyard
                                            )
                                        }
                                        onClick={() => {
                                            grapeFactory.create(
                                                ctx.application.player,
                                                vineyard
                                            )
                                            ctx.application.update()
                                        }}
                                        className={'inline-block'}
                                    >
                                        plant
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={'bdr pdg'}>
                    {<Grape_country_ui_preview grapes={person.getGrapes()} />}
                </div>
            </div>
        </div>
    )
}

export default Vineyard_ui
