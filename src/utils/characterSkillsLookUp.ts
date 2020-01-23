export const charactersWithSkills = [
  "thief",
  "acrobat",
  "assasin",
  "barbarian",
  "halfOrc",
  "ranger",
  "psionicist",
  "wildMagicUser"
];
/**
 * Utility function that takes a character class with special skills
 * and builds the lookup string
 * Returns a string that looks like this "[classOption]Skills";
 * @param classOption: string
 */
export const characterSkillsLookUp = (classOption: string) => {
  let lookupString = `${classOption}Skills`;

  if (classOption === "ranger") {
    lookupString = `${classOption}Tracking`;
  }

  if (classOption === "wildMagicUser") {
    lookupString = `${classOption}MagicSurges`;
  }

  return lookupString;
};
