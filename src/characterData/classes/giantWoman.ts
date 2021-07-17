import React from "react";
import { GiSwordwoman } from "react-icons/gi";
import { fighterInventory } from "../equipmentKits/fighterInventory";

export const giantWoman = {
  name: "Giant Woman",
  icon: React.createElement(GiSwordwoman, {}),
  requirements: "Minimum STR 13 and CON 9",
  primeRequisite: "STR",
  hitDice: "1d10",
  hitDiceCount: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "9",
    "9",
    "9",
    "9",
    "9"
  ],
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
    "840,000",
    "Max Level"
  ],
  maximumLevel: "14",
  allowedArmor: "Any appropriate to size, including shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common", "Giant Woman"],
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
    "<strong>Combat:</strong> Giant women can use all forms of weapons and armor.",
    "<strong>Great Strength:</strong> Since all giant women are muscular, and some astonishingly so, they make for extremely valuable adventuring companions.\n\n<div style='padding: 0 1.5rem'>• Feats of strength that would give a skilled and atheletic human warrior pause are easily completed by giant women (e.g. lifting a heavy cart, moving large stones).\n\n• The powerful build of giant women allow them to ignore the two-handed rule for all melee weapons, allowing them to dual wield two-handed weapons or use a shield with a two-handed weapon. Giant women are still susceptible to the \"Attacking with Two Weapons\" optional rules.</div>",
    "<strong>Enormous Physique:</strong> Due to their unconventional size, giant women require special considerations when living in human society. Armor, clothing, food, lodging, etc. all cost double their normal prices for a giant woman.",
  ],
  abilitiesSummary: "Great Strength (feats of strength, ignore two-handed weapon property), Enormous Physique (size increases item/service cost)"
};
