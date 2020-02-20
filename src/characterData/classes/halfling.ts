import React from "react";
import { GiHobbitDwelling } from "react-icons/gi";
import { halflingDwarfDuergarSvirfneblinInventory } from "../equipmentKits/halflingDwarfDuergarSvirfneblinInventory";

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
  attackBonus: ["0", "0", "0", "+2", "+2", "+2", "+5", "+5"],
  saves: {
    poison: [8, 8, 8, 6, 6, 6, 4, 4],
    wands: [9, 9, 9, 7, 7, 7, 5, 5],
    stone: [10, 10, 10, 8, 8, 8, 6, 6],
    breath: [13, 13, 13, 10, 10, 10, 7, 7],
    magic: [12, 12, 12, 10, 10, 10, 8, 8]
  },
  inventory: halflingDwarfDuergarSvirfneblinInventory,
  abilities: [
    "<strong>Combat:</strong> Halflings may use any type of armor, though it must be tailored to their small size. Similarly, they may use any weapon which is appropriate to their stature. They cannot use long bows or two-handed swords.",
    "<strong>Defensive Bonus:</strong> Because they are so small, halflings have a +2 bonus to Armor Class when attacked by creatures greater than human sized.",
    "<strong>Hiding:</strong> Halflings have an uncanny ability to disappear from sight.\n\n<div style='padding: 0 1.5rem'>• In bushes or other outdoor cover, a halfling can hide with 90% ability.\n\n• In dungeons, a halfling can also hide in shadows or behind other forms of cover, so long as he or she remains silent and motionless. The chance of success is 2-in-6.</div>",
    "<strong>Listening at Doors:</strong> Halflings have a 2-in-6 chance of hearing noises (see <i>Doors, B/X Essentials: Core  Rules</i>).",
    "<strong>Missile Attack Bonus:</strong> Halflings’ keen coordination grants them +1 on any missile attacks."
  ],
  abilitiesSummary:
    "Defensive Bonus, Hiding, Listening at Doors, Missile Attack Bonus"
};
