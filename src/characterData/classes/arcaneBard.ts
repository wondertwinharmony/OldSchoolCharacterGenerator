import React from "react";
import { GiOcarina, GiReceiveMoney } from "react-icons/gi";
import bardSkillsTable from "../../static/bardSkillsTable.png";
import { CastingMethod, SpellList } from "../classes";
import { bardInventory } from "../equipmentKits/bardInventory";

export const arcaneBard = {
  name: "Arcane Bard",
  icon: React.createElement(GiOcarina, {}),
  skillsIcon: React.createElement(GiReceiveMoney, {}),
  skillsTable: React.createElement("img", {
    src: bardSkillsTable,
    style: { width: "25rem", height: "33rem" }
  }),
  castingMethod: "arcane" as CastingMethod,
  spellList: "magicUser" as SpellList,
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
  requirements: "Minimum INT 9",
  primeRequisite: "CHA and DEX",
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
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Spell Casting:</strong> From 2nd level, bards can cast arcane spells, owning a spell book in which the magical formulae for the spells they know are recorded. The level progression table shows both the number of spells in the bard's spell book and the number they may memorize, determined by the character’s experience level. A bard's spells are selected by the referee (who may allow the player to choose). The list of spells available to bards is provided in <i>Old-School Essentials</i> (bards have the same spell selection as magic-users.\n\n<strong>Using Magic Items:</strong> As spell casters, bards are able to use magic scrolls of spells on their spell list. They can also use items that may only be used by arcane spell casters (e.g. magic wands).</div>",
    "<strong>Bard Skills:</strong> Bards can use the following skills, with the chance of success shown on the Bard Chances of Success table:\n\n<div style='padding: 0 1.5rem'><strong>Climb Sheer Surfaces:</strong> A roll is required for each 100’ to be climbed. If the roll fails, the bard falls at the halfway point, suffering falling damage. This skill may not be used if the bard is wearing chainmail.\n\n<strong>Hear Noise:</strong> In a quiet environment (e.g. not in combat), a bard may attempt to listen at a door or to hear the sounds of something (e.g. a wandering monster) approaching.\n\n<strong>Pick Pockets:</strong> If the victim is above 5th level, the bard’s roll is penalised by 5% for every level above 5th. There is always at least a 1% chance of failure. A roll of more than twice the percentage required for success means that the attempted theft is noticed. The referee should determine the reaction of the victim (possibly using the reaction table under <i>Encounters</i>, in <i>Old-School Essentials</i>).\n\n<strong>Read Languages:</strong> A bard can read non-magical texts in unknown languages (including dead languages and basic codes). If the roll does not succeed, the bard may not try to read that particular text again until they reach a higher level of experience.</div>",
    "<strong>Combat:</strong> Bards can use leather armor or chainmail, but do not have the training required to use plate mail or shields. They may use all missile weapons and any one-handed melee weapon.",
    "<strong>Lore:</strong> From 2nd level, a bard has a 2-in-6 chance of knowing lore pertaining to monsters, magic items, or heroes of folktale or legend. This ability may be used to identify the nature and powers of magic items."
  ],
  abilitiesSummary: "Anti-Charm, Arcane Magic (2nd level), Bard Skills (climb sheer surfaces, hear noise, pick pockets, read languages), Lore",
    /**
   * @see for "Using a Thief Skill" homebrew rule
   * http://doomslakers.blogspot.com/2019/01/once-again-with-thieves.html
   */
  arcaneBardSkills: [
    "<strong>Climb Sheer Surface (CS), Hear Noise (HN), Pick Pockets (PP), Read Languages (RL)</strong>\n",
    "<strong>Using a Bard Skill:</strong> The DM will roll skill dice and bard player will roll an ability check (d20 + DEX modifier) simultaneously. If the skill roll is successful, bard has perfectly executed their subtle craft and cannot fail. Otherwise the ability check result is used to determine success or failure. <i>Thieves are exceptional at these skills. Other classes may attempt these skills with only an ability check and usually disadvantage (DM discretion).</i>"
  ]
};
