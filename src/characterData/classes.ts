import { cleric } from "./classes/cleric";
import { drow } from "./classes/drow";
import { dwarf } from "./classes/dwarf";
import { elf } from "./classes/elf";
import { fighter } from "./classes/fighter";
import { halfling } from "./classes/halfling";
import { magicUser } from "./classes/magicUser";
import { thief } from "./classes/thief";

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

export interface characterClass {
  name: string;
  requirements: string;
  primeRequisite: string;
  hitDice: string;
  maximumLevel: string;
  allowedArmor: string;
  allowedWeapons: string;
  languages: string[];
  saves: { [key: string]: number };
  equipment: string[][];
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
  drow,
  dwarf,
  elf,
  halfling
};
