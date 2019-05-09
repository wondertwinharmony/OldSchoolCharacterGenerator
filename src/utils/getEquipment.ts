import { sampleSize } from "lodash";
import Roll from "roll";
import { characterClasses } from "../characterData/classes";
import { gear } from "../characterData/gear";
import { getRandomInstrument } from "./getRandomInstrument";

/**
 * Utility function to determine equipment and starting gold for a character.
 * Takes a parameter that specifies class.
 * Returns an array of strings -- the names of equipment/items.
 * @param classOptionKey
 */
export const getEquipment = (classOptionKey: string) => {
  const roller = new Roll();
  let characterEquipment = [];
  let characterRandomItems = sampleSize(gear, 5);

  /**
   * Check if random items contains an instrument,
   * if it does we replace it with a random instrument
   * from the instrument list.
   */
  const indexOfItemToReplace = characterRandomItems.findIndex(
    item => item === "<strong>Instrument</strong>"
  );
  if (indexOfItemToReplace !== -1) {
    characterRandomItems[indexOfItemToReplace] = getRandomInstrument();
  }

  let characterEquipmentKit = sampleSize(
    characterClasses[classOptionKey].equipment,
    1
  )[0];
  // Starting wealth is 3d6x2 gp
  const characterStartingWealthString = `• <strong>${roller
    .roll("3d6*2")
    .result.toString()} gp</strong>`;

  characterEquipment.push(
    characterStartingWealthString,
    characterEquipmentKit,
    characterRandomItems
  );

  /**
   * If class is a bard, make sure they have a random
   * instrument.
   */
  if (classOptionKey === "bard") {
    characterEquipment.push(getRandomInstrument());
  }

  const characterEquipmentString = characterEquipment.flat().join("\n\n• ");
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
