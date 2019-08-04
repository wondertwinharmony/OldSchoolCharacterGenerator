import { random, sampleSize } from "lodash";
import Roll from "roll";
import { characterClasses } from "../characterData/classes";
import { gear } from "../characterData/gear";
import { getEquipmentSlots } from "./getEquipmentSlots";
import { getRandomBurrowingMammal } from "./getRandomBurrowingMammal";
import { getRandomInstrument } from "./getRandomInstrument";

/**
 * Utility function to determine equipment and starting gold for a character.
 * Takes a parameter that specifies class.
 * Returns an array of strings -- the names of equipment/items.
 * @param classOptionKey
 * @param conScore
 */
export const getEquipment: (classOptionKey: string, conScore: number) => any = (
  classOptionKey: string,
  conScore: number
) => {
  const roller = new Roll();
  let characterEquipment = [];
  let characterEquipmentString = "";

  /**
   * If CON score > 10 set available equipment slots to CON score,
   * otherwise, set available slots 10.
   */
  const slotsToFill = conScore <= 10 ? 10 : random(10, conScore);

  // Get starting equipment kit based on class.
  const characterEquipmentKit = sampleSize(
    characterClasses[classOptionKey].equipment,
    1
  )[0];

  /**
   * Crab-People have unique starting equipment requirements due
   * to their social status. If class is a Crab-Person, give them
   * no starting equipment!
   */
  if (classOptionKey === "crabPerson") {
    return {
      characterEquipmentString: "• <strong>None</strong>",
      slotsToFill: 0
    };
  }

  // Starting wealth is 3d6x2 gp
  const characterStartingWealthString = `• <strong>${roller
    .roll("3d6*2")
    .result.toString()} gp in Coin Purse</strong><sup>†</sup>`;

  // Include starting wealth and kit
  characterEquipment.push(characterStartingWealthString, characterEquipmentKit);

  /**
   * For classes with uniquely generated random items we can
   * add them here (e.g. bard below).
   */

  /**
   * If class is a bard, make sure they have a random
   * instrument.
   */
  if (classOptionKey === "bard") {
    characterEquipment.push(getRandomInstrument());
  }

  /**
   * If class is a gnome, have random chance of burrowing
   * mammal as pet. (50% chance)
   */
  if (classOptionKey === "gnome" && random(1, 2) > 1) {
    characterEquipment.push(getRandomBurrowingMammal());
  }

  // Determine how many equipment slots are currently occupied
  const equipmentCountBeforeRandomItems = getEquipmentSlots(
    characterEquipment.flat()
  );

  /**
   * Determine random items for available slots.
   *
   * **House rule!**
   * Just like Knave, but since a character can have
   * less than 10 CON, we set each character at a base
   * of 10 slots, and any CON over 10 gets the differnce
   * as random equipment occupied slots.
   *
   * This means every character can carry at least 10
   * slots worth of items.
   */
  let characterRandomItems = sampleSize(
    gear,
    slotsToFill - equipmentCountBeforeRandomItems
  );

  characterEquipment.push(characterRandomItems);

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

  characterEquipmentString = characterEquipment.flat().join("<br><br>• ");
  /**
   * If class is a dwarf, halfling, etc. and equipment
   * contains a two-handed sword or long bow, we have
   * to re-determine equipment. These classes
   * cannot use these weapons due to their size.
   */
  if (
    (classOptionKey === "halfling" ||
      classOptionKey === "dwarf" ||
      classOptionKey === "duergar" ||
      classOptionKey === "svirfneblin") &&
    (characterEquipmentString.includes("Two-Handed Sword") ||
      characterEquipmentString.includes("Long Bow"))
  ) {
    return getEquipment(classOptionKey, conScore);
  }

  return { characterEquipmentString, slotsToFill };
};
