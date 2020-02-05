import React from "react";
import { GiHeavyHelm } from "react-icons/gi";
import { halflingDwarfDuergarSvirfneblinInventory } from "../equipmentKits/halflingDwarfDuergarSvirfneblinInventory";

export const duergar = {
  name: "Duergar",
  icon: React.createElement(GiHeavyHelm, {}),
  requirements: "Minimum CON 9 and INT 9",
  primeRequisite: "STR",
  hitDice: "1d6",
  xpToSecondLevel: "2,800 XP",
  maximumLevel: "10",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Appropriate to size (no long bows or two-handed swords)",
  languages: [
    "Alignment",
    "Common",
    "Deepcommon",
    "Dwarvish",
    "Gnome",
    "Goblin",
    "Kobold"
  ],
  saves: {
    poison: 8,
    wands: 9,
    stone: 10,
    breath: 13,
    magic: 12
  },
  inventory: halflingDwarfDuergarSvirfneblinInventory,
  abilities: [
    "<strong>Combat:</strong> Duergars can use all types of armour. Due to their short height, duergars can only use small or normal sized weapons. They cannot use longbows or two-handed swords.",
    "<strong>Detect Construction Tricks:</strong> As expert miners, duergars have a 2-in- 6 chance of being able to detect new construction, sliding walls, or sloping passages when searching.",
    "<strong>Detect Room Traps:</strong> Due to their expertise with construction, duergars have a 2-in-6 chance of detecting non-magical room traps when searching (see <i>Dungeon Adventuring</i> in Core Rules).",
    "<strong>Infravision:</strong> Duergars have infravision to 90’ (see <i><strong>Hazards and Challenges</strong> in Core Rules</i>).",
    "<strong>Innate Mind Powers:</strong> Once per day per level of experience, a duergar may activate one of the following mental powers:\n\n<div style='padding: 0 1.5rem'><strong>Enlargement:</strong> The duergar’s body, clothing, and armour (but not other equipment) double in size for 1d4 rounds. While enlarged, the duergar’s melee attacks inflict double damage.\n\n<strong>Invisibility:</strong> The duergar disappears from the sight of up to 1HD of creatures per level of the duergar, selected when the power is activated. In combat, affected creatures may attack the duergar with a –4 penalty after the first round. The invisibility lasts for one turn.\n\n<strong>Shrinking:</strong> The duergar’s body, clothing, and armor (but not other equipment) shrink to 6” tall for up to one turn per level. While shrunk, the duergar can slip through narrow spaces and, if they remain motionless, has a 90% chance of going unnoticed. The duergar is unable to harm creatures larger than 1’ tall while shrunk.\n\n<strong>Heat:</strong> A creature or object within sight is targeted with a scorching heat. Paper or cloth ignite, liquids boil, and metals glow. The heat lasts for one round per level of the duergar. Applied to flesh or to metal in contact with a creature (e.g. armor), the heat inflicts 1d4 damage per round.</div>",
    "<strong>Light Sensitivity:</strong> When in bright light (daylight, <i>continual light</i>), duergars suffer a -2 penalty to attack rolls and a -1 penalty to Armor Class.",
    "<strong>Listening at Doors:</strong> Duergars have a 2-in-6 chance of hearing noises (see <i><strong>Dungeon Adventuring</strong> in Core Rules</i>).",
    "<strong>Stealth:</strong> Underground, duergars have a 3-in-6 chance of moving silently."
  ],
  abilitiesSummary:
    "Detect Construction Tricks, Detect Room Traps, Infravision, Innate Mind Powers (enlargement, invisibilty, shrinking, heat), Light Sensitivity, Listening at Doors, Stealth (underground)"
};
