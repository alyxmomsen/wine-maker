import React, { useContext } from 'react'
import { MainContext } from '../../App'
import { IVineyard } from '../core/classes/Vineyard.class'
import { IPerson } from '../core/classes/Player.class'
import Grape_country_ui_preview from './country/grape_country_ui_preview'
import { IGrape } from '../core/classes/Grape.class'
import { VenetoRegion } from '../core/classes/Location.Region.concrete'

const Vineyard_ui = ({
    person,
    vineyard,
}: {
    person: IPerson
    vineyard: IVineyard
}) => {
    const ctx = useContext(MainContext)

    // console.log(ctx.application.vineyards.forEach(vineyard  => vineyard.getGrapeInventory().getItems().length));

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
                            <div className={'flex-box gap justify--start'}>
                                <div>{grapeFactory.getTitle()}</div>
                                <div>
                                    <button
                                        disabled={
                                            !grapeFactory.canCreateGrape(
                                                ctx.application.player,
                                                vineyard,
                                                ctx.application
                                                    .vineyardInventory
                                            )
                                        }
                                        onClick={() => {
                                            const maybeGrape =
                                                grapeFactory.create(
                                                    ctx.application.player,
                                                    vineyard,
                                                    vineyard.getGrapeInventory()
                                                )

                                            if (maybeGrape) {
                                                vineyard.addGrape(
                                                    maybeGrape,
                                                    null
                                                )
                                                ctx.application.update()
                                            }
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
                    {
                        <Grape_country_ui_preview
                            grapesInventory={vineyard.getGrapeInventory()}
                            person={ctx.application.player}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Vineyard_ui

function foo(grape: IGrape, grapes: IGrape[]): number {
    return 0
}
