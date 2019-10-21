import React from "react";
import { GiHuntingHorn } from "react-icons/gi";
import { barbarianEquipment } from "../equipmentKits/barbarianEquipment";

export const barbarian = {
  name: "Barbarian",
  icon: React.createElement(GiHuntingHorn, {}),
  requirements: "Minimum DEX 9",
  primeRequisite: "CON and STR",
  hitDice: "1d8",
  xpToSecondLevel: "2,500 XP",
  maximumLevel: "14",
  allowedArmor: "Leather and chainmail armor, shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 10,
    wands: 13,
    stone: 12,
    breath: 15,
    magic: 16
  },
  equipment: barbarianEquipment,
  abilities: [
    "<strong>Agile Fighting:</strong> Upon reaching 4th level, a barbarian gains a +1 AC bonus. This increases to +2 at 6th level, +3 at 8th level, and +4 at 10th level.",
    "<strong>Barbarian Skills:</strong> In the wilderness, barbarians have the following skills, which improve as the character gains levels.\n\n<div style='padding: 0 1.5rem'><strong>Climb Sheer Surfaces:</strong> Only applies to natural surfaces (e.g. tree trunks, cliff faces). A skill roll is required for each 100’ height to be climbed. Failure indicates that the barbarian falls at the halfway point, suffering normal falling damage (1d6 damage per 10’ fallen).\n\n<strong>Hiding:</strong> Requires the barbarian to be motionless—attacking or moving while hiding is not possible.\n\n<strong>Move Silently:</strong> A barbarian may attempt to sneak past enemies unnoticed.</div>",
    "<strong>Combat:</strong> Barbarians can use all types of weapons and can use leather armor, chainmail, and shields.",
    "<strong>Cure Poison:</strong> In the wilderness, a barbarian can gather herbs to concoct an antidote to natural poisons. This takes one turn per character to be cured. Each subject may make a second save versus poison to end the effects.",
    "<strong>Fear of the Arcane:</strong> Barbarians are mistrustful of magic, and will refuse to knowingly use or come under the influence of arcane spells or arcane magic items. Barbarians will accept divine magic associated with their tribal religion.",
    "<strong>Foraging and Hunting:</strong> A party with a barbarian succeeds at foraging with a 2-in-6 chance and finds prey when hunting with a 5-in-6 chance (see <i>Wilderness Adventuring</i> in Core Rules).",
    "<strong>Literacy:</strong> A 1st level barbarian cannot read or write, irrespective of INT score.",
    "<strong>Strike Invulnerable Monsters:</strong> A barbarian of 4th level or higher is able to hit monsters that can normally only be harmed by magic."
  ],
  abilitiesSummary:
    "Agile Fighting, Barbarian Skills (climb sheer surfaces, hiding, move silently), Cure Poison, Fear of the Arcane, Foraging and Hunting, Illiterate (1st level only), Strike Invulnerable Monsters (4th level)",
  /**
   * @see for "Using a Thief Skill" homebrew rule
   * http://doomslakers.blogspot.com/2019/01/once-again-with-thieves.html
   */
  barbarianSkills: [
    "<strong>Climb Sheer Surface (CS), Hiding (HD), Move Silently (MS)</strong>\n",
    "<strong>Using a Barbarian Skill:</strong> The DM will roll skill dice and the barbarian player will roll an ability check (d20 + DEX modifier) simultaneously. If the skill roll is successful, the barbarian has perfectly executed their subtle craft and cannot fail. Otherwise the ability check result is used to determine success or failure. <i>Barbarianss are exceptional at these skills. Other classes may attempt these skills with only an ability check and usually disadvantage (DM discretion).</i>"
  ]
};
