import React from "react";
import { GiCrabClaw } from "react-icons/gi";

export const crabPerson = {
  name: "Crab-Person",
  icon: React.createElement(GiCrabClaw, {}),
  requirements: "Minimum STR and CON 9",
  primeRequisite: "STR",
  hitDice: "1d8+1",
  xpToSecondLevel: "2,200 XP",
  maximumLevel: "10",
  allowedArmor: "None",
  allowedWeapons: "None",
  languages: [
    "Alignment (mixture of clicks and gestures), Common (understands, but cannot speak)"
  ],

  attackBonus: ["0", "0", "0", "0", "+2", "+2", "+2", "+2", "+5", "+5"],
  saves: {
    poison: [8, 8, 8, 6, 6, 6, 4, 4, 4, 2],
    wands: [9, 9, 9, 7, 7, 7, 5, 5, 5, 3],
    stone: [10, 10, 10, 8, 8, 8, 6, 6, 6, 4],
    breath: [13, 13, 13, 10, 10, 10, 7, 7, 7, 4],
    magic: [12, 12, 12, 9, 9, 9, 6, 6, 6, 3]
  },
  inventory: {},
  abilities: [
    "<strong>Amphibious:</strong> Crab-people can breathe both air and water.",
    "<strong>Combat:</strong> A crab-person's only attack is with their claws. Crab-people are so strong and their claws so powerful that each successful hit causes <i>double</i> damage: roll to hit as normal and then roll 1d8x2 to determine HP loss.",
    "<strong>Cannot Manipulate Items Requiring Fingers:</strong> Crab-people cannot manipulate magic items, or indeed do anything requiring fingers, and cannot learn how to read or write. They cannot wield weapons.",
    "<strong>Cannot Speak Human Languages:</strong> Crab-people cannot speak human languages, though they can understand what they are told and communicate with clicks and gestures to some degree.",
    "<strong>Natural Armor:</strong> Crab-people have a natural AC of 16 from their tough shells. This improves to 17 at level 3, 18 at level 5, 19 at level 7, and 20 at level 9.",
    "<strong>No Starting Wealth or Equipment:</strong> Crab-people begin the game with no wealth or equipment whatsoever due to their extremely low rank in society."
  ],
  abilitiesSummary:
    "Amphibious, Powerful Claws, Natural Armor, Cannot Speak Human Languages, Cannot Read or Write, No Starting Wealth or Equipment, Cannot Manipulate Items Requiring Fingers"
};
