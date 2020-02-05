import React from "react";
import { GiBodyBalance, GiTightrope } from "react-icons/gi";
import acrobatSkillsTable from "../../static/acrobatSkillsTable.png";
import { acrobatInventory } from "../equipmentKits/acrobatInventory";

export const acrobat = {
  name: "Acrobat",
  icon: React.createElement(GiBodyBalance, {}),
  skillsIcon: React.createElement(GiTightrope, {}),
  skillsTable: React.createElement("img", {
    src: acrobatSkillsTable,
    style: { width: "22rem", height: "33rem" }
  }),
  requirements: "None",
  primeRequisite: "DEX",
  hitDice: "1d4",
  xpToSecondLevel: "1,200 XP",
  maximumLevel: "14",
  allowedArmor: "Leather armor, no shields",
  allowedWeapons: "All missiles, light blades, and staff-weapons",
  languages: ["Alignment", "Common", "Thieves' Cant"],
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  inventory: acrobatInventory,
  equipment: [["string"]],
  abilities: [
    "<strong>Acrobat Skills:</strong> Acrobats have the following skills, which improve as the character gains levels. Evasion, falling, jumping, and tightrope walking cannot be performed if encumbered.\n\n<div style='padding: 0 1.5rem'><strong>Climb Sheer Surfaces:</strong> A roll is required for each 100’ to be climbed. If the roll fails, the acrobat falls at the half-way point, suffering falling damage.\n\n<strong>Falling:</strong> When able to tumble, acrobats suffer no damage from the first 10’ of any fall. Damage due to falling from a greater height is reduced by the listed percentage (rounding fractions down).\n\n<strong>Hide in Shadows:</strong> Requires the acrobat to be motionless—attacking or moving while hiding is not possible.\n\n<strong>Move Silently:</strong> An acrobat may attempt to sneak past enemies unnoticed.\n\n<strong>Tightrope Walking:</strong> Acrobats can walk along tightropes, narrow beams, and ledges at up to half their normal rate. A roll is required every 60’. Failure indicates that the acrobat falls and suffers normal falling damage. Windy conditions may modify the chance of success by up to –20%. Holding a balance pole increases the chance of success by 10%.</div>",
    "<strong>Combat:</strong> Acrobats cannot wear armor bulkier than leather and cannot use shields. They are able to use all missile weapons, one-handed blades (e.g. daggers, swords), and staff-weapons (e.g. polearms, spears, staves).",
    "<strong>Evasion:</strong> When retreating from melee, an acrobat’s ability to tumble negates the opponent’s usual +2 bonus to hit.",
    "<strong>Jumping:</strong> With a 20’ run-up, an acrobat can jump across a 10’ wide pit or chasm (or 20’ wide when aided by the use of a pole). Also when using a pole, an acrobat can jump over a 10’ high wall or onto a 10’ high ledge. Suitable poles for jumping include: 10’ poles, polearms, spears, staves.",
    "<strong>Tumbling Attack:</strong> Using the falling or jumping abilities, an acrobat can make a tumbling leap culminating in a melee attack. The attack inflicts double damage if successful. Against an unaware opponent, the acrobat also gains a +4 bonus to hit."
  ],
  abilitiesSummary:
    "Acrobat Skills (climb sheer surfaces, falling, hide in shadows, move silently, tightrope walking), Evasion, Jumping, Tumbling Attack",
  /**
   * @see for "Using a Thief Skill" homebrew rule
   * http://doomslakers.blogspot.com/2019/01/once-again-with-thieves.html
   */
  acrobatSkills: [
    "<strong>Climb Sheer Surface (CS), Falling (FA), Hide in Shadows (HS), Move Silently (MS), Tightrope Walking (TW)</strong>\n",
    "<strong>Using an Acrobat Skill:</strong> The DM will roll skill dice and the acrobat player will roll an ability check (d20 + DEX modifier) simultaneously. If the skill roll is successful, the acrobat has perfectly executed their subtle craft and cannot fail. Otherwise the ability check result is used to determine success or failure. <i>Acrobats are exceptional at these skills. Other classes may attempt these skills with only an ability check and usually disadvantage (DM discretion).</i>"
  ]
};
