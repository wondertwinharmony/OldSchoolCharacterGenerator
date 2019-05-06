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
  equipment: "see MagicUser equipment",
  abilities: [
    "Prime Requisites: An elf must have at least 13 in both prime requisites in order to get the +5% bonus to experience. An elf with an INT of at least 16 and a STR of at least 13 receives a +10% XP bonus.",
    "Detect Secret Doors: Elves have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance (see Searching in B/X Essentials: Core Rules).",
    "Immunity to Ghoul Paralysis: Elves are completely unaffected by the paralysis ghouls can inflict.",
    "Infravision: Elves have infravision to 60’ (see Light, Vision, and Visibility in B/X Essentials: Core Rules).",
    "Listening at Doors: Elves have a 2-in-6 chance of hearing noises (see Doors, B/X Essentials: Core Rules).",
    "Magical Research: An elf of any level may spend time and money to research new spells to add to his or her spell book. When an elf reaches 9th level, he or she is also able to create magic items and research other magical effects. These rules are detailed in the Magic section of B/X Essentials: Core Rules.",
    "Using Magic Items: As spell casters, elves are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by elves or magic-users."
  ],
  spells: "see MagicUser spells"
};
