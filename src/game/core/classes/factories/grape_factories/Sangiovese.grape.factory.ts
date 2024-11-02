import { Grape } from '../../Grape.class'
import { SangioveseGrape } from '../../Grape_concrete/Sangiovese.grape'
import { IGrapeFactory } from '../../GrapeFactory'
import { PlayerPerson } from '../../Player.class'
import { Vineyard } from '../../Vineyard.class'

export class SangioveseGrapeFactory implements IGrapeFactory {
    canCreateGrape(player: PlayerPerson, vineyard: Vineyard): boolean {
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

        return vineyardPass
    }

    create(player: PlayerPerson, vineyard: Vineyard): Grape | null {
        const vineyardLocation = vineyard.getLocation();
        const sangioveseGrape = new SangioveseGrape(vineyardLocation);
        player.addGrape(sangioveseGrape);
        return sangioveseGrape;
    }

    getTitle(): string {
        return 'Sangiovese'
    }
}
