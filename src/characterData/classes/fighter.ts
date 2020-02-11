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
  saves: {
    poison: 12,
    wands: 13,
    stone: 14,
    breath: 15,
    magic: 16
  },
  inventory: fighterInventory,
  abilities: [
    "<strong>Combat:</strong> Fighters can use all forms of weapons and armor.",
    "<strong>Weapon Specialization:</strong> Beginning at level 1 a fighter is specialized at wielding one weapon of their choosing. When attacking with a specialised weapon, the fighter gains a +1 bonus to attack and damage rolls. At 4th, 8th, and 12th level a fighter may choose an additional specialization for a weapon they are not already specialized in using."
  ],
  abilitiesSummary: "Weapon Specialization"
};
