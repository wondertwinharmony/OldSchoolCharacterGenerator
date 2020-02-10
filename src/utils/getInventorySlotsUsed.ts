import { Items } from "../characterData/items";
/**
 * Utility function to determine inventory slots for
 * characters.
 */
export const getInventorySlotsUsed = (inventory: Items) => {
  let slotsUsed = 0;
  Object.keys(inventory).forEach(item => {
    slotsUsed = parseInt(inventory[item].slots) + slotsUsed;
  });

  return slotsUsed;
};
