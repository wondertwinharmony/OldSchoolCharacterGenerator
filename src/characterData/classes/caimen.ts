import React from "react";
import { GiCrocJaws } from "react-icons/gi";
import { fighterInventory } from "../equipmentKits/fighterInventory";

export const caimen = {
  name: "Caimen",
  icon: React.createElement(GiCrocJaws, {}),
  requirements: "Minimum CON 9",
  primeRequisite: "CON",
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
    "9"
  ],
  experienceLevel: [
    "2,000",
    "4,000",
    "8,000",
    "16,000",
    "33,000",
    "66,000",
    "132,000",
    "232,000",
    "332,000",
    "Max Level"
  ],
  maximumLevel: "10",
  allowedArmor: "Any appropriate to size, including shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common", "Caimen"],
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
  ],
  saves: {
    poison: [12, 12, 12, 10, 10, 10, 8, 8, 8, 6],
    wands: [13, 13, 13, 11, 11, 11, 9, 9, 9, 7],
    stone: [14, 14, 14, 12, 12, 12, 10, 10, 10, 8],
    breath: [15, 15, 15, 13, 13, 13, 10, 10, 10, 8],
    magic: [16, 16, 16, 14, 14, 14, 12, 12, 12, 10]
  },
  inventory: fighterInventory,
  abilities: [
    "<strong>Aquatic Lizards:</strong> Caimen are just as comfortable on land as they are in the water.\n\n<div style='padding: 0 1.5rem'><strong>Swimming:</strong> Movement rate is unchanged when in water.\n\n<strong>Extended Breath Holding:</strong> For 6 turns +/- CON modifer.</div>",
    "<strong>Combat:</strong> Caimen can use all types of weapons and armor, but they require special modifications for armor to accommodate their frilled spikes. Modifications for caimen increase the cost of armor by an additional 50% of the normal cost. They can use shields.",
    "<strong>Infravision:</strong> Caimen have infravision to 60’ (see <i><strong>Hazards and Challenges</strong> in Core Rules</i>).",
    "<strong>Leathery Hide:</strong> Caimen have natural Armor Class 7 [12] due to their thick scaled skin.",
    "<strong>Poor Eyesight:</strong> Ranged attacks from 15-25' suffer a -2 to-hit penalty, and beyond 25' they suffer an increased -4 to-hit penalty.",
    "<strong>Powerful Jaws:</strong> Caimen have toothy maws large enough to dismember a human. They may make a bite attack (1d6, melee) in combat instead of using a weapon."
  ],
  abilitiesSummary: "Aquatic Lizards (swimming, extended breath holding), Infravision, Leathery Hide, Poor Eyesight, Powerful Jaws"
};
