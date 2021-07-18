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
  // These classes have no ability score requirements:
  // acrobat
  // assassin
  // cleric
  // druid
  // fighter
  // halfOrc
  // illusionist
  // magicUser
  // thief
  // ynnianChangeling

  // We initialize classOptions with acrobat and assassin,
  // they come first alphabetically.
  const classOptions: {
    [key: string]: string;
  } = {
    acrobat: characterClasses.acrobat.name,
    assassin: characterClasses.assassin.name
  };

  /**
   * Note: this is the order in which remaining classes will
   * appear in app view.
   */
  // if INT >= 9 add Barbarian to list of possible classes
  if (abilityScores[INT] >= 9)
    classOptions.arcaneBard = characterClasses.arcaneBard.name;

  // if DEX >= 9 add Barbarian to list of possible classes
  if (abilityScores[DEX] >= 9)
    classOptions.barbarian = characterClasses.barbarian.name;
  // if DEX>= 9 && INT >= 9 add Bard to list of possible classes
  if (abilityScores[DEX] >= 9 && abilityScores[INT] >= 9)
    classOptions.bard = characterClasses.bard.name;
  // if INT >= 13 add Citizen Lich to list of possible classes
  // if (abilityScores[INT] >= 13)
  //   classOptions.citizenLich = characterClasses.citizenLich.name;

  classOptions.cleric = characterClasses.cleric.name;

  // if CON >= 9 add Caimen to list of possible classes
  if (abilityScores[CON] >= 9) {
    classOptions.caimen = characterClasses.caimen.name;
  }

  // if DEX >= 9 add Cat Person to list of possible classes
  if (abilityScores[DEX] >= 9)
  classOptions.catPerson = characterClasses.catPerson.name;

  // if STR >= 9 && CON >= 9 add Crab-Person to list of possible classes
  if (abilityScores[STR] >= 9 && abilityScores[CON] >= 9)
    classOptions.crabPerson = characterClasses.crabPerson.name;
  // if INT >= 9 add Drow to list of possible classes (done separatenly
  // from Elf so they appear in desired order)
  if (abilityScores[INT] >= 9) classOptions.drow = characterClasses.drow.name;

  classOptions.druid = characterClasses.druid.name;

  // if CON >= 9 && INT >= 9 add Duergar to list of possible classes
  if (abilityScores[CON] >= 9 && abilityScores[INT] >= 9)
    classOptions.duergar = characterClasses.duergar.name;
  // if CON >= 9 add Dwarf to list of possible classes
  if (abilityScores[CON] >= 9) classOptions.dwarf = characterClasses.dwarf.name;
  // if INT >= 9 add Elf to list of possible classes
  if (abilityScores[INT] >= 9) {
    classOptions.elf = characterClasses.elf.name;
  }

  classOptions.fighter = characterClasses.fighter.name;

  // if STR >= 13 && CON >= 9 add Giant Woman to list of possible classes
    if (abilityScores[STR] >= 13 && abilityScores[CON] >= 9)
    classOptions.giantWoman = characterClasses.giantWoman.name;

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

  classOptions.halfOrc = characterClasses.halfOrc.name;

  // if CON >= 9 && DEX >= 9 add Knight to list of possible classes
  if (abilityScores[DEX] >= 9 && abilityScores[CON] >= 9)
    classOptions.knight = characterClasses.knight.name;

  classOptions.illusionist = characterClasses.illusionist.name;
  classOptions.magicUser = characterClasses.magicUser.name;

  // if CHA >= 9 add Paladin to list of possible classes
  if (abilityScores[CHA] >= 9)
    classOptions.paladin = characterClasses.paladin.name;
  // if CON >= 9 add Psionicist to list of possible classes
  // if (abilityScores[CON] >= 9)
  //   classOptions.psionicist = characterClasses.psionicist.name;
  // if CON >= 9 && WIS >= 9 add Ranger to list of possible classes
  if (abilityScores[WIS] >= 9 && abilityScores[CON] >= 9)
    classOptions.ranger = characterClasses.ranger.name;
  // if CON >= 9 add Svirfneblin to list of possible classes
  if (abilityScores[CON] >= 9)
    classOptions.svirfneblin = characterClasses.svirfneblin.name;

  classOptions.thief = characterClasses.thief.name;

  // if STR >= 9 && CON >= 9 add Underworld Ranger to list of possible classes
  // if (abilityScores[STR] >= 12 && abilityScores[CON] >= 12)
  //   classOptions.underworldRanger = characterClasses.underworldRanger.name;
  // if INT >= 9 add Wild Magic-User to list of possible classes
  if (abilityScores[INT] >= 9)
    classOptions.wildMagicUser = characterClasses.wildMagicUser.name;

  // classOptions.ynnianChangeling = characterClasses.ynnianChangeling.name;

  return classOptions;
};
