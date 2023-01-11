import { ICharacter } from "./ICharacter";
import { IPerson } from "./IPerson";

export interface IRoles {
    roles: [string],
    roles_russian:[string],
    character: ICharacter | null ,
    person: IPerson | null
}