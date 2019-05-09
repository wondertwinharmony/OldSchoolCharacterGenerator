import { fighterEquipment } from "../equipmentKits";

export const dwarf = {
  name: "Dwarf",
  requirements: "Minimum CON 9",
  primeRequisite: "STR",
  hitDice: "1d8",
  maximumLevel: "12",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Small or normal sized (see below)",
  languages: ["Alignment", "Common", "Dwarvish", "Gnome", "Goblin", "Kobold"],
  saves: {
    poison: 10,
    wands: 11,
    stone: 12,
    breath: 13,
    magic: 14
  },
  equipment: fighterEquipment,
  abilities: [
    "<strong>Combat:</strong> Dwarves may use any type of armor, however, due to their short height, may only use small or normal sized weapons. This means that dwarves cannot use longbows or two-handed swords.",
    "<strong>Detect Construction Tricks:</strong> From their experience underground, dwarves have a 2-in-6 chance of detecting false walls, hidden construction, or sloping passages. A dwarf must be actively searching for these abilities to function.",
    "<strong>Detect Traps:</strong> Due to their expertise with construction, dwarves have a 2-in-6 chance of detecting non-magical traps, when searching (see <i>Searching in B/X Essentials: Core Rules</i>).",
    "<strong>Infravision:</strong> Due to their habit of living underground in great mines, dwarves have the ability to see in the dark with infravision up to 60’ (see <i>Light, Vision, and Visibility in B/X Essentials: Core Rules</i>).",
    "<strong>Listening at Doors:</strong> Dwarves have a 2-in-6 chance of hearing noises (see <i>Doors, B/X Essentials: Core Rules</i>)."
  ]
};
