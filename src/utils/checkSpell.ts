import { knaveSpells } from "../characterData/spells";

/**
 * Utility function that takes a string and checks if it's in the knaveSpells array.
 * Returns a boolean.
 * @param spell
 */
export const checkSpell = (spells: string[]) => {
  /**
   * We always check first index because its possible
   * that this is an Arcane (magic-user or elf) spell
   * caster and Read Magic was added to their spell list.
   */
  return knaveSpells.includes(spells[0]);
};
