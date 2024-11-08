import { useEffect } from 'react'
import { IGrape } from '../../core/classes/Grape.class'
import { IInventory } from '../../core/classes/Inventory-registry'
import { IPerson } from '../../core/classes/Player.class'
import { IVineyard } from '../../core/classes/Vineyard.class'

const Grape_country_ui_preview = ({
    person,
    grapesInventory,
}: {
    grapesInventory: IInventory<IVineyard ,IGrape>
    person: IPerson | null
    }) => {
    
    
    useEffect(() => {
        // console.log('grapesInventory.getItems().length',  [...grapesInventory.getItems()].length);
    });
    return (
        <div className={'bdr pdg flex-box flex-dir--col gap'}>
            {[...grapesInventory.getItems()].map((item) => (
                <div>
                    <div>{item[1].getGrapeName()}</div>
                    <div>{}</div>
                </div>
            ))}
        </div>
    )
}

export default Grape_country_ui_preview
