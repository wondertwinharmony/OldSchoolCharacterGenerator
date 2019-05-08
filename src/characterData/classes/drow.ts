import { clericEquipment } from "../equipmentKits";

export const drow = {
  name: "Drow",
  requirements: "Minimum INT 9",
  primeRequisite: "STR and WIS",
  hitDice: "1d6",
  maximumLevel: "10",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: [
    "Alignment",
    "Common",
    "Deepcommon",
    "Elvish",
    "Gnomish",
    "Secret Language of Spiders"
  ],
  saves: {
    poison: 12,
    wands: 13,
    stone: 13,
    breath: 15,
    magic: 12
  },
  equipment: clericEquipment,
  abilities: [
    "<strong>Detect Secret Doors:</strong> Drow have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance (see <i><strong>Dungeon Adventuring</strong> in Core Rules</i>).",
    "<strong>Immunity to Ghoul Paralysis:</strong> Drow are completely unaffected by the paralysis ghouls can inflict.",
    "<strong>Infravision:</strong> Drow have infravision to 90’ (see <i><strong>Hazards and Challenges</strong> in Core Rules</i>).",
    "<strong>Light Sensitivity:</strong> When in bright light (daylight, <i>continual light</i>), drow suffer a -2 penalty to attack rolls and a -1 penalty to Armor Class.",
    "<strong>Listening at Doors:</strong> Drow have a 2-in-6 chance of hearing noises (see <i><strong>Dungeon Adventuring</strong> in Core Rules</i>).",
    "<strong>Spider Affinity:</strong> Drow live alongside many different species of spiders, including giant spiders. They can speak the secret language of spiders and gain a +1 bonus to reaction rolls when encountering spiders (see <i><strong>Encounters</strong> in Core Rules</i>)."
    // "<strong>Magical Research:</strong> An elf of any level may spend time and money to research new spells to add to his or her spell book. When an elf reaches 9th level, he or she is also able to create magic items and research other magical effects. <i>These rules are detailed in the Magic section of B/X Essentials: Core Rules.</i>",
    // "<strong>Using Magic Items:</strong> As spell casters, Drow are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by Drow or magic-users.",
    // "<strong>Read Magic:</strong> By means of read magic, the caster can decipher magical inscriptions or runes.\n\n<div style='padding: 0 1.5rem'>• The magical script of a scroll of arcane spells can be understood. The caster is then able to activate the scroll at any time in the future.\n\n• A spell book written by another arcane spell caster can be deciphered.\n\n• Runes or magical words inscribed on an object or surface can be understood.</div>\nOnce the caster has read a magical inscription using read magic, he or she is thereafter able to read that particular writing without recourse to the use of this spell."
  ],
  // This needs to just be light (darkness) spell
  spells: "see MagicUser spells"
};
