/**
 * Utility function to determine equipment slots for
 * starting characters.
 *
 * We house-rule 18 slots of inventory for each
 * character.
 *
 * Armor takes up more slots:
 * Leather: 2 slots
 * Chain mail: 2 slots
 * Plate mail: 3 slots
 *
 * Some weapons take up more slots:
 * Hand Axe: 2 slots
 * Mace: 2 slots
 * Morning Star: 2 slots
 * Short Bow: 2 slots
 * Spear: 2 slots
 * Sword: 2 slots
 *
 * Battle Axe: 3 slots
 * Crossbow: 3 slots
 * Halberd: 3 slots
 * Long Bow: 3 slots
 * War Hammer: 3 slots
 * Two-Handed Sword: 3 slots
 */
export const getEquipmentSlots = (equipment: string) => {
  let slotCount = equipment.split("\n\n").length;

  /**
   * Leather armor and chain armor only add +1 to count,
   * because we assume they are already counted once in
   * equipment string length above. Plate armor we only
   * add +2 to count for same reason.
   *
   * Therefore, add one less for each of the following items,
   * since they have all been counted once already.
   */
  // Armor
  if (equipment.includes("Leather Armor")) slotCount = slotCount + 1;
  if (equipment.includes("Chain Armor")) slotCount = slotCount + 1;
  if (equipment.includes("Plate Armor")) slotCount = slotCount + 2;

  // 2 slot weapons
  if (equipment.includes("Hand Axe")) slotCount = slotCount + 1;
  if (equipment.includes("Mace")) slotCount = slotCount + 1;
  if (equipment.includes("Morning Star")) slotCount = slotCount + 1;
  if (equipment.includes("Short Bow")) slotCount = slotCount + 1;
  if (equipment.includes("Spear")) slotCount = slotCount + 1;
  if (equipment.includes("Sword")) slotCount = slotCount + 1;

  // 3 slot weapons
  if (equipment.includes("Battle Axe")) slotCount = slotCount + 2;
  if (equipment.includes("Crossbow")) slotCount = slotCount + 2;
  if (equipment.includes("Halberd")) slotCount = slotCount + 2;
  if (equipment.includes("Long Bow")) slotCount = slotCount + 2;
  if (equipment.includes("War Hammer")) slotCount = slotCount + 2;
  if (equipment.includes("Two-Handed Sword")) slotCount = slotCount + 2;

  return `${slotCount}/18`;
};
