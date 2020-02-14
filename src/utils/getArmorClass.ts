import { Items } from "../characterData/items";
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
export const getArmorClass = (
  dexScore: number,
  classOptionKey: string,
  inventory: Items
) => {
  /**
   * Crab-People have an absurd starting AC due to their natural
   * armor, so return that here now.
   */
  if (classOptionKey === "crabPerson") return 16;
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
  let hasShield = false;
  if (inventory) {
    Object.keys(inventory).forEach((item: string) => {
      if (inventory[item].description.includes("Leather Armor")) {
        baseArmorClass = 12;
      }
      if (inventory[item].description.includes("Chainmail")) {
        baseArmorClass = 14;
      }
      if (inventory[item].description.includes("Plate Mail")) {
        baseArmorClass = 16;
      }
      if (inventory[item].description.includes("Shield")) {
        hasShield = true;
      }
    });
  }
  /**
   * Since getAbilityScoreModifier returns a string for display,
   * we need to do a little work here to make sure that "None"
   * and other strings are converted to numbers for calculating
   * armor class.
   */
  let armorClass =
    baseArmorClass +
    Number(
      getAbilityScoreModifier(dexScore) === "None"
        ? "0"
        : getAbilityScoreModifier(dexScore)
    );

  if (hasShield) {
    armorClass = armorClass + 1;
  }

  return armorClass;
};
