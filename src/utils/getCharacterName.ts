import { sampleSize } from "lodash";
import { firstNames, surnames } from "../characterData/names";

/**
 * Utility function that random generates a character's name, 
 * and returns results in a string.
 */
export const getCharacterName = () => {
  return (
    sampleSize(firstNames, 1).toString() +
    " " +
    sampleSize(surnames, 1).toString()
  );
};
