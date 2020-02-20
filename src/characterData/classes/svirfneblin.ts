import React from "react";
import { GiWarPick } from "react-icons/gi";
import { halflingDwarfDuergarSvirfneblinInventory } from "../equipmentKits/halflingDwarfDuergarSvirfneblinInventory";

export const svirfneblin = {
  name: "Svirfneblin",
  icon: React.createElement(GiWarPick, {}),
  requirements: "Minimum CON 9",
  primeRequisite: "DEX and INT",
  hitDice: "1d6",
  xpToSecondLevel: "2,250 XP",
  maximumLevel: "8",
  allowedArmor: "Any appropriate to size, including shields",
  allowedWeapons: "Appropriate to size (no long bows or two-handed swords)",
  languages: [
    "Alignment",
    "Common",
    "Deepcommon",
    "Dwarvish",
    "Gnome",
    "Kobold",
    "the language of earth elementals"
  ],
  attackBonus: ["0", "0", "0", "+2", "+2", "+2", "+5", "+5"],
  saves: {
    poison: [8, 8, 8, 6, 6, 6, 4, 4],
    wands: [9, 9, 9, 7, 7, 7, 5, 5],
    stone: [10, 10, 10, 8, 8, 8, 6, 6],
    breath: [14, 14, 14, 11, 11, 11, 9, 9],
    magic: [11, 11, 11, 9, 9, 9, 7, 7]
  },
  inventory: halflingDwarfDuergarSvirfneblinInventory,
  abilities: [
    "<strong>Blend into Stone:</strong> Svirfneblins have the uncanny ability to go unnoticed when in an environment of natural or carved stone so long as they remain silent and motionless. The chance of success is 4-in-6 in gloomy conditions or 2-in-6 in well-lit conditions.",
    "<strong>Combat:</strong> Svirfneblins can use all types of armor. Armor must be tailored to svirfneblins’ small size. Likewise, svirfneblins can only use weapons appropriate to their stature (as determined by the referee). They cannot use longbows or two-handed swords.",
    "<strong>Defensive Bonus:</strong> Due to their small size, svirfneblins gain a +2 bonus to Armor Class when attacked by large opponents (greater than human-sized).",
    "<strong>Detect Construction Tricks:</strong> As expert tunnellers, svirfneblins have a 2-in-6 chance of being able to detect new construction, sliding walls, or sloping passages when searching.",
    "<strong>Illusion Resistance:</strong> Svirfneblins gain a +2 bonus to all saving throws against illusions.",
    "<strong>Infravision:</strong> Svirfneblins have infravision to 90’ (see <i><strong>Hazards and Challenges</strong> in Core Rules</i>).",
    "<strong>Light Sensitivity:</strong> When in bright light (daylight, <i>continual light</i>), svirfneblins suffer a -2 penalty to attack rolls and a -1 penalty to Armor Class.",
    "<strong>Speak with Earth Elementals:</strong> Svirfneblins can speak the grinding, growling tongue of natives of the elemental plane of earth.",
    "<strong>Stone Murmurs:</strong> Svirfneblins can understand the imperceptible grumblings of stone. If a svirfneblin stands quietly for one turn with their ear pressed against a stone surface, they have a 2-in-6 chance of divining one of the following pieces of information (player’s choice):\n\n<div style='padding: 0 1.5rem'>• The presence of secret doors in the stone, within 10’.\n\n• The presence of gems or precious metals, up to 30’ beyond the surface.\n\n• The presence of living creatures, up to 30’ beyond the surface.\n\n• The presence of bodies of water or open spaces, up to 60’ beyond the surface.</div>",
    "<strong>Using Magic Items:</strong> Svirfneblins can use all magic items (except for spell scrolls) which deal with summoning or controlling earth elementals. This includes items that can normally only be used by spell casters."
  ],
  abilitiesSummary:
    "Blend into Stone, Defensive Bonus, Detect Construction Tricks, Illusion Resistance, Infravision, Light Sensitivity, Speak with Earth Elementals, Stone Murmurs, Using Magic Items (which summon or control earth elementals)"
};
