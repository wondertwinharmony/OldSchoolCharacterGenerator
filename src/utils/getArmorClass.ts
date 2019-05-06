import { getAbilityScoreModifier } from "./getAbilityScoreModifier";
/**
 * @todo
 * import equipment here and get what armor or
 * shield (if any) a character has
 * To determine AC:
 * ❌ 1 - search equipment for each item. If its there - adjust the base AC.
 * ✅ 2 - add DEX bonus adjustment
 *
 *
 * Base AC based on armor:
 * Unarmored: 10
 * Leather: 12
 * Chain mail: 14
 * Plate mail: 16
 * Shield: +1
 */

/**
 * Utility for determining Armor Class (AC).
 * We determine ascending AC, because THAC0 is
 * awkward.
 *
 * AC = armor + Dex modifier
 *
 * @param dexScore
 */
export const getArmorClass = (dexScore: number) => {
  /**
   * Determine if character has any of the following types
   * of armor and use that as the base AC, otherwise base
   * AC is 10.
   *
   * Unarmored: 10
   * Leather: 12
   * Chain mail: 14
   * Plate mail: 16
   * Shield: +1
   */
  const baseArmorClass = 10;

  /**
   * Since getAbilityScoreModifier returns a string for display,
   * we need to do a little work here to make sure that "None"
   * and other strings are converted to numbers for calculating
   * armor class.
   */
  const armorClass =
    baseArmorClass +
    Number(
      getAbilityScoreModifier(dexScore) === "None"
        ? "0"
        : getAbilityScoreModifier(dexScore)
    );

  return armorClass;
};
