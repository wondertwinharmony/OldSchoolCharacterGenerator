import React from "react";
import { GiDwarfHelmet } from "react-icons/gi";
import { halflingDwarfDuergarSvirfneblinInventory } from "../equipmentKits/halflingDwarfDuergarSvirfneblinInventory";

export const dwarf = {
  name: "Dwarf",
  icon: React.createElement(GiDwarfHelmet, {}),
  requirements: "Minimum CON 9",
  primeRequisite: "STR",
  hitDice: "1d8",
  xpToSecondLevel: "2,200 XP",
  maximumLevel: "12",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Appropriate to size (no long bows or two-handed swords)",
  languages: ["Alignment", "Common", "Dwarvish", "Gnome", "Goblin", "Kobold"],
  attackBonus: [
    "0",
    "0",
    "0",
    "+2",
    "+2",
    "+2",
    "+5",
    "+5",
    "+5",
    "+7",
    "+7",
    "+7"
  ],
  saves: {
    poison: [8, 8, 8, 6, 6, 6, 4, 4, 4, 2, 2, 2],
    wands: [9, 9, 9, 7, 7, 7, 5, 5, 5, 3, 3, 3],
    stone: [10, 10, 10, 8, 8, 8, 6, 6, 6, 4, 4, 4],
    breath: [13, 13, 13, 10, 10, 10, 7, 7, 7, 4, 4, 4],
    magic: [12, 12, 12, 10, 10, 10, 8, 8, 8, 6, 6, 6]
  },
  inventory: halflingDwarfDuergarSvirfneblinInventory,
  abilities: [
    "<strong>Combat:</strong> Dwarves may use any type of armor, however, due to their short height, may only use small or normal sized weapons. This means that dwarves cannot use long bows or two-handed swords.",
    "<strong>Detect Construction Tricks:</strong> From their experience underground, dwarves have a 2-in-6 chance of detecting false walls, hidden construction, or sloping passages. A dwarf must be actively searching for these abilities to function.",
    "<strong>Detect Traps:</strong> Due to their expertise with construction, dwarves have a 2-in-6 chance of detecting non-magical traps, when searching (see <i>Dungeon Adventuring in Core Rules</i>).",
    "<strong>Infravision:</strong> Due to their habit of living underground in great mines, dwarves have the ability to see in the dark with infravision up to 60’ (see <i>Hazards and Challenges: Darkness in Core Rules</i>).",
    "<strong>Listening at Doors:</strong> Dwarves have a 2-in-6 chance of hearing noises (see <i>Doors, B/X Essentials: Core Rules</i>)."
  ],
  abilitiesSummary:
    "Detect Construction Tricks, Detect Traps, Infravision, Listening at Doors"
};
