import { cleric } from "./classes/cleric";
import { dwarf } from "./classes/dwarf";
import { elf } from "./classes/elf";
import { fighter } from "./classes/fighter";
import { halfling } from "./classes/halfling";
import { magicUser } from "./classes/magicUser";
import { thief } from "./classes/thief";

/**
 * THE GENERAL APP FLOW
 *
 * 1 - page renders and displays 6 rolled ability scores
 * 2 - based on ability scores rolled, display buttons for
 *     each possible class that could use those scores. Only
 *     non-humans are restricted so far.
 * 2a- include a checkbox for random 1st level Knave spells?
 * 2b- include a note that dwarves, elves, and halflings are classes in early D&D!
 * 3 - clicking a button hides other classes and 6 rolled
 *     ability scores and displays character
 *
 * @todo Goals to build app:
 * 1 - map display classes to buttons with onClick handling to create{class}()
 * utils (createThief, createElf, etc.)
 * 2 - add primeRequisite and EXPERIENCE BONUS INFO
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

export interface characterClass {
  name: string;
  requirements: string;
  primeRequisite: string;
  hitDice: string;
  maximumLevel: string;
  allowedArmor: string;
  allowedWeapons: string;
  languages: string;
  saves: { [key: string]: number };
  equipment: string;
  abilities?: string[];
  spells?: string;
  turn?: string;
  skills?: string[];
}

/**
 * Character Classes
 */
export const characterClasses: { [key: string]: characterClass } = {
  cleric,
  fighter,
  magicUser,
  thief,
  dwarf,
  elf,
  halfling
};
