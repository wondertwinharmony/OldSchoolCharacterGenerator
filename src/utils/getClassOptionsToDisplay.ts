import { CON, DEX, INT } from "../constants/abilityScoreConstants";

export const getClassOptionsToDisplay = (abilityScores: number[]) => {
  // these classes have no ability score requirements
  const classOptions: string[] = ["cleric", "fighter", "magicUser", "thief"];

  // if CON >= 9 add Dwarf to list of possible classes
  if (abilityScores[CON] >= 9) classOptions.push("dwarf");
  // if INT >= 9 add Elf to list of possible classes
  if (abilityScores[INT] >= 9) classOptions.push("elf");
  // if CON >= 9 && DEX >= 9 add Halfling to list of possible classes
  if (abilityScores[DEX] >= 9 && abilityScores[CON] >= 9)
    classOptions.push("halfling");

  return classOptions;
};
