import { knaveSpells } from "../characterData/spells";

/**
 * Utility function that takes a string and checks if it's in the knaveSpells array.
 * Returns a boolean. 
 * @param spell
 */
export const checkSpell = (spell: string) => {
    return knaveSpells.includes(spell);
}
