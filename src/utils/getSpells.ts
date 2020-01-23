import { sampleSize } from "lodash";
import {
  illusionistSpells,
  knaveSpells,
  readMagicSpell,
  spells
} from "../characterData/spells";

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
   * or other spell lists (e.g. Illusionist).
   * Determine those special cases here.
   */
  if (classSelection === "drow")
    return spells.slice(LIGHT_SPELL_INDEX, LIGHT_SPELL_INDEX + 1);

  /**
   * Illusionists and gnomes get a random spell from the
   * illusionist spell list and the read magic spell. They
   * do NOT get a chance for a knave spell.
   */
  if (classSelection === "illusionist" || classSelection === "gnome") {
    let randomSpell = sampleSize(illusionistSpells, 1);
    randomSpell.push(readMagicSpell);
    return randomSpell;
  }

  /**
   * Only magic-users, citizen liches, wild magic-users, and
   * elves have opportunity to receive a knave spell at level one.
   */
  if (includeKnaveSpells) {
    let allSpells = [];
    allSpells.push(spells, knaveSpells);

    /**
     * If class is magic-user, citizen lich, wild magic-user, or elf
     * (therefore Arcane spell caster and rely on a spellbook for
     * casting), award them the Read Magic spell at level one as well.
     */
    if (
      classSelection === "magicUser" ||
      classSelection === "citizenLich" ||
      classSelection === "wildMagicUser" ||
      classSelection === "elf"
    ) {
      let randomSpell = sampleSize(allSpells.flat(), 1);
      randomSpell.push(readMagicSpell);
      return randomSpell;
    }
    return sampleSize(allSpells.flat(), 1);
  }

  if (
    classSelection === "magicUser" ||
    classSelection === "citizenLich" ||
    classSelection === "wildMagicUser" ||
    classSelection === "elf"
  ) {
    let randomSpell = sampleSize(spells, 1);
    randomSpell.push(readMagicSpell);
    return randomSpell;
  }

  /**
   * Defaulting to one random spell here no matter what.
   */
  return sampleSize(spells, 1);
};
