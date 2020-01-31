import { createContext } from "react";
import { SavedCharacterData } from "./utils/getSavedCharacterData";

interface IAppContext {
  abilityScores: number[];
  classSelection: string;
  includeKnaveSpells: boolean;
  savedCharacterData?: SavedCharacterData;
  setSavedCharacterData: (savedCharacterData?: SavedCharacterData) => void;
  setKnaveSpells: (isKnaveSpellsIncluded: boolean) => void;
  setAbilityScores: (abilityScores: number[]) => void;
  setClassSelection: (classSelection: string) => void;
}

const AppContext = createContext<IAppContext>({
  abilityScores: [0, 0, 0, 0, 0, 0],
  classSelection: "",
  includeKnaveSpells: false,
  savedCharacterData: undefined,
  setSavedCharacterData: () => {},
  setKnaveSpells: () => {},
  setAbilityScores: () => {},
  setClassSelection: () => {}
});

export default AppContext;
