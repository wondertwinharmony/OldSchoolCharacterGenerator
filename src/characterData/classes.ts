/**
 * THE GENERAL APP FLOW
 *
 * 1 - page renders and displays 6 rolled ability scores
 * 2 - based on ability scores rolled, display buttons for
 *     each possible class that could use those scores. Only
 *     non-humans are restricted so far.
 *
 *     Show this simply!!! Compare Prime Reqs w/Rolled Scores
 *     and display next to class choice as a message.
 *     3-5 XP Adjustment: -20%
 *     6-8 XP Adjustment: -10%
 *     9-12 XP Adjustment: None
 *     13-15 XP Adjustment: +5%
 *     16-18 XP Adjustment: +10%
 *
 * 2a- include a checkbox for random 1st level Knave spells?
 * 2b- include a note that dwarves, elves, and halflings are classes in early D&D!
 * 3 - clicking a button hides other classes and 6 rolled
 *     ability scores and displays character
 *
 * Goals to build app:
 * 1 - repo
 * 2 - create react app2
 * 3 - add dependencies: lodash, styled components, node roll
 *
 * Uses of lodash 'sampleSize' util:
 * 1 - extra languages (based on INT score)
 * 2 - equipment and gear (give two pieces of gear)
 * 3 - random spell
 */

/**
 * To determine AC:
 * 1 - search equipment for each item. If its there - adjust the base AC.
 * 2 - add DEX bonus adjustment
 *
 *
 * Base AC based on armor:
 * Unarmored: 10
 * Leather: 12
 * Chain mail: 14
 * Plate mail: 16
 * Shield: +1
 */

/**
 * @todo replace gp in equipment lists
 * with starting gold calculation
 */
export const startingGold = "3d6 × 10";

/**
 * Saves
 */
export const saves = {
  poison: "Death Ray or Poison",
  wands: "Magical Wands",
  stone: "Paralysis or Turn to Stone",
  breath: "Dragon Breath",
  magic: "Rods, Staves, or Spells"
};

/**
 * Languages from Moldvay/OSE
 */
export const languages = [
  "Bugbear",
  "Doppelgänger",
  "Dragon",
  "Dwarvish",
  "Elvish",
  "Gargoyle",
  "Gnoll",
  "Gnome",
  "Goblin",
  "Halfling",
  "Harpy",
  "Hobgoblin",
  "Kobold",
  "Lizard man",
  "Medusa",
  "Minotaur",
  "Ogre",
  "Orc",
  "Pixie",
  "Human dialect"
];

/**
 * Character Classes
 */
export const cleric = {
  name: "Cleric",
  requirements: "None",
  primeRequisite: "WIS",
  hitDice: "1d6",
  maximumLevel: "14",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any blunt weapons",
  languages: "Alignment language, Common",
  saves: {
    poison: 11,
    wands: 12,
    stone: 14,
    breath: 16,
    magic: 15
  },
  equipment: "see clericEquipment",
  abilities: [
    "As spell casters, clerics can use magic scrolls of spells on their spell list. There are also items (e.g. some staves) that may only be used by divine spell casters (including clerics).",
    "Clerics can invoke the power of their deity to repel undead monsters encountered. To turn the undead, the player rolls 2d6. The referee then consults the table oppo- site, comparing the roll against the Hit Dice of the undead monsters targeted.\n  Successful Turning\n  If the turning attempt succeeds, the play- er must roll 2d6 to determine the number of HD of undead monsters affected.\n  Minimum effect: At least one undead creature will always be turned or destroyed on a successful turning.\n  Turned undead: Will leave the area, if possible, and will not harm or make contact with the cleric.\n  Destroyed undead (result of D): Are instantly and permanently annihilated.\n  Mixed groups: If turn undead is used against a mixed group of undead monsters of different types, those with the lowest HD are affected first.\n  "
  ],
  /**
   * @todo Include screenshot of turn table
   */
  turn: [
    "* 2 HD monsters with a special ability (i.e. with an asterisk next to their HD rating, in the monster description)."
  ]
};

export const fighter = {
  name: "Fighter",
  requirements: "None",
  primeRequisite: "STR",
  hitDice: "1d8",
  maximumLevel: "14",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: "Alignment language, Common",
  saves: {
    poison: 12,
    wands: 13,
    stone: 14,
    breath: 15,
    magic: 16
  },
  equipment: "see fighterEquipment"
};

export const magicUser = {
  name: "Magic-User",
  requirements: "None",
  primeRequisite: "INT",
  hitDice: "1d4",
  maximumLevel: 14,
  allowedArmor: "None",
  allowedWeapons: "Dagger only",
  languages: "Alignment language, Common",
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  equipment: "see MagicUser equipment",
  abilities: [
    "Combat: Magic-users may only use daggers and are unable to use shields or wear any kind of armour. For this reason, magic-users are weak at low levels and, in an adventuring group, should be protected.",
    "Magical Research: A magic-user of any level may spend time and money to research new spells to add to his or her spell book. When a magic-user reaches 9th level, he or she is also able to create magic items and research other magical effects. These rules are detailed in the Magic section of B/X Essentials: Core Rules.",
    "Using Magic Items: As spell casters, magic-users are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by magic-users or elves."
  ],
  spells: "see MagicUser spells"
};

