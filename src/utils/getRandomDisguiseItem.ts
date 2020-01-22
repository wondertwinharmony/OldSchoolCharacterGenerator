import { sample } from "lodash";
import { disguiseItems } from "../characterData/gear";
/**
 * Utility function to get a random disguise item.
 */
export const getRandomDisguiseItem = () => {
  return `${sample(disguiseItems)}`;
};
