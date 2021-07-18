import React from "react";
import { GiFeline, GiTigerHead } from "react-icons/gi";
import catPersonSkillsTable from "../../static/catPersonSkillsTable.png";
import { catPersonInventory } from "../equipmentKits/catPersonInventory";

export const catPerson= {
  name: "Cat Person",
  icon: React.createElement(GiTigerHead, {}),
  skillsIcon: React.createElement(GiFeline, {}),
  skillsTable: React.createElement("img", {
    src: catPersonSkillsTable,
    style: { width: "40rem", height: "33rem" }
  }),
  requirements: "None",
  primeRequisite: "DEX",
  hitDice: "1d4",
  hitDiceCount: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"
  ],
  experienceLevel: [
    "1,800",
    "3,600",
    "7,200",
    "14,400",
    "29,600",
    "59,200",
    "118,400",
    "Max Level"
  ],
  maximumLevel: "8",
  allowedArmor: "Leather armor, shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common", "Cat Person"],
  attackBonus: [
    "0",
    "0",
    "0",
    "0",
    "+2",
    "+2",
    "+2",
    "+2",
  ],
  saves: {
    poison: [8, 8, 8, 6, 6, 6, 4, 4],
    wands: [9, 9, 9, 7, 7, 7, 5, 5],
    stone: [10, 10, 10, 8, 8, 8, 6, 6],
    breath: [13, 13, 13, 10, 10, 10, 7, 7],
    magic: [12, 12, 12, 10, 10, 10, 8, 8]
  },
  inventory: catPersonInventory,
  abilities: [
    "<strong>Catsmint:</strong> Also called catnip or catswort, this plant has powerful psychoactive effects on cat people. When near catsmint a cat person's behavior temporarily and unpredictably changes. The resulting behavior change is determined using the catsmint effect table.\n\n<div style='padding: 0 1.5rem'><strong>Berserk:</strong> The cat person becomes energized and erratic. They can only move at full sprinting speed. In combat they must attack the nearest target in melee, even if the nearest target is an ally. While in combat they have -4 AC and +2 on to-hit rolls.\n\n<strong>Daze:</strong> The cat person assumes a trance-like appearance and becomes deadened to their surroundings. In this state a cat person is immune to all fear effects and always goes last in combat.\n\n<strong>Lethargy:</strong> The cat person is overwhelmed with a powerful desire to minimize exertion. Their body relaxes their normally taut and springy muscles. When lethargic a cat person moves at half their normal movement rate and all damage received is reduced by 2 points.</div>",
    "<strong>Combat:</strong> Cat people can use all types of weapons, but their deep love for freedom of movement does not allow them to wear armor except for leather armor. They can use shields.",
    "<strong>Claws:</strong> On the hands and feet of cat people are sharp curved claws. They may make a claw attack (1d4, melee) in combat instead of using a weapon, and may use their DEX modifer instead of their STR modifer in the to-hit roll.",
    "<strong>Low-light Vision:</strong> Cat people have the ability to see markedly better in low-light conditions than other races (e.g. the light emitted from a candle is equivalent to a lit lantern).",
    "<strong>Feline Dexterity:</strong> Cat people have the following skills, which improve as the character gains levels. Balance and falling cannot be performed if encumbered.<div style='padding: 0 1.5rem'>\n\n<strong>Balance:</strong> When traversing tight ledges and narrow surfaces, cat people may move at half their normal movement rate to avoid falling. A roll is required for every 60' traversed. A failure causes them to fall. Other conditions, such as strong winds or unsteady surfaces, may reduce the chances of success by up to 20%.\n\n<strong>Climb Sheer Surfaces:</strong> A roll is required for each 100’ to be climbed. If the roll fails, the cat person falls at the half-way point, suffering falling damage.\n\n<strong>Falling:</strong> Cat people suffer no damage from the first 20' of any fall. Damage received from a greater fall is reduced by the percentage listed (rounded down).\n\n<strong>Move Silently:</strong> A cat person may attempt to sneak past enemies unnoticed.</div>",
  ],
  abilitiesSummary:
    "Catsmint (berserk, daze, lethargy), Claws, Low-light Vision, Feline Dexterity (balance, climb sheer surfaces, falling, move silently)",
  /**
   * @see for "Using a Thief Skill" homebrew rule
   * http://doomslakers.blogspot.com/2019/01/once-again-with-thieves.html
   */
  catPersonSkills: [
    "<strong>Balance (BA), Climb Sheer Surface (CS), Falling (FA), Move Silently (MS)</strong>\n",
    "<strong>Using a Cat Person Skill:</strong> The DM will roll skill dice and the cat person player will roll an ability check (d20 + DEX modifier) simultaneously. If the skill roll is successful, the cat person has perfectly executed their dextrous feat and cannot fail. Otherwise the ability check result is used to determine success or failure. <i>Cat people are exceptional at these skills. Other classes may attempt these skills with only an ability check and usually disadvantage (DM discretion).</i>"
  ]
};
