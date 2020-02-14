import React from "react";
import { GiCrabClaw } from "react-icons/gi";

export const crabPerson = {
  name: "Crab-Person",
  icon: React.createElement(GiCrabClaw, {}),
  requirements: "Minimum STR and CON 9",
  primeRequisite: "STR",
  hitDice: "1d8+1",
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  experienceLevel: [
    "2,200",
    "4,400",
    "8,800",
    "17,000",
    "35,000",
    "70,000",
    "140,000",
    "270,000",
    "400,000"
  ],
  maximumLevel: "10",
  attackBonus: ["0", "+2", "+5"],
  allowedArmor: "None",
  allowedWeapons: "None",
  languages: [
    "Alignment (mixture of clicks and gestures), Common (understands, but cannot speak)"
  ],
  saves: {
    poison: [8, 6, 4, 2],
    wands: [9, 7, 5, 3],
    stone: [10, 8, 6, 4],
    breath: [13, 10, 7, 4],
    magic: [12, 9, 6, 3]
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
