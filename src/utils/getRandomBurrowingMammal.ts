import { sample } from "lodash";
import { burrowingMammals } from "../characterData/gear";
/**
 * Utility function to get a random burrowing mammal.
 */
export const getRandomBurrowingMammal = () => {
  return `${sample(burrowingMammals)} (pet)`;
};
