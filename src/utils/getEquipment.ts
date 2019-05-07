import { sampleSize } from "lodash";
import Roll from "roll";
import { characterClasses } from "../characterData/classes";
import { gear } from "../characterData/gear";

/**
 * Utility function to determine equipment and starting gold for a character.
 * Takes a parameter that specifies class.
 * Returns an array of strings -- the names of equipment/items.
 * @param classOptionKey
 */
export const getEquipment = (classOptionKey: string) => {
  const roller = new Roll();
  let characterEquipment = [];
  const characterRandomItems = sampleSize(gear, 2);
  let characterEquipmentKit = sampleSize(
    characterClasses[classOptionKey].equipment,
    1
  )[0];
  const characterStartingWealthString = `•${roller
    .roll("3d6*10")
    .result.toString()} gp`;

  characterEquipment.push(
    characterStartingWealthString,
    characterEquipmentKit,
    characterRandomItems
  );

  const characterEquipmentString = characterEquipment.flat().join("\n\n•");
  /**
   * If class is a dwarf or halfling, and equipment
   * contains a two-handed sword or long bow, we have
   * to re-determine equipment. Dwarves and halflings
   * cannot use these weapons due to their size
   */
  if (
    (classOptionKey === "halfling" || classOptionKey === "dwarf") &&
    (characterEquipmentString.includes("Two-Handed Sword") ||
      characterEquipmentString.includes("Long Bow"))
  )
    getEquipment(classOptionKey);
  return characterEquipmentString;
};
