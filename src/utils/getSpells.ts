import { sampleSize } from "lodash";
import { spells, knaveSpells } from "../characterData/spells";

/**
 * Utility function that returns a single spell for magic users and elves.
 * Takes a paremeter that specifies T/F on whether to include spells from Knave.
 * Returns a string with spell name and description.
 * @param includeKnaveSpells 
 */

export const getSpells = (includeKnaveSpells: boolean) => {
    if(includeKnaveSpells) {
        let allSpells = [];
        allSpells.push(spells, knaveSpells);
        return sampleSize(allSpells.flat(), 1);
    }

    return sampleSize(spells, 1);
}
