import { createContext } from "react";
import { SavedCharacterData } from "./utils/getSavedCharacterData";

interface IAppContext {
  abilityScores: number[];
  classSelection: string;
  includeKnaveSpells: boolean;
  savedCharacterData?: SavedCharacterData;
  setKnaveSpells: (isKnaveSpellsIncluded: boolean) => void;
  setAbilityScores: (abilityScores: number[]) => void;
}

const AppContext = createContext<IAppContext>({
  abilityScores: [0, 0, 0, 0, 0, 0],
  classSelection: "fighter",
  includeKnaveSpells: false,
  savedCharacterData: undefined,
  setKnaveSpells: () => {},
  setAbilityScores: () => {}
});

export default AppContext;
