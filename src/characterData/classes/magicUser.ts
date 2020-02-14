import React from "react";
import { GiSpellBook } from "react-icons/gi";
import { CastingMethod, SpellList } from "../classes";
import { magicUserInventory } from "../equipmentKits/magicUserInventory";

export const magicUser = {
  name: "Magic-User",
  icon: React.createElement(GiSpellBook, {}),
  castingMethod: "arcane" as CastingMethod,
  spellList: "magicUser" as SpellList,
  spellMatrix: [
    [1, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [2, 1, 0, 0, 0, 0],
    [2, 2, 0, 0, 0, 0],
    [2, 2, 1, 0, 0, 0],
    [2, 2, 2, 0, 0, 0],
    [3, 2, 2, 1, 0, 0],
    [3, 3, 2, 2, 0, 0],
    [3, 3, 3, 2, 1, 0],
    [3, 3, 3, 3, 2, 0],
    [4, 3, 3, 3, 2, 1],
    [4, 4, 3, 3, 3, 2],
    [4, 4, 4, 3, 3, 3],
    [4, 4, 4, 4, 3, 3]
  ],
  requirements: "None",
  primeRequisite: "INT",
  hitDice: "1d4",
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    "2,500",
    "5,000",
    "10,000",
    "20,000",
    "40,000",
    "80,000",
    "150,000",
    "300,000",
    "450,000",
    "600,000",
    "750,000",
    "900,000",
    "1,050,000"
  ],
  maximumLevel: "14",
  attackBonus: ["0", "+2", "+5"],
  allowedArmor: "None",
  allowedWeapons: "Daggers and staves only",
  languages: ["Alignment", "Common"],
  saves: {
    poison: [13, 11, 8],
    wands: [14, 12, 9],
    stone: [13, 11, 8],
    breath: [16, 14, 11],
    magic: [15, 12, 8]
  },
  inventory: magicUserInventory,
  abilities: [
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Magical Research:</strong> A magic-user of any level may spend time and money to research new spells to add to his or her spell book. When a magic-user reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell Casting:</strong> Magic-users carry spell books containing the formulae for arcane spells. A 1st level magic-user has one spell in his or her spell book. The list of spells available to magic-users is found on <i>Magic-User and Cleric Spells</i>.\n\n<strong>Using Magic Items:</strong> As spell casters, magic-users are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by arcane spell casters (including magic-users).</div>",
    "<strong>Combat:</strong> Magic-users may only use daggers and staves, and are unable to use shields or wear any kind of armor. This makes them very vulnerable in combat."
  ],
  abilitiesSummary: "Arcane Magic",
  spells: "see MagicUser spells"
};
