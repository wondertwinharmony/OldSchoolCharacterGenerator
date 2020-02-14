import React from "react";
import { GiSwordsEmblem } from "react-icons/gi";
import { fighterInventory } from "../equipmentKits/fighterInventory";

export const fighter = {
  name: "Fighter",
  icon: React.createElement(GiSwordsEmblem, {}),
  requirements: "None",
  primeRequisite: "STR",
  hitDice: "1d8",
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    "2,000",
    "4,000",
    "8,000",
    "16,000",
    "32,000",
    "64,000",
    "120,000",
    "240,000",
    "360,000",
    "480,000",
    "600,000",
    "720,000",
    "840,000"
  ],
  maximumLevel: "14",
  attackBonus: ["0", "+2", "+5", "+7", "+9"],
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
  saves: {
    poison: [12, 10, 8, 6, 4],
    wands: [13, 11, 9, 7, 5],
    stone: [14, 12, 10, 8, 6],
    breath: [15, 13, 10, 8, 5],
    magic: [16, 14, 12, 10, 8]
  },
  inventory: fighterInventory,
  abilities: [
    "<strong>Combat:</strong> Fighters can use all forms of weapons and armor.",
    "<strong>Weapon Specialization:</strong> Beginning at level 1 a fighter is specialized at wielding one weapon of their choosing. When attacking with a specialised weapon, the fighter gains a +1 bonus to attack and damage rolls. At 4th, 8th, and 12th level a fighter may choose an additional specialization for a weapon they are not already specialized in using."
  ],
  abilitiesSummary: "Weapon Specialization"
};
