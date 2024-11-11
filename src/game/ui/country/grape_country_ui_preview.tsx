import { useEffect } from 'react'
import { IPerson } from '../../core/classes/Player.class'
import { VineyardInventory } from '../../core/classes/Inventory'

const Grape_country_ui_preview = ({
    person,
    grapesInventory,
}: {
        grapesInventory: VineyardInventory;
        person: IPerson | null
    }) => {
    
    
    useEffect(() => {
        // console.log('grapesInventory.getItems().length',  [...grapesInventory.getItems()].length);
    });
    return (
        <div className={'bdr pdg flex-box flex-dir--col gap'}>
            {
                grapesInventory.getItems().map(elem  => <div>hello  world</div>)
            }
        </div>
    )
}

export default Grape_country_ui_preview
