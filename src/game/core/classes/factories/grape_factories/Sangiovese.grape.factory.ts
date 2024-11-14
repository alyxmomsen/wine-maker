import { Grape, IGrape } from '../../Grape.class'
import { SangioveseGrape } from '../../Grape_concrete/Sangiovese.grape'
import { GrapeFactory } from './GrapeFactory'
import { GrapeInventory, VineyardInventory } from '../../Inventory'
import { PlayerPerson } from '../../Player.class'
import { IVineyard } from '../../Vineyard.class'

export class SangioveseGrapeFactory extends GrapeFactory {
    canCreateGrape(
        player: PlayerPerson,
        vineyard: IVineyard,
        vineyardsInventory: VineyardInventory
    ): boolean {
        const playerVineyards = player.getVineyards()
        const currentVineyard = vineyard

        let vineyardPass = false
        if (playerVineyards.length) {
            for (const playerVineyard of playerVineyards) {
                if (playerVineyard === currentVineyard) {
                    vineyardPass = true
                    break
                }
            }
        }

        return true
    }

    create(
        player: PlayerPerson,
        vineyard: IVineyard,
        grapeInventory: GrapeInventory
    ): Grape | null {
        const vineyardLocation = vineyard.getLocation()

        const newId = this.uniqIdRegistry.gen()

        const sangioveseGrape = new SangioveseGrape(newId, vineyardLocation)
        vineyard.getGrapeInventory().addItem(sangioveseGrape)
        // player.addGrape(sangioveseGrape)
        return sangioveseGrape
    }

    getTitle(): string {
        return 'Sangiovese'
    }
}
