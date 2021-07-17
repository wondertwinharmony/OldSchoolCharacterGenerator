import { sampleSize } from "lodash";
import { caimenName, catPersonName, crabPersonName, firstNames, giantWomanName, surnames } from "../characterData/names";

/**
 * Utility function that random generates a character's name,
 * and returns results in a string.
 */
export const getCharacterName = (classOptionKey: string) => {
  /**
   * These classes have unique names.
   */
  if (classOptionKey === "catPerson")
  return sampleSize(catPersonName, 1).toString();

  if (classOptionKey === "caimen")
  return sampleSize(caimenName, 1).toString();

  if (classOptionKey === "crabPerson")
    return sampleSize(crabPersonName, 1).toString();

  if (classOptionKey === "giantWoman")
    return sampleSize(giantWomanName, 1).toString(); 

  return (
    sampleSize(firstNames, 1).toString() +
    " " +
    sampleSize(surnames, 1).toString()
  );
};
