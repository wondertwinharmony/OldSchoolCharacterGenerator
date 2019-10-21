import { characterClasses } from "../characterData/classes";
import {
  CHA,
  CON,
  DEX,
  INT,
  STR,
  WIS
} from "../constants/abilityScoreConstants";

/**
 * Utility for getting what classes are available to choose
 * based on ability score requirements.
 */
export const getClassOptionsToDisplay = (abilityScores: number[]) => {
  // these classes have no ability score requirements
  const classOptions: {
    [key: string]: string;
  } = {
    acrobat: characterClasses.acrobat.name,
    assassin: characterClasses.assassin.name,
    cleric: characterClasses.cleric.name,
    druid: characterClasses.druid.name,
    fighter: characterClasses.fighter.name,
    halfOrc: characterClasses.halfOrc.name,
    illusionist: characterClasses.illusionist.name,
    magicUser: characterClasses.magicUser.name,
    thief: characterClasses.thief.name
  };

  /**
   * Note: this is the order in which classes with ability
   * score requirements will appear after the standard four
   * above.
   */
  // if DEX >= 9 add Barbarian to list of possible classes
  if (abilityScores[DEX] >= 9) {
    classOptions.barbarian = characterClasses.barbarian.name;
  }
  // if DEX>= 9 && INT >= 9 add Bard to list of possible classes
  if (abilityScores[DEX] >= 9 && abilityScores[INT] >= 9)
    classOptions.bard = characterClasses.bard.name;
  // if STR >= 9 && CON >= 9 add Crab-Person to list of possible classes
  if (abilityScores[STR] >= 9 && abilityScores[CON] >= 9)
    classOptions.crabPerson = characterClasses.crabPerson.name;
  // if INT >= 9 add Drow to list of possible classes (done separatenly
  // from Elf so they appear in desired order)
  if (abilityScores[INT] >= 9) classOptions.drow = characterClasses.drow.name;
  // if CON >= 9 && INT >= 9 add Duergar to list of possible classes
  if (abilityScores[CON] >= 9 && abilityScores[INT] >= 9)
    classOptions.duergar = characterClasses.duergar.name;
  // if CON >= 9 add Dwarf to list of possible classes
  if (abilityScores[CON] >= 9) classOptions.dwarf = characterClasses.dwarf.name;
  // if INT >= 9 add Elf to list of possible classes
  if (abilityScores[INT] >= 9) {
    classOptions.elf = characterClasses.elf.name;
  }
  // if CON >= 9 add Gnome to list of possible classes
  if (abilityScores[CON] >= 9) {
    classOptions.gnome = characterClasses.gnome.name;
  }
  // if CON >= 9 && DEX >= 9 add Halfling to list of possible classes
  if (abilityScores[DEX] >= 9 && abilityScores[CON] >= 9)
    classOptions.halfling = characterClasses.halfling.name;
  // if DEX >= 9 && INT >= 9 add Half-elf to list of possible classes
  if (abilityScores[CHA] >= 9 && abilityScores[CON] >= 9)
    classOptions.halfElf = characterClasses.halfElf.name;
  // if CON >= 9 && DEX >= 9 add Knight to list of possible classes
  if (abilityScores[DEX] >= 9 && abilityScores[CON] >= 9)
    classOptions.knight = characterClasses.knight.name;
  // if CHA >= 9 add Paladin to list of possible classes
  if (abilityScores[CHA] >= 9)
    classOptions.paladin = characterClasses.paladin.name;
  // if CON >= 9 add Psionicist to list of possible classes
  if (abilityScores[CON] >= 9)
    classOptions.psionicist = characterClasses.psionicist.name;
  // if CON >= 9 && WIS >= 9 add Ranger to list of possible classes
  if (abilityScores[WIS] >= 9 && abilityScores[CON] >= 9)
    classOptions.ranger = characterClasses.ranger.name;
  // if CON >= 9 add Svirfneblin to list of possible classes
  if (abilityScores[CON] >= 9)
    classOptions.svirfneblin = characterClasses.svirfneblin.name;
  // if INT >= 9 add Wild Magic-User to list of possible classes
  if (abilityScores[INT] >= 9)
    classOptions.wildMagicUser = characterClasses.wildMagicUser.name;

  return classOptions;
};
