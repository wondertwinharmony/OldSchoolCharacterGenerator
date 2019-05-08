import { magicUserEquipment } from "../equipmentKits";

export const elf = {
  name: "Elf",
  requirements: "Minimum INT 9",
  primeRequisite: "INT and STR",
  hitDice: "1d6",
  maximumLevel: "10",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: [
    "Alignment language",
    "Common",
    "Elvish",
    "Gnoll",
    "Hobgoblin",
    "Orcish"
  ],
  saves: {
    poison: 12,
    wands: 13,
    stone: 13,
    breath: 15,
    magic: 15
  },
  equipment: magicUserEquipment,
  abilities: [
    "<strong>Prime Requisites:</strong> An elf must have at least 13 in both prime requisites in order to get the +5% bonus to experience. An elf with an INT of at least 16 and a STR of at least 13 receives a +10% XP bonus.",
    "<strong>Detect Secret Doors:</strong> Elves have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance (see <i>Searching in B/X Essentials: Core Rules</i>).",
    "<strong>Immunity to Ghoul Paralysis:</strong> Elves are completely unaffected by the paralysis ghouls can inflict.",
    "<strong>Infravision:</strong> Elves have infravision to 60’ (see <i>Light, Vision, and Visibility in B/X Essentials: Core Rules</i>).",
    "<strong>Listening at Doors:</strong> Elves have a 2-in-6 chance of hearing noises (see <i>Doors, B/X Essentials: Core Rules</i>).",
    "<strong>Magical Research:</strong> An elf of any level may spend time and money to research new spells to add to his or her spell book. When an elf reaches 9th level, he or she is also able to create magic items and research other magical effects. <i>These rules are detailed in the Magic section of B/X Essentials: Core Rules.</i>",
    "<strong>Using Magic Items:</strong> As spell casters, elves are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by elves or magic-users.",
    "<strong>Read Magic:</strong> By means of read magic, the caster can decipher magical inscriptions or runes.\n\n<div style='padding: 0 1.5rem'>• The magical script of a scroll of arcane spells can be understood. The caster is then able to activate the scroll at any time in the future.\n\n• A spell book written by another arcane spell caster can be deciphered.\n\n• Runes or magical words inscribed on an object or surface can be understood.</div>\nOnce the caster has read a magical inscription using read magic, he or she is thereafter able to read that particular writing without recourse to the use of this spell."
  ],
  spells: "see MagicUser spells"
};
