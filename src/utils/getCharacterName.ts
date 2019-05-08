import { sampleSize } from "lodash";
import { firstNames, surnames } from "../characterData/names";

export const getCharacterName = () => {
  return (
    sampleSize(firstNames, 1).toString() +
    " " +
    sampleSize(surnames, 1).toString()
  );
};
