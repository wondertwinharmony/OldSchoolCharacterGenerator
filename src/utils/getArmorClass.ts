import { getAbilityScoreModifier } from "./getAbilityScoreModifier";
/**
 * Utility for determining Armor Class (AC).
 * We determine ascending AC, because THAC0 is
 * awkward.
 *
 * AC = armor + Dex modifier
 *
 * @param dexScore
 */
export const getArmorClass = (dexScore: number, equipment: string[]) => {
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
  let baseArmorClass = 10;
  const leather = equipment.filter(item => item === "Leather Armor");
  const chain = equipment.filter(item => item === "Chain Armor");
  const plate = equipment.filter(item => item === "Plate Armor");
  const shield = equipment.filter(item => item === "Shield");

  if (leather.length === 1) baseArmorClass = 12;
  if (chain.length === 1) baseArmorClass = 14;
  if (plate.length === 1) baseArmorClass = 16;
  if (shield.length === 1) baseArmorClass = baseArmorClass + 1;
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
