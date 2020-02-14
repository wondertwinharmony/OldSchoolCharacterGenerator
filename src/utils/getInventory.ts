import { random, sample, sampleSize } from "lodash";
import Roll from "roll";
import { characterClasses } from "../characterData/classes";
import { poisons } from "../characterData/classes/assassin";
import { disguiseItems } from "../characterData/classes/citizenLich";
import { burrowingMammals } from "../characterData/classes/gnome";
import { dungeoneeringEquipment } from "../characterData/classes/underworldRanger";
import { gear, instruments } from "../characterData/items";
import { getInventorySlotsUsed } from "./getInventorySlotsUsed";
/**
 * Utility function to determine equipment and starting gold for a character.
 * Takes a parameter that specifies class.
 * Returns an array of strings -- the names of equipment/items.
 * @param classOptionKey
 * @param conScore
 */
export const getInventory: (classOptionKey: string, conScore: number) => any = (
  classOptionKey: string,
  conScore: number
) => {
  /**
   * Crab-People have unique starting equipment requirements due
   * to their social status. If class is a Crab-Person, give them
   * no starting equipment!
   */
  if (classOptionKey === "crabPerson") {
    return {};
  }

  /**
   * If CON score > 10 set available equipment slots to CON score,
   * otherwise, set available slots 10.
   */
  const slotsToFill = conScore <= 10 ? 10 : random(10, conScore);
  let inventory;
  const roller = new Roll();

  // Starting wealth is 3d6x2 gp
  const characterStartingWealth = {
    startingCoinPurse: {
      description: `Coin Purse (holds ${roller
        .roll("3d6*2")
        .result.toString()}gp)`,
      slots: "1"
    }
  };

  // Get starting equipment kit based on class.
  const classInventoryKit = sampleSize(
    characterClasses[classOptionKey].inventory,
    1
  )[0];

  // Include starting wealth and kit
  inventory = { ...characterStartingWealth, ...classInventoryKit };

  /**
   * NOTE!!!
   * For classes with uniquely generated random items we
   * add them here (e.g. bard below).
   */

  /**
   * If class is a bard, make sure they have a random
   * instrument.
   */
  if (classOptionKey === "bard") {
    inventory = { ...inventory, instrument: sample(instruments) };
  }

  /**
   * If class is a assassin, make sure they have a random
   * poison.
   */
  if (classOptionKey === "assassin") {
    inventory = { ...inventory, poison: sample(poisons) };
  }

  /**
   * If class is a citizen lich, make sure they have a random
   * disguise item.
   */
  if (classOptionKey === "citizenLich") {
    inventory = { ...inventory, disguiseItem: sample(disguiseItems) };
  }

  /**
   * If class is a gnome, have random chance of burrowing
   * mammal as pet. (50% chance)
   */
  if (classOptionKey === "gnome" && random(1, 2) > 1) {
    inventory = { ...inventory, instrument: sample(burrowingMammals) };
  }

  /**
   * Every class has a slim chance of starting with a random
   * instrument (~16.7% chance)
   */
  if (classOptionKey !== "bard" && random(1, 6) > 5) {
    inventory = { ...inventory, instrument: sample(instruments) };
  }

  // Determine how many equipment slots are currently occupied
  const equipmentCountBeforeRandomItems = getInventorySlotsUsed(inventory);

  /**
   * If class is a underworld ranger, fill their remaining slots
   * with random dungeoneering equipment ONLY.
   */
  if (classOptionKey === "underworldRanger") {
    const underworldRangerRandomItems = sampleSize(
      dungeoneeringEquipment,
      slotsToFill - equipmentCountBeforeRandomItems
    );

    inventory = { ...inventory, ...underworldRangerRandomItems };

    return inventory;
  }

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

  inventory = { ...inventory, ...characterRandomItems };

  return inventory;
};
