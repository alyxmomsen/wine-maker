import { PlayerPerson } from '../Player.class'
import { Vineyard } from '../Vineyard.class'
import { Wine } from '../Wine.class'

export interface IFactory {
    canCreateForPlayer(player: PlayerPerson, vineyard: Vineyard | null): boolean
    getWineName(): string
    getTitle(): string
    createFor(player: PlayerPerson): Wine
}
