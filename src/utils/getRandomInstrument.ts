import { sample } from "lodash";
import { instruments } from "../characterData/gear";
/**
 * Utility function to get a random instrument.
 */
export const getRandomInstrument = () => {
  return `${sample(instruments)} (instrument)`;
};
