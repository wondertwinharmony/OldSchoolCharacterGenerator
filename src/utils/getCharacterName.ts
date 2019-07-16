import { sampleSize } from "lodash";
import { crabPersonName, firstNames, surnames } from "../characterData/names";

/**
 * Utility function that random generates a character's name,
 * and returns results in a string.
 */
export const getCharacterName = (classOptionKey: string) => {
  /**
   * Crab-People have a different culture and so their names
   * are drawn from a list created for Yoon-Suin.
   */
  if (classOptionKey === "crabPerson")
    return sampleSize(crabPersonName, 1).toString();

  return (
    sampleSize(firstNames, 1).toString() +
    " " +
    sampleSize(surnames, 1).toString()
  );
};
