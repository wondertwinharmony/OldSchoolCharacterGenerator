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
  const equipmentString = equipment.join("");

  /**
   * Leather armor and chainmail only add +1 to count,
   * because we assume they are already counted once in
   * equipment string length above. Plate armor we only
   * add +2 to count for same reason.
   *
   * Therefore, add one less for each of the following items,
   * since they have all been counted once already.
   *
   * NOTE: Keep strong tags or count will get mixed up by similarly
   * named items -> e.g. 'Sword' vs 'Two-Handed Sword'
   */
  // Armor
  if (equipmentString.includes("<strong>Leather Armor</strong>"))
    slotCount = slotCount + 1;
  if (equipmentString.includes("<strong>Chainmail</strong>"))
    slotCount = slotCount + 1;
  if (equipmentString.includes("<strong>Plate Armor</strong>"))
    slotCount = slotCount + 2;

  // 2 slot weapons
  if (equipmentString.includes("<strong>Hand Axe</strong>"))
    slotCount = slotCount + 1;
  if (equipmentString.includes("<strong>Mace</strong>"))
    slotCount = slotCount + 1;
  if (equipmentString.includes("<strong>Morning Star</strong>"))
    slotCount = slotCount + 1;
  if (equipmentString.includes("<strong>Short Bow</strong>"))
    slotCount = slotCount + 1;
  if (equipmentString.includes("<strong>Spear</strong>"))
    slotCount = slotCount + 1;
  if (equipmentString.includes("<strong>Short Sword</strong>"))
    slotCount = slotCount + 1;
  if (equipmentString.includes("<strong>Sword</strong>"))
    slotCount = slotCount + 1;

  // 3 slot weapons
  if (equipmentString.includes("<strong>Battle Axe</strong>"))
    slotCount = slotCount + 2;
  if (equipmentString.includes("<strong>Crossbow</strong>"))
    slotCount = slotCount + 2;
  if (equipmentString.includes("<strong>Halberd</strong>"))
    slotCount = slotCount + 2;
  if (equipmentString.includes("<strong>Long Bow</strong>"))
    slotCount = slotCount + 2;
  if (equipmentString.includes("<strong>War Hammer</strong>"))
    slotCount = slotCount + 2;
  if (equipmentString.includes("<strong>Two-Handed Sword</strong>"))
    slotCount = slotCount + 2;

  return slotCount;
};
