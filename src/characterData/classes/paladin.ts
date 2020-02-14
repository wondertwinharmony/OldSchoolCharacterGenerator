import React from "react";
import { GiTemplarShield } from "react-icons/gi";
import { CastingMethod, SpellList } from "../classes";
import { paladinInventory } from "../equipmentKits/paladinInventory";

export const paladin = {
  name: "Paladin",
  icon: React.createElement(GiTemplarShield, {}),
  castingMethod: "divine" as CastingMethod,
  spellList: "cleric" as SpellList,
  spellMatrix: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
    [2, 0, 0],
    [2, 1, 0],
    [2, 2, 0],
    [2, 2, 1],
    [3, 2, 1]
  ],
  requirements: "Minimum CHA 9",
  primeRequisite: "STR and WIS",
  hitDice: "1d8",
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    "2,750",
    "5,500",
    "12,000",
    "24,000",
    "45,000",
    "95,000",
    "175,000",
    "350,000",
    "500,000",
    "650,000",
    "800,000",
    "950,000",
    "1,100,000"
  ],
  maximumLevel: "14",
  attackBonus: ["0", "+2", "+5", "+7", "+9"],
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
  saves: {
    poison: [10, 8, 6, 4, 2],
    wands: [11, 9, 7, 5, 3],
    stone: [12, 10, 8, 6, 4],
    breath: [13, 10, 8, 6, 3],
    magic: [14, 12, 10, 8, 6]
  },
  inventory: paladinInventory,
  abilities: [
    "<strong>Alignment:</strong> A paladin must be lawful.If the character’s alignment ever changes (for any reason), they lose all class abilities and becomes a fighter of the same level. The referee may allow the character to perform a quest of atonement in order to regain their status as a paladin.",
    "<strong>Combat:</strong> Paladins can use all types of weapons and armour.",
    "<strong>Divine Magic:</strong> See <i>Magic in Core Rules</i> for full details on divine magic.\n\n<div style='padding: 0 1.5rem'><strong>Holy Symbol:</strong> A paladin must carry a holy symbol (see the equipment list.\n\n<strong>Deity Disfavor:</strong> Paladins must be faithful to the tenets of their religion. Paladins who fall from favour with their deity may incur penalties.\n\n<strong>Spell Casting:</strong> From 9th level, a paladin may pray to receive spells. The power and number of spells available to a paladin are determined by the character’s experience level. The list of spells available to paladins is found in <i>Cleric and Magic-User Spells</i> (paladins have the same spell selection as clerics).</div>",
    "<strong>Holy Resistance:</strong> Paladins are immune to all disease.",
    "<strong>Laying on Hands:</strong> Once per day, a paladin can heal 2 hit points per level by laying their hands on wounded characters. Additionally, a paladin of 5th level or higher may cure disease once per week by laying on hands.",
    "<strong>Turning the Undead:</strong> Paladins of 3rd level and higher can invoke the power of their deity to repel undead monsters encountered. To turn the undead, the player rolls 2d6. The referee then consults the turning table, comparing the roll against the Hit Dice of the undead monsters targeted.\n\n<strong>Successful Turning</strong>\n  If the turning attempt succeeds, the player must roll 2d6 to determine the number of HD of undead monsters affected.\n\n  <div style='padding: 0 1.5rem'>• <strong>Turned undead:</strong> Will leave the area, if possible, and will not harm or make contact with the paladin.\n\n• <strong>Destroyed undead (result of D):</strong> Are instantly and permanently annihilated.\n\n• <strong>Mixed groups:</strong> If turn undead is used against a mixed group of undead monsters of different types, those with the lowest HD are affected first.</div>",
    "<strong>Vow of Humility:</strong> A paladin must donate 10% of all income to a Lawful religious institution, and may keep only a total of one suit of magical armor, one magical shield, and one magical melee weapon.",
    "<strong>Warhorse:</strong> A paladin of 4th level or higher may summon a holy charger—a warhorse with AC 5 [14], 5+5 HD, and a movement rate of 180’ (60’). If the horse dies, another may not be summoned for 10 years."
  ],
  abilitiesSummary:
    "Alignment (lawful required), Divine Magic (9th level), Holy Resistance, Laying on Hands, Turning the Undead (3rd level), Vow of Humility, Warhorse",
  paladinTurn:
    "* 2 HD monsters with a special ability (i.e. with an asterisk next to their HD rating, in the monster description)."
};
