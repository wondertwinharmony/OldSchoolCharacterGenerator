import React from "react";
import { GiBloodySword, GiDaggers } from "react-icons/gi";
import assassinSkillsTable from "../../static/assassinSkillsTable.png";
import { assassinEquipment } from "../equipmentKits/assassinEquipment";

export const assassin = {
  name: "Assassin",
  icon: React.createElement(GiDaggers, {}),
  skillsIcon: React.createElement(GiBloodySword, {}),
  skillsTable: React.createElement("img", {
    src: assassinSkillsTable,
    style: { width: "22rem", height: "33rem" }
  }),
  requirements: "None",
  primeRequisite: "DEX",
  hitDice: "1d4",
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    "1,500",
    "3,000",
    "6,000",
    "12,000",
    "25,000",
    "50,000",
    "100,000",
    "200,000",
    "300,000",
    "425,000",
    "575,000",
    "750,000",
    "900,000"
  ],
  maximumLevel: "14",
  attackBonus: ["0", "+2", "+5", "+7"],
  allowedArmor: "Leather armor, no shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common", "Thieves' Cant"],
  saves: {
    poison: [13, 12, 10, 8],
    wands: [14, 13, 11, 9],
    stone: [13, 11, 9, 7],
    breath: [16, 14, 12, 10],
    magic: [15, 13, 10, 8]
  },
  equipment: assassinEquipment,
  abilities: [
    "<strong>Assassin Skills:</strong> Assassins have the following skills, which improve as the character gains levels.\n\n<div style='padding: 0 1.5rem'><strong>Assassination:</strong> When attacking an unaware opponent from behind, an assassin gains a +4 bonus to hit. If the attack succeeds, the victim must save versus death with a penalty dependent on the assassin’s level. If the save fails, the victim is instantly killed, otherwise the assassin’s attack inflicts normal damage.\n\n<strong>Climb Sheer Surfaces:</strong> A roll is required for each 100’ to be climbed. If the roll fails, the assassin falls at the half-way point, suffering falling damage.\n\n<strong>Hear Noise:</strong> In a quiet environment (e.g. not in combat), an assassin may attempt to listen at a door or to hear the sounds of something (e.g. a wandering monster) approaching.\n\n<strong>Hide in Shadows:</strong> Requires the assassin to be motionless—attacking or moving while hiding is not possible.\n\n<strong>Move Silently:</strong> An assassin may attempt to sneak past enemies unnoticed.</div>",
    "<strong>Combat:</strong> Assassins cannot wear armor bulkier than leather but may use shields. They can use all types of weapons.",
    "<strong>Disguise:</strong> Characters of any class may don disguises, but assassins are masters of the art—able to create disguises that pass even close scrutiny.\n\n<div style='padding: 0 1.5rem'><strong>Chance of detection:</strong> Each character the assassin meets has a 2% chance of spotting the disguise. This roll is repeated once every subsequent day of meeting.\n\n<strong>Posing as another class, race, or sex:</strong> Increases the chance of being detected by 2% per change.\n\n<strong>Height and weight:</strong> A disguise may alter height (up to 3” shorter or 5” taller) or weight (slightly thinner, much bulkier).</div>",
    "<strong>Hirelings:</strong> Assassins of 1st–3rd level may not employ retainers or hirelings. From 4th level, an assassin may hire other assassins of lower level. From 8th level, an assassin may hire thieves, and from 12th level any type of character.",
    "<strong>Poison:</strong> Victims of a poisoning by an assassin (see <i>Poison</i> in Advanced Fantasy Genre Rules) suffer a –2 penalty to the saving throw."
  ],
  abilitiesSummary:
    "Assassin Skills (assassination, climb sheer surfaces, hear noise, hide in shadows, move silently), Disguise, No Hirelings (before 3rd level), Poison",
  /**
   * @see for "Using a Thief Skill" homebrew rule
   * http://doomslakers.blogspot.com/2019/01/once-again-with-thieves.html
   */
  assassinSkills: [
    "<strong>Assassination (AS), Climb Sheer Surface (CS), Hear Noise (HN), Hide in Shadows (HS), Move Silently (MS)</strong>\n",
    "<strong>Using an Assassin Skill:</strong> The DM will roll skill dice and the thief player will roll an ability check (d20 + DEX modifier) simultaneously. If the skill roll is successful, the assassin has perfectly executed their subtle craft and cannot fail. Otherwise the ability check result is used to determine success or failure. <i>Assassins are exceptional at these skills. Other classes may attempt these skills with only an ability check and usually disadvantage (DM discretion).</i>"
  ]
};
