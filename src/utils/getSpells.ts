import { sampleSize } from "lodash";
import { knaveSpells, readMagicSpell, spells } from "../characterData/spells";

const LIGHT_SPELL_INDEX = 4;

/**
 * Utility function that returns a single spell for spellcasting classes.
 * Takes a paremeter that specifies T/F on whether to include spells from Knave.
 * Returns a string with spell name and description. Also takes class selection
 * into account.
 * @param includeKnaveSpells
 * @parama classSelection
 */
export const getSpells = (
  includeKnaveSpells: boolean,
  classSelection: string
) => {
  /**
   * The Drow (and other classes in future) may have
   * access to either pre-determined starting spells
   * or other spell lists (e.g. Illusionist, Druid).
   * Determine those special cases here.
   */
  if (classSelection === "drow")
    return spells.slice(LIGHT_SPELL_INDEX, LIGHT_SPELL_INDEX + 1);

  if (includeKnaveSpells) {
    let allSpells = [];
    allSpells.push(spells, knaveSpells);

    /**
     * If class is magic-user or elf (therefore Arcane spell caster
     * and rely on a spellbook for casting), award them the Read Magic
     * spell at level one as well.
     */
    if (classSelection === "magicUser" || classSelection === "elf") {
      let randomSpell = sampleSize(allSpells.flat(), 1);
      randomSpell.push(readMagicSpell);
      return randomSpell;
    }
    return sampleSize(allSpells.flat(), 1);
  }

  if (classSelection === "magicUser" || classSelection === "elf") {
    let randomSpell = sampleSize(spells, 1);
    randomSpell.push(readMagicSpell);
    return randomSpell;
  }
  return sampleSize(spells, 1);
};
