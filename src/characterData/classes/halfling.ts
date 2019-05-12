import React from "react";
import { GiHobbitDwelling } from "react-icons/gi";
import { fighterEquipment } from "../equipmentKits";

export const halfling = {
  name: "Halfling",
  icon: React.createElement(GiHobbitDwelling, {}),
  requirements: "Minimum CON and DEX 9",
  primeRequisite: "DEX and STR",
  hitDice: "1d6",
  xpToSecondLevel: "2,000 XP",
  maximumLevel: "8",
  allowedArmor: "Any appropriate to size, including shields",
  allowedWeapons: "Appropriate to size (no long bows or two-handed swords)",
  languages: ["Alignment", "Common", "Halfling"],
  saves: {
    poison: 10,
    wands: 11,
    stone: 12,
    breath: 13,
    magic: 14
  },
  equipment: fighterEquipment,
  abilities: [
    "<strong>Combat:</strong> Halflings may use any type of armor, though it must be tailored to their small size. Similarly, they may use any weapon which is appropriate to their stature. They cannot use long bows or two-handed swords.",
    "<strong>Defensive Bonus:</strong> Because they are so small, halflings have a lower Armor Class (-2 bonus) when attacked by creatures greater than human sized.",
    "<strong>Hiding:</strong> Halflings have an uncanny ability to disappear from sight.\n\n<div style='padding: 0 1.5rem'>• In bushes or other outdoor cover, a halfling can hide with 90% ability.\n\n• In dungeons, a halfling can also hide in shadows or behind other forms of cover, so long as he or she remains silent and motionless. The chance of success is 2-in-6.</div>",
    "<strong>Listening at Doors:</strong> Halflings have a 2-in-6 chance of hearing noises (see <i>Doors, B/X Essentials: Core  Rules</i>).",
    "<strong>Missile Attack Bonus:</strong> Halflings’ keen coordination grants them +1 on any missile attacks."
  ],
  abilitiesSummary:
    "Defensive Bonus, Hiding, Listening at Doors, Missile Attack Bonus"
};
