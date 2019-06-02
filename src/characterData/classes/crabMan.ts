import React from "react";
import { GiCrabClaw } from "react-icons/gi";

export const crabMan = {
  name: "Crab-Man",
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
  saves: {
    poison: 8,
    wands: 9,
    stone: 10,
    breath: 13,
    magic: 12
  },
  equipment: [["None"]],
  abilities: [
    "<strong>Combat:</strong> A crab-man's only attack is with his claws. Crab-men are so strong and their claws so powerful that each successful hit causes <i>double</i> damage: roll to hit as normal and then roll 1d8x2 to determine HP loss.",
    "<strong>Natural Armor:</strong> Crab-men have a natural AC of 16 from their tough shells. This improves to 17 at level 3, 18 at level 5, 19 at level 7, and 20 at level 9.",
    "<strong>Cannot Speak Human Languages:</strong> Crab-men cannot speak human languages, though they can understand what they are told and communicate with clicks and gestures to some degree.",
    "<strong>No Starting Wealth or Equipment:</strong> Crab-men begin the game with no wealth or equipment whatsoever due to their extremely low rank in society.",
    "<strong>Cannot Manipulate Items Requiring Fingers:</strong> Crab-men cannot manipulate magic items, or indeed do anything requiring fingers, and cannot learn how to read or write. They cannot wield weapons."
  ],
  abilitiesSummary:
    "Powerful Claws, Natural Armor, Cannot Speak Human Languages, Cannot Read or Write, No Starting Wealth or Equipment, Cannot Manipulate Items Requiring Fingers"
};