import { magicUserEquipment } from "../equipmentKits";

export const magicUser = {
  name: "Magic-User",
  requirements: "None",
  primeRequisite: "INT",
  hitDice: "1d4",
  maximumLevel: "14",
  allowedArmor: "None",
  allowedWeapons: "Dagger only",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  equipment: magicUserEquipment,
  abilities: [
    "<strong>Combat:</strong> Magic-users may only use daggers and are unable to use shields or wear any kind of armour. For this reason, magic-users are weak at low levels and, in an adventuring group, should be protected.",
    "<strong>Magical Research:</strong> A magic-user of any level may spend time and money to research new spells to add to his or her spell book. When a magic-user reaches 9th level, he or she is also able to create magic items and research other magical effects. <i>These rules are detailed in the Magic section of B/X Essentials: Core Rules.</i>",
    "<strong>Read Magic:</strong> By means of read magic, the caster can decipher magical inscriptions or runes.\n\n<div style='padding: 0 1.5rem'>• The magical script of a scroll of arcane spells can be understood. The caster is then able to activate the scroll at any time in the future.\n\n• A spell book written by another arcane spell caster can be deciphered.\n\n• Runes or magical words inscribed on an object or surface can be understood.</div>\nOnce the caster has read a magical inscription using read magic, he or she is thereafter able to read that particular writing without recourse to the use of this spell."
  ],
  spells: "see MagicUser spells"
};
