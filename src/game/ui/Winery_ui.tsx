import { useContext } from 'react'
import { MainContext } from '../../App'
import { IWinery } from '../core/classes/Winery.class'
import { dateStringFromUnixTime } from '../../utils/utils'

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
            <div className={'flex-box gap bdr pdg'}>
                <div className={'bdr pdg'}>
                    {winery.getWines().map((wine) => (
                        <div className={'flex-box gap'}>
                            <div>{wine.getName()}</div>
                            <div>{dateStringFromUnixTime(wine.getSince())}</div>
                        </div>
                    ))}
                </div>
                <div className={'flex-box gap flex-wrap bdr pdg'}>
                    {ctx.application.wineFactories
                        .filter((factory) => {
                            const canCreate = factory.canCreateForLocation(
                                ctx.application.player,
                                winery.getLocation()
                            )

                            return canCreate
                        })
                        .map((factory) => {
                            const canCreate = factory.canCreateWineForPerson(
                                ctx.application.player,
                                winery
                            )

                            return (
                                <button
                                    disabled={!canCreate}
                                    onClick={() => {
                                        factory.tryCreate(
                                            ctx.application.player,
                                            winery
                                        )
                                    }}
                                >
                                    {factory.getWineName()}
                                </button>
                            )
                        })}
                </div>
                <div className={'bdr pdg'}>3</div>
            </div>
            <div>bottom</div>
        </div>
    )
}

export default Winery_ui
