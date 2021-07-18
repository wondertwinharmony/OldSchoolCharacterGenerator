import { acrobat } from "./classes/acrobat";
import { arcaneBard } from "./classes/arcaneBard";
import { assassin } from "./classes/assassin";
import { barbarian } from "./classes/barbarian";
import { bard } from "./classes/bard";
import { caimen } from "./classes/caimen";
import { catPerson } from "./classes/catPerson";
import { cleric } from "./classes/cleric";
import { crabPerson } from "./classes/crabPerson";
import { drow } from "./classes/drow";
import { druid } from "./classes/druid";
import { duergar } from "./classes/duergar";
import { dwarf } from "./classes/dwarf";
import { elf } from "./classes/elf";
import { fighter } from "./classes/fighter";
import { giantWoman } from "./classes/giantWoman";
import { gnome } from "./classes/gnome";
import { halfElf } from "./classes/halfElf";
import { halfling } from "./classes/halfling";
import { halfOrc } from "./classes/halfOrc";
import { illusionist } from "./classes/illusionist";
import { knight } from "./classes/knight";
import { magicUser } from "./classes/magicUser";
import { paladin } from "./classes/paladin";
import { ranger } from "./classes/ranger";
import { svirfneblin } from "./classes/svirfneblin";
import { thief } from "./classes/thief";
import { wildMagicUser } from "./classes/wildMagicUser";

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

export type CastingMethod = "arcane" | "divine";
export type SpellList = "magicUser" | "cleric" | "illusionist" | "druid";

export interface characterClass {
  name: string;
  icon?: JSX.Element;
  skillsIcon?: JSX.Element;
  skillsTable?: JSX.Element;
  requirements: string;
  primeRequisite: string;
  hitDice: string;
  hitDiceCount: string[];
  experienceLevel: string[];
  maximumLevel: string;
  allowedArmor: string;
  allowedWeapons: string;
  languages: string[];
  attackBonus: string[];
  saves: { [key: string]: number[] };
  inventory: any;
  abilities?: string[];
  abilitiesSummary: string;
  spells?: string;
  castingMethod?: CastingMethod;
  spellList?: SpellList;
  spellMatrix?: number[][];
  clericTurn?: string;
  paladinTurn?: string;
  thiefSkills?: string[];
  acrobatSkills?: string[];
  assassinSkills?: string[];
  barbarianSkills?: string[];
  halfOrcSkills?: string[];
  psionicistSkills?: string[];
  rangerTracking?: string;
  wildMagicUserMagicSurges?: string[];
  [key: string]: any;
}

/**
 * Character Classes
 */
export const characterClasses: { [key: string]: characterClass } = {
  cleric,
  fighter,
  magicUser,
  wildMagicUser,
  thief,
  acrobat,
  arcaneBard,
  assassin,
  barbarian,
  bard,
  // citizenLich,
  caimen,
  catPerson,
  crabPerson,
  drow,
  druid,
  duergar,
  dwarf,
  elf,
  giantWoman,
  gnome,
  halfElf,
  halfling,
  halfOrc,
  illusionist,
  knight,
  paladin,
  // psionicist,
  ranger,
  svirfneblin,
  // underworldRanger,
  // ynnianChangeling
};
