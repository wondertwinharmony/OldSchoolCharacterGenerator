import React from "react";
import { GiDominoMask } from "react-icons/gi";
import { thiefEquipment } from "../equipmentKits";

export const thief = {
  name: "Thief",
  icon: React.createElement(GiDominoMask, {}),
  requirements: "None",
  primeRequisite: "DEX",
  hitDice: "1d4",
  xpToSecondLevel: "1,200 XP",
  maximumLevel: "14",
  allowedArmor: "Leather armor, no shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  equipment: thiefEquipment,
  abilities: [
    "<strong>Back-stab:</strong> When attacking an unaware opponent from behind, a thief receives a +4 bonus to hit and doubles any damage dealt.",
    "<strong>Combat:</strong> Because of their need of stealth and free movement, thieves cannot wear armor heavier than leather and cannot use shields. They can use any weapon.",
    "<strong>Thief Skills:</strong> Thieves have the following skills, which improve as the character gains levels. Note that dice rolls for these abilities are usually made by the referee, because a thief is not always aware that he or she has failed!\n\n<div style='padding: 0 1.5rem'><strong>Climb Sheer Surfaces:</strong> A roll is required for each 100’ to be climbed. If the roll fails, the thief falls at the halfway point, suffering falling damage.\n\n<strong>Find or Remove Traps:</strong> A roll is required to find a treasure trap and then another to remove it. This may be attempted only once per trap.\n\n<strong>Hear Noise:</strong> In a quiet environment (e.g. not in combat), a thief may attempt to listen at a door or to hear the sounds of something (e.g. a wandering monster) approaching.\n\n<strong>Hide in Shadows:</strong> Requires the thief to be motionless—attacking or moving while hiding is not possible.\n\n<strong>Move Silently:</strong> A thief may attempt to sneak past enemies unnoticed.\n\n<strong>Open Locks:</strong> Requires thieves’ tools (see <i>Equipment, p24</i>). A thief can only try this skill once per lock. If the roll fails, the thief may not try the same lock again before gaining an experience level.\n\n<strong>Pick Pockets:</strong> If the victim is above 5th level, the thief ’s roll is penal- ised by 5% for every level above 5th. There is always at least a 1% chance of failure. A roll of more than twice the percentage required for success means that the attempted theft is noticed. The referee should determine the reaction of the victim (possibly using the reaction table under <i>Encounters, p38</i>).</div>"
  ],
  abilitiesSummary:
    "Back-stab, Thief Skills (climb sheer surfaces, find or remove traps, hear noise, hide in shadows, move silently, open locks, pick pockets)",
  skills: [
    "<strong>Climb Sheer Surface:</strong> 87%",
    "<strong>Find or Remove Traps:</strong> 10%",
    "<strong>Hear Noise:</strong> 1-2",
    "<strong>Hide in Shadows:</strong> 10%",
    "<strong>Move Silently:</strong> 20%",
    "<strong>Open Locks:</strong> 15%",
    "<strong>Pick Pockets:</strong> 20%"
  ]
};
