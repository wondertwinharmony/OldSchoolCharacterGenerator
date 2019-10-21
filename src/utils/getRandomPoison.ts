import { sample } from "lodash";
import { poisons } from "../characterData/gear";
/**
 * Utility function to get a random poison.
 */
export const getRandomPoison = () => {
  return `${sample(poisons)}`;
};
