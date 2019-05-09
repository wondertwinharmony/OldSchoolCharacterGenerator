import { fighterEquipment } from "../equipmentKits";

export const fighter = {
  name: "Fighter",
  requirements: "None",
  primeRequisite: "STR",
  hitDice: "1d8",
  maximumLevel: "14",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 12,
    wands: 13,
    stone: 14,
    breath: 15,
    magic: 16
  },
  equipment: fighterEquipment,
  abilities: [
    "<strong>Combat:</strong> Fighters can use all forms of weapons and armor."
  ]
};
