import React from "react";
import { GiSwordsEmblem } from "react-icons/gi";
import { fighterInventory } from "../equipmentKits/fighterInventory";

export const fighter = {
  name: "Fighter",
  icon: React.createElement(GiSwordsEmblem, {}),
  requirements: "None",
  primeRequisite: "STR",
  hitDice: "1d8",
  xpToSecondLevel: "2,000 XP",
  maximumLevel: "14",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
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
    "+7",
    "+9",
    "+9"
  ],
  saves: {
    poison: [12, 12, 12, 10, 10, 10, 8, 8, 8, 6, 6, 6, 4, 4],
    wands: [13, 13, 13, 11, 11, 11, 9, 9, 9, 7, 7, 7, 5, 5],
    stone: [14, 14, 14, 12, 12, 12, 10, 10, 10, 8, 8, 8, 6, 6],
    breath: [15, 15, 15, 13, 13, 13, 10, 10, 10, 8, 8, 8, 5, 5],
    magic: [16, 16, 16, 14, 14, 14, 12, 12, 12, 10, 10, 10, 8, 8]
  },
  inventory: fighterInventory,
  abilities: [
    "<strong>Combat:</strong> Fighters can use all forms of weapons and armor.",
    "<strong>Weapon Specialization:</strong> Beginning at level 1 a fighter is specialized at wielding one weapon of their choosing. When attacking with a specialised weapon, the fighter gains a +1 bonus to attack and damage rolls. At 4th, 8th, and 12th level a fighter may choose an additional specialization for a weapon they are not already specialized in using."
  ],
  abilitiesSummary: "Weapon Specialization"
};
