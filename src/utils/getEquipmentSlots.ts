/**
 * Utility function to determine equipment slots for
 * starting characters.
 *
 * We house rule CON score worth of item slots
 * for each character, or 10 if CON score is less
 * than 10.
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
export const getEquipmentSlots = (equipment: string[]) => {
  let slotCount = equipment.length;
  const equipmentString = equipment.join('')

  /**
   * Leather armor and chainmail only add +1 to count,
   * because we assume they are already counted once in
   * equipment string length above. Plate armor we only
   * add +2 to count for same reason.
   *
   * Therefore, add one less for each of the following items,
   * since they have all been counted once already.
   */
  // Armor
  if (equipmentString.includes("Leather Armor")) slotCount = slotCount + 1;
  if (equipmentString.includes("Chainmail")) slotCount = slotCount + 1;
  if (equipmentString.includes("Plate Armor")) slotCount = slotCount + 2;

  // 2 slot weapons
  if (equipmentString.includes("Hand Axe")) slotCount = slotCount + 1;
  if (equipmentString.includes("Mace")) slotCount = slotCount + 1;
  if (equipmentString.includes("Morning Star")) slotCount = slotCount + 1;
  if (equipmentString.includes("Short Bow")) slotCount = slotCount + 1;
  if (equipmentString.includes("Spear")) slotCount = slotCount + 1;
  if (equipmentString.includes("Sword")) slotCount = slotCount + 1;

  // 3 slot weapons
  if (equipmentString.includes("Battle Axe")) slotCount = slotCount + 2;
  if (equipmentString.includes("Crossbow")) slotCount = slotCount + 2;
  if (equipmentString.includes("Halberd")) slotCount = slotCount + 2;
  if (equipmentString.includes("Long Bow")) slotCount = slotCount + 2;
  if (equipmentString.includes("War Hammer")) slotCount = slotCount + 2;
  if (equipmentString.includes("Two-Handed Sword")) slotCount = slotCount + 2;

  return slotCount
};
