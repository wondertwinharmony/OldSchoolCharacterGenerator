import React from "react";
import { GiLyre } from "react-icons/gi";
import { CastingMethod, SpellList } from "../classes";
import { bardInventory } from "../equipmentKits/bardInventory";

export const bard = {
  name: "Bard",
  icon: React.createElement(GiLyre, {}),
  castingMethod: "divine" as CastingMethod,
  spellList: "druid" as SpellList,
  spellMatrix: [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [2, 0, 0, 0],
    [3, 0, 0, 0],
    [3, 1, 0, 0],
    [3, 2, 0, 0],
    [3, 3, 0, 0],
    [3, 3, 1, 0],
    [3, 3, 2, 0],
    [3, 3, 3, 0],
    [3, 3, 3, 1],
    [3, 3, 3, 2],
    [3, 3, 3, 3],
    [4, 4, 3, 3]
  ],
  requirements: "Minimum DEX 9 and INT 9",
  primeRequisite: "CHA",
  hitDice: "1d6",
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
  allowedArmor: "Leather, chainmail, no shields",
  allowedWeapons: "Missile weapons, one-handed melee weapons",
  languages: ["Alignment", "Common"],
  attackBonus: [
    "0",
    "0",
    "0",
    "0",
    "+2",
    "+2",
    "+2",
    "+2",
    "+5",
    "+5",
    "+5",
    "+5",
    "+7",
    "+7"
  ],
  saves: {
    poison: [13, 13, 13, 13, 12, 12, 12, 12, 10, 10, 10, 10, 8, 8],
    wands: [14, 14, 14, 14, 13, 13, 13, 13, 11, 11, 11, 11, 9, 9],
    stone: [13, 13, 13, 13, 11, 11, 11, 11, 9, 9, 9, 9, 7, 7],
    breath: [16, 16, 16, 16, 14, 14, 14, 14, 12, 12, 12, 12, 10, 10],
    magic: [15, 15, 15, 15, 13, 13, 13, 13, 10, 10, 10, 10, 8, 8]
  },
  inventory: bardInventory,
  abilities: [
    "<strong>Anti-Charm:</strong> While the bard plays music and sings, allies within 30’ are immune to song-based magical effects and the beguiling powers of sylvan creatures or fairies. Allies already under the effect of such magic may make another saving throw with a +4 bonus.",
    "<strong>Combat:</strong> Bards can use leather armor or chainmail, but do not have the training required to use plate mail or shields. They may use all missile weapons and any one-handed melee weapon.",
    "<strong>Divine Magic:</strong> See <i>Magic in Core Rules, p42</i> for full details on divine magic.\n\n<div style='padding: 0 1.5rem'><strong>Deity disfavor:</strong> Bards must be faithful to the tenets of their alignment and religion. Bards who fall from favor with their deity may incur penalties.\n\n<strong>Spell casting:</strong> Once a bard has proven their faith (from 2nd level), the character may pray to receive spells. The power and number of spells available to a bard are determined by the character’s experience level. The list of spells available to bards is found in <i>Druid and Illusionist Spells</i> (bards have the same spell selection as druids).\n\n<strong>Using magic items:</strong> As spell casters, bards can use magic scrolls of spells on their spell list. They may also use any items that only druids can use.</div>",
    "<strong>Enchantment:</strong> By playing music and singing, the bard can fascinate subjects in a 30’ radius. This ability does not function in combat.<div style='padding: 0 1.5rem'>\n\n<strong>Number of subjects:</strong> Up to 2HD of creatures per level of the bard are affected. The bard may choose to target a specific individual or a group (in which case, the affected individuals are determined randomly).\n\n<strong>Type of subjects:</strong> At 1st level, the bard can fascinate persons. At 4th level, animals may also be affected. At 7th level, monsters may be affected.\n\n<strong>Effect:</strong> Each subject must save versus spells or be fascinated, as follows:<div style='padding: 0 1.5rem'>\n\n<strong>Rapt:</strong> Fascinated subjects’ attention is fully bent on the bard’s performance, as long as it continues.\n\n<strong>Follow:</strong> The bard may walk while playing. Fascinated subjects will follow.\n\n<strong>Interruptions:</strong>  If the performance is interrupted (e.g. by loud noise or violence), the fascination ends immediately.</div>\n\n<strong>Charming Fascinated Subjects:</strong> If the bard performs for at least one turn and the performance ends without interruption, fascinated subjects may be placed under a deeper charm. Each subject must make another save versus spells (with a +2 bonus) or be charmed for one turn per level of the bard:\n\n<div style='padding: 0 1.5rem'><strong>Friendship:</strong> Charmed subjects regard the bard as a trusted friend and ally and will come to the bard’s defence\n\n<strong>Commands:</strong>  If they share a language, charmed subjects will obey the bard’s commands.\n\n<strong>Alignment:</strong> Commands that contradict the charmed creature’s nature or alignment may be ignored.\n\n<strong>Suicidal commands:</strong> Charmed subjects never obey suicidal or obviously harmful orders.</div>",
    "<strong>Languages:</strong> Bards learn new languages as they advance in level. At every even numbered level above 3rd (i.e. 4th, 6th, 8th, etc.), the player may choose an additional language. Bards may learn the secret tongue of druids in this way (see Advanced Fantasy Player's Tome, p40).",
    "<strong>Lore:</strong> From 2nd level, a bard has a 2-in-6 chance of knowing lore pertaining to monsters, magic items, or heroes of folktale or legend. This ability may be used to identify the nature and powers of magic items."
  ],
  abilitiesSummary: "Anti-Charm, Divine Magic (2nd level), Enchantment, Languages, Lore"
};
