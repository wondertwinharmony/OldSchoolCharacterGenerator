import React from "react";
import { GiDwarfHelmet } from "react-icons/gi";
import { fighterEquipment } from "../equipmentKits/fighterEquipment";

export const dwarf = {
  name: "Dwarf",
  icon: React.createElement(GiDwarfHelmet, {}),
  requirements: "Minimum CON 9",
  primeRequisite: "STR",
  hitDice: "1d8",
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    "2,200",
    "4,400",
    "8,800",
    "17,000",
    "35,000",
    "70,000",
    "140,000",
    "270,000",
    "400,000",
    "530,000",
    "660,000"
  ],
  maximumLevel: "12",
  attackBonus: ["0", "+2", "+5", "+7"],
  allowedArmor: "Any, including shields",
  allowedWeapons: "Appropriate to size (no long bows or two-handed swords)",
  languages: ["Alignment", "Common", "Dwarvish", "Gnome", "Goblin", "Kobold"],
  saves: {
    poison: [8, 6, 4, 2],
    wands: [9, 7, 5, 3],
    stone: [10, 8, 6, 4],
    breath: [13, 10, 7, 4],
    magic: [12, 10, 8, 6]
  },
  equipment: fighterEquipment,
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
