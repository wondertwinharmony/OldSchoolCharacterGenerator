import { characterClasses } from "../characterData/classes";
import { CON, DEX, INT } from "../constants/abilityScoreConstants";

/**
 * Utility for getting what classes are available to choose
 * based on ability score requirements.
 */
export const getClassOptionsToDisplay = (abilityScores: number[]) => {
  // these classes have no ability score requirements
  const classOptions: {
    [key: string]: string;
  } = {
    cleric: characterClasses.cleric.name,
    fighter: characterClasses.fighter.name,
    magicUser: characterClasses.magicUser.name,
    thief: characterClasses.thief.name
  };

  // if CON >= 9 add Dwarf to list of possible classes
  if (abilityScores[CON] >= 9) classOptions.dwarf = characterClasses.dwarf.name;
  // if INT >= 9 add Drow and Elf to list of possible classes
  if (abilityScores[INT] >= 9) {
    classOptions.drow = characterClasses.drow.name;
    classOptions.elf = characterClasses.elf.name;
  }
  // if CON >= 9 && DEX >= 9 add Halfling to list of possible classes
  if (abilityScores[DEX] >= 9 && abilityScores[CON] >= 9)
    classOptions.halfling = characterClasses.halfling.name;

  return classOptions;
};
