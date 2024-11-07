import { IGrape } from '../../core/classes/Grape.class'
import { IPerson } from '../../core/classes/Player.class'

const Grape_country_ui_preview = ({ grapes , person = null} : { grapes: IGrape[] , person:IPerson|null }) => {
    const uniqGrapes: Map<string, string> = new Map<string, string>()
    // uniqGrapes.set('' ,'');

    return (
        <div className={'bdr pdg flex-box flex-dir--col gap'}>
            {grapes.filter(grape => {
                
                return true;
            }).map((grape) => (
                null
            ))}
        </div>
    )
}

export default Grape_country_ui_preview
