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

  return characterEquipment.flat().join("\n\n•");
};
