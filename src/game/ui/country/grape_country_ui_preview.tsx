import { IGrape } from '../../core/classes/Grape.class'
import { IInventory } from '../../core/classes/Inventory-registry';
import { IPerson } from '../../core/classes/Player.class'
import { IVineyard } from '../../core/classes/Vineyard.class';

const Grape_country_ui_preview = ({person ,grapesInventory}:{ grapesInventory:IInventory<IGrape> , person:IPerson|null }) => {
    
    return (
        <div className={'bdr pdg flex-box flex-dir--col gap'}>
            {/* {grapes.filter(grape => {
                
                return true;
            }).map((grape) => (
                null
            ))} */}

            {
                !!person
            }
            {
                !!grapesInventory
            }
        </div>
    )
}

export default Grape_country_ui_preview
