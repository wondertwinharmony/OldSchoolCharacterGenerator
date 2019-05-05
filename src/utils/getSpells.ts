//move read spell to magic user and elf abilities
// create function that take boolean to toggle knave spells, will return one random spell
import { sampleSize } from "lodash";
import { spells, knaveSpells } from "../characterData/spells";


export const getSpells = (includeKnaveSpells: boolean) => {
    if(includeKnaveSpells) {
        let allSpells = [];
        allSpells.push(spells, knaveSpells);
        return sampleSize(allSpells.flat(), 1);
    }

    return sampleSize(spells, 1);
}