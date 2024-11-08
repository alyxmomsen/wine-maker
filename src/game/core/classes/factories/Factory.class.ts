import { PlayerPerson } from '../Player.class'
import { IVineyard, Vineyard } from '../Vineyard.class'
import { Wine } from '../Wine.class'

export interface IFactory {
    canCreateForPlayer(
        player: PlayerPerson,
        vineyard: IVineyard | null
    ): boolean
    getWineName(): string
    getTitle(): string
    createFor(player: PlayerPerson): Wine
}
