import { fighterEquipment } from "../equipmentKits";

export const halfling = {
  name: "Halfling",
  requirements: "Minimum CON and DEX 9",
  primeRequisite: "DEX and STR",
  hitDice: "1d6",
  maximumLevel: "8",
  allowedArmor: "Any appropriate to size, including shields",
  allowedWeapons: "Appropriate to size (see below)",
  languages: ["Alignment language", "Common", "Halfling"],
  saves: {
    poison: 10,
    wands: 11,
    stone: 12,
    breath: 13,
    magic: 14
  },
  equipment: fighterEquipment,
  abilities: [
    "<strong>Prime Requisites:</strong> A halfling must have at least 13 in one or the other prime requisite in order to get a +5% to experience. The character must have a STR and DEX of 13 or higher to get a +10% bonus.",
    "<strong>Combat:</strong> Halflings may use any type of armour, though it must be tailored to their small size. Similarly, they may use any weapon which is appropriate to their stature. They cannot use longbows or two-handed swords.",
    "<strong>Defensive Bonus:</strong> Because they are so small, halflings have a lower Armour Class (-2 bonus) when attacked by creatures greater than human sized.",
    "<strong>Hiding:</strong> Halflings have an uncanny ability to disappear from sight:\n  In bushes or other outdoor cover, a halfling can hide with 90% ability.\n  In dungeons, a halfling can also hide in shadows or behind other forms of cover, so long as he or she remains silent and motionless. The chance of success is 2-in-6.",
    "<strong>Listening at Doors:</strong> Halflings have a 2-in-6 chance of hearing noises (see <strong>Doors, B/X Essentials: Core  Rules</strong>).",
    "<strong>Missile Attack Bonus:</strong> Halflings’ keen coordination grants them +1 on any missile attacks."
  ]
};
