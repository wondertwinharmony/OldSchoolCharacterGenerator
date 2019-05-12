import { bard } from "./classes/bard";
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
  poison: "Death/Poison",
  wands: "Wands",
  stone: "Paralysis/Petrify",
  breath: "Breath Attacks",
  magic: "Spells/Rods/Staves"
};

export interface characterClass {
  name: string;
  icon?: JSX.Element;
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
  abilitiesSummary: string;
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
  bard,
  drow,
  dwarf,
  elf,
  halfling
};
