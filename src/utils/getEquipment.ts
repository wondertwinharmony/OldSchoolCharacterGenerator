import { characterClasses } from "../characterData/classes";
import { gear } from "../characterData/gear";
import { sampleSize } from "lodash";
import Roll from "roll";

/**
 * Utility function to determine equipment and starting gold for a character. 
 * Takes a parameter that specifies class.
 * Returns an array of strings -- the names of equipment/items.
 * @param classOptionKey 
 */

export const getEquipment = (classOptionKey: string) => {
  let characterEquipment = [];
  const roller = new Roll();

  const characterRandomItems = sampleSize(gear, 2);
  let characterEquipmentKit = sampleSize(characterClasses[classOptionKey].equipment, 1);
  const characterStartingWealthString = `${roller.roll('3d6*10').result.toString()} gp`;

  characterEquipmentKit.push(characterRandomItems);
  characterEquipment.push(characterStartingWealthString, characterEquipmentKit.flat());

  return characterEquipment.flat();
};

