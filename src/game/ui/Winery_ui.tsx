import { useContext } from 'react'
import { MainContext } from '../../App'
import { IWinery } from '../core/classes/Winery.class'

const Winery_ui = ({ winery }: { winery: IWinery }) => {
    const ctx = useContext(MainContext)

    return (
        <div
            className={'modal flex-box flex-dir--col gap bdr pdg'}
            style={{
                zIndex: 1000,
                backgroundColor: '#242a42',
            }}
        >
            <h2>Winery_ui</h2>
            <div className={'flex-box gap'}>
                <div>Winery</div>
                <div>{winery.getName()}</div>
                <div>
                    <button
                        onClick={() => {
                            ctx.modal.component = null
                            ctx.application.update()
                        }}
                    >
                        close
                    </button>
                </div>
            </div>
            <div>{}</div>
            <div>bottom</div>
        </div>
    )
}

export default Winery_ui
