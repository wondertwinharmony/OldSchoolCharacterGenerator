import { sample } from "lodash";
import {
  divineScrollSpells,
  magicUserScrollSpells
} from "../characterData/spells";
/**
 * Utilities for getting a random scroll spell for equipment kits
 * that contain a scroll.
 */
export const getDivineScrollSpell = () => {
  return sample(divineScrollSpells);
};

export const getMagicUserScrollSpell = () => {
  return sample(magicUserScrollSpells);
};
