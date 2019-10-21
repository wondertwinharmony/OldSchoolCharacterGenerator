import React from "react";
import { GiElfHelmet } from "react-icons/gi";
import { magicUserEquipment } from "../equipmentKits/magicUserEquipment";

export const elf = {
  name: "Elf",
  icon: React.createElement(GiElfHelmet, {}),
  requirements: "Minimum INT 9",
  primeRequisite: "INT and STR",
  hitDice: "1d6",
  xpToSecondLevel: "4,000 XP",
  maximumLevel: "10",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common", "Elvish", "Gnoll", "Hobgoblin", "Orcish"],
  saves: {
    poison: 12,
    wands: 13,
    stone: 13,
    breath: 15,
    magic: 15
  },
  equipment: magicUserEquipment,
  abilities: [
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules, p42</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Magical Research:</strong> An elf of any level may spend time and money to research new spells to add to his or her spell book. When an elf reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell Casting:</strong> Elves carry spell books containing the formulae for arcane spells. A 1st level elf has one spell in his or her spell book. The list of spells available to elves is found on <i>p45</i>.\n\n<strong>Using Magic Items:</strong> As spell casters, elves are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by arcane spell casters (including elves).</div>",
    "<strong>Combat:</strong> Elves are able to use all forms of weapon and armor.",
    "<strong>Detect Secret Doors:</strong> Elves have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance (see <i>Dungeon Adventuring in Core Rules</i>).",
    "<strong>Immunity to Ghoul Paralysis:</strong> Elves are completely unaffected by the paralysis ghouls can inflict.",
    "<strong>Infravision:</strong> Elves have infravision to 60’ (see <i>Hazards and Challenges: Darkness in Core Rules</i>).",
    "<strong>Listening at Doors:</strong> Elves have a 2-in-6 chance of hearing noises (see <i>Dungeon Adventuring in Core Rules</i>)."
  ],
  abilitiesSummary:
    "Arcane Magic, Detect Secret Doors, Immunity to Ghoul Paralysis, Infravision, Listening at Doors",
  spells: "see MagicUser spells"
};