export const thief = {
  name: "Thief",
  requirements: "None",
  primeRequisite: "DEX",
  hitDice: "1d4",
  maximumLevel: "14",
  allowedArmor: "Leather armour, no shields",
  allowedWeapons: "Any",
  languages: "Alignment language, Common",
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  equipment: "see Thief equipment",
  abilities: [
    "Back-stab: When attacking an unaware opponent from behind, a thief receives a +4 bonus to hit and doubles any damage dealt.",
    "Combat: Because of their need of stealth and free movement, thieves cannot wear armour heavier than leather and cannot use shields. They can use any weapon.",
    "Thief Skills: Thieves have the following skills, which improve as the character gains levels. Note that dice rolls for these abilities are usually made by the referee, because a thief is not always aware that he or she has failed!\n  Climb Sheer Surfaces: Thieves are adept at scaling sheer surfaces, including walls or steep cliffs. A skill roll is required for each 100 feet to be climbed. If the roll fails, the thief falls a distance equal to half the attempted distance, taking 1d6 points of damage per 10 feet.\n  Find or Remove Traps: A thief may only try one time to find or remove a trap in an area. Note that these are separate skills, for a thief must find a trap before he or she can remove it!\n  Hear Noise: Thieves can attempt to listen for noises in a cave or hallway, at a door, or in other locations, but the thief must be quiet and in a quiet environment. Unlike the other thief abilities, this ability is rolled using 1d6.\n  Hide in Shadows: A thief will always think he or she is successful in this skill and will not know otherwise until others react to his or her presence. A thief must remain motionless when hiding.\n  Move Silently: When successful, others will not hear the movements of a thief. However, the thief always thinks he or she is moving silently and will only know otherwise by others’ reaction.\n  Pick Locks: A thief is skilled in picking locks, but needs thieves’ tools to do so. He or she can only try to pick a lock one time and, if the roll fails, may not try the same lock again before gaining an experience level.\n  Pick Pockets: This skill is the bread and butter of non-adventuring thieves; it is a quick (if perilous) source of income. If the victim is above 5th level, the thief’s roll is penalised by 5% for every level above 5th. There is always at least a 1% chance of failure. A roll of more than twice the percentage required for success means the intended target notices the thieving attempt. The referee will then roll 2d6 on the reaction table (see Encounters in B/X Essentials: Core Rules) to determine the target’s reaction."
  ],
  skills: [
    "Open Locks: 15%",
    "Find Traps: 10%",
    "Remove Traps: 10%",
    "Climb Walls: 87%",
    "Move Silently: 20%",
    "Hide in Shadows: 10%",
    "Pick Pockets: 20%",
    "Hear Noise: 1-2"
  ]
};

// Demihuman Classes
export const dwarf = {
  name: "Dwarf",
  requirements: "Minimum CON 9",
  primeRequisite: "STR",
  hitDice: "1d8",
  maximumLevel: "12",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Small or normal sized (see below)",
  languages: "Alignment language, Common, dwarvish, gnome, goblin, kobold",
  saves: {
    poison: 10,
    wands: 11,
    stone: 12,
    breath: 13,
    magic: 14
  },
  equipment: "see Fighter equipment",
  abilities: [
    "Combat: Dwarves may use any type of armour, however, due to their short height, may only use small or normal sized weapons. This means that dwarves cannot use longbows or two-handed swords.",
    "Detect Construction Tricks: From their experience underground, dwarves have a 2-in-6 chance of detecting false walls, hidden construction, or sloping passages. A dwarf must be actively searching for these abilities to function.",
    "Detect Traps: Due to their expertise with construction, dwarves have a 2-in-6 chance of detecting non-magical traps, when searching (see Searching in B/X Essentials: Core Rules).",
    "Infravision: Due to their habit of living underground in great mines, dwarves have the ability to see in the dark with infravision up to 60’ (see Light, Vision, and Visibility in B/X Essentials: Core Rules).",
    "Listening at Doors: Dwarves have a 2-in-6 chance of hearing noises (see Doors, B/X Essentials: Core Rules)."
  ]
};

export const elf = {
  name: "Elf",
  requirements: "Minimum INT 9",
  primeRequisite: "INT and STR",
  hitDice: "1d6",
  maximumLevel: "10",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: "Alignment language, Common, elvish, gnoll, hobgoblin, and orcish",
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

export const halfling = {
  name: "Halfling",
  requirements: "Minimum CON and DEX 9",
  primeRequisite: "DEX and STR",
  hitDice: "1d6",
  maximumLevel: "8",
  allowedArmor: "Any appropriate to size, including shields",
  allowedWeapons: "Appropriate to size (see below)",
  languages: "Alignment language, Common, halfling",
  saves: {
    poison: 10,
    wands: 11,
    stone: 12,
    breath: 13,
    magic: 14
  },
  equipment: "see Fighter Equipment",
  abilities: [
    "Prime Requisites: A halfling must have at least 13 in one or the other prime requisite in order to get a +5% to experience. The character must have a STR and DEX of 13 or higher to get a +10% bonus.",
    "Combat: Halflings may use any type of armour, though it must be tailored to their small size. Similarly, they may use any weapon which is appropriate to their stature. They cannot use longbows or two-handed swords.",
    "Defensive Bonus: Because they are so small, halflings have a lower Armour Class (-2 bonus) when attacked by creatures greater than human sized.",
    "Hiding: Halflings have an uncanny ability to disappear from sight:\n  In bushes or other outdoor cover, a halfling can hide with 90% ability.\n  In dungeons, a halfling can also hide in shadows or behind other forms of cover, so long as he or she remains silent and motionless. The chance of success is 2-in-6.",
    "Listening at Doors: Halflings have a 2-in-6 chance of hearing noises (see Doors, B/X Essentials: Core  Rules).",
    "Missile Attack Bonus: Halflings’ keen coordination grants them +1 on any missile attacks."
  ]
};
