import { IGrape } from '../../core/classes/Grape.class'

const Grape_country_ui_preview = ({ grapes }: { grapes: IGrape[] }) => {
    const uniqGrapes: Map<string, string> = new Map<string, string>()
    // uniqGrapes.set('' ,'');

    return (
        <div className={'bdr pdg flex-box flex-dir--col gap'}>
            {grapes.map((grape) => (
                <div className={'bdr pdg'}>
                    <span>{grape.getGrapeName()}</span>{' '}
                    <span>({grape.getAmount()})</span>
                </div>
            ))}
        </div>
    )
}

export default Grape_country_ui_preview
