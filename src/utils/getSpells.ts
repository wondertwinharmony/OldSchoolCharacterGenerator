import { sampleSize } from "lodash";
import { knaveSpells, spells } from "../characterData/spells";

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
    return sampleSize(allSpells.flat(), 1);
  }

  return sampleSize(spells, 1);
};
