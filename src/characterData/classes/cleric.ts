import React from "react";
import { GiSpikedMace } from "react-icons/gi";
import { CastingMethod, SpellList } from "../classes";
import { clericInventory } from "../equipmentKits/clericInventory";

export const cleric = {
  name: "Cleric",
  icon: React.createElement(GiSpikedMace, {}),
  castingMethod: "divine" as CastingMethod,
  spellList: "cleric" as SpellList,
  spellMatrix: [
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [2, 0, 0, 0, 0],
    [2, 1, 0, 0, 0],
    [2, 2, 0, 0, 0],
    [2, 2, 1, 1, 0],
    [2, 2, 2, 1, 1],
    [3, 3, 2, 2, 1],
    [3, 3, 3, 2, 2],
    [4, 4, 3, 3, 2],
    [4, 4, 4, 3, 3],
    [5, 5, 4, 4, 3],
    [5, 5, 5, 5, 4],
    [6, 5, 5, 5, 4]
  ],
  requirements: "None",
  primeRequisite: "WIS",
  hitDice: "1d6",
  xpToSecondLevel: "1,500 XP",
  maximumLevel: "14",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any blunt weapons",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 11,
    wands: 12,
    stone: 14,
    breath: 16,
    magic: 15
  },
  inventory: clericInventory,
  abilities: [
    "<strong>Combat:</strong> Strict holy doctrine prevents clerics’ use of weapons that have a sharp, cutting edge or stabbing point. Weapons usable by clerics are noted in the equipment list.",
    "<strong>Divine Magic:</strong> See <i>Magic in Core Rules</i> for full details on divine magic.\n\n<div style='padding: 0 1.5rem'><strong>Holy Symbol:</strong> A cleric must carry a holy symbol (see the equipment list.\n\n<strong>Deity Disfavor:</strong> Clerics must be faithful to the tenets of their alignment, clergy, and religion. Clerics who fall from favor with their deity may incur penalties.\n\n<strong>Magical Research:</strong> A cleric of any level may spend time and money to research new spells associated with his or her deity. When a cleric reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell Casting:</strong> Once a cleric has proven his or her faith (from 2nd level), the character may pray to receive spells. The power and number of spells available to a cleric are determined by the character’s experience level. The list of spells available to clerics is found in <i>Cleric and Magic-User Spells</i>.\n\n<strong>Using Magic Items:</strong> As spell casters, clerics can use magic scrolls of spells on their spell list. There are also items (e.g. some staves) that may only be used by divine spell casters (including clerics).</div>",
    "<strong>Turning the Undead:</strong> Clerics can invoke the power of their deity to repel undead monsters encountered. To turn the undead, the player rolls 2d6. The referee then consults the turning table, comparing the roll against the Hit Dice of the undead monsters targeted.\n\n<strong>Successful Turning</strong>\n  If the turning attempt succeeds, the player must roll 2d6 to determine the number of HD of undead monsters affected.\n\n  <div style='padding: 0 1.5rem'>• <strong>Minimum effect:</strong> At least one undead creature will always be turned or destroyed on a successful turning.\n\n• <strong>Turned undead:</strong> Will leave the area, if possible, and will not harm or make contact with the cleric.\n\n• <strong>Destroyed undead (result of D):</strong> Are instantly and permanently annihilated.\n\n• <strong>Mixed groups:</strong> If turn undead is used against a mixed group of undead monsters of different types, those with the lowest HD are affected first.</div>  "
  ],
  abilitiesSummary: "Divine Magic (2nd level), Turning the Undead",
  clericTurn:
    "* 2 HD monsters with a special ability (i.e. with an asterisk next to their HD rating, in the monster description)."
};
