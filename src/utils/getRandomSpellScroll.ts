import { sample } from "lodash";
import {
  divineScrollSpells,
  druidSpellScrolls,
  illusionistSpellScrolls,
  magicUserScrollSpells
} from "../characterData/spells";
/**
 * Utilities for getting a random scroll spell for equipment kits
 * that contain a scroll.
 */
export const getDivineScrollSpell = () => {
  return sample(divineScrollSpells);
};

export const getDruidScrollSpell = () => {
  return sample(druidSpellScrolls);
};

export const getMagicUserScrollSpell = () => {
  return sample(magicUserScrollSpells);
};

export const getIllusionistScrollSpell = () => {
  return sample(illusionistSpellScrolls);
};
