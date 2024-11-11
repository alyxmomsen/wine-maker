import { useEffect } from 'react'
import { IPerson } from '../../core/classes/Player.class'
import { GrapeInventory } from '../../core/classes/Inventory'

const Grape_country_ui_preview = ({
    person,
    grapesInventory,
}: {
    grapesInventory: GrapeInventory
    person: IPerson | null
}) => {
    useEffect(() => {})

    return (
        <div className={'bdr pdg flex-box flex-dir--col gap'}>
            {grapesInventory.getItems().map((elem) => (
                <div>hello world</div>
            ))}
        </div>
    )
}

export default Grape_country_ui_preview
