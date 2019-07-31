import React from "react";
import { GiCompass } from "react-icons/gi";
import { rangerEquipment } from "../equipmentKits";

export const ranger = {
  name: "Ranger",
  icon: React.createElement(GiCompass, {}),
  requirements: "Minimum CON 9 and WIS 9",
  primeRequisite: "STR",
  hitDice: "1d8",
  xpToSecondLevel: "2,250 XP",
  maximumLevel: "14",
  allowedArmor: "Leather and chainmail armor, shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 12,
    wands: 13,
    stone: 14,
    breath: 15,
    magic: 16
  },
  equipment: rangerEquipment,
  abilities: [
    "<strong>Alignment:</strong> As protectors, rangers may only be lawful or neutral. If a ranger ever changes alignment to chaotic, they lose all special class abilities and become a fighter of the same level. The character may be able to regain their ranger status by performing a special quest.",
    "<strong>Awareness:</strong> Rangers are only surprised on a roll of 1. This may mean that a ranger is able to act in the surprise round while their companions are surprised.",
    "<strong>Combat:</strong> Rangers can use all types of weapons and can use leather armor, chainmail, and shields. Because of their need for stealth and mobility, they cannot use plate mail.",
    "<strong>Divine Magic:</strong> See <i>Magic in Core Rules</i> for full details on divine magic.\n\n<div style='padding: 0 1.5rem'><strong>Spell Casting:</strong> From 8th level, due to a deep connection with nature, a ranger gains the ability to cast spells. The power and number of spells available to a ranger are determined by the character’s experience level. The list of spells available to rangers is found in <i>Druid and Illusionist Spells</i> (rangers have the same spell selection as druids).</div>",
    "<strong>Pursuit:</strong> When an opposing group attempts to evade the ranger’s party in the wilderness (see <i>Evasion and Pursuit, in Core Rules</i>), the chance of evasion is reduced by 10%.",
    "<strong>Limited Possessions:</strong> A ranger may only keep wealth and possessions that can be kept on their person (or mount). Excess must be donated to worthy causes (not other PCs!).",
    "<strong>Stealth:</strong> In the wilderness, rangers have a 3-in-6 chance of moving silently.",
    "<strong>Tracking:</strong> Rangers can track in both outdoor and indoor environments. This skill improves as the character gains levels (see the tracking table). Success is modified by the factors listed along with the table. The tracking skill may be used as follows:\n\n<div style='padding: 0 1.5rem'>• <strong>Follow tracks indoors:</strong> Only possible when the ranger observed the creature to be tracked in the location where the tracking begins, at most 3 turns ago.\n\n• <strong>Follow tracks outdoors:</strong> Can be attempted whenever tracks are discovered.\n\n• <strong>Identify tracks:</strong> The ranger can identify the tracks of woodland creatures, their number, direction and speed of travel, and the time since the tracks were made. Rangers of 7th level or higher are also able to identify the tracks of non-woodland creatures.</div>"
  ],
  abilitiesSummary:
    "Alignment (non-chaotic required), Awareness, Divine Magic (8th level), Pursuit, Limited Possessions, Stealth, Tracking"
};
