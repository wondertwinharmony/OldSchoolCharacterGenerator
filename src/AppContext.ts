import { createContext } from "react";
import { Items } from "./characterData/items";
import { SavedCharacterData } from "./utils/getSavedCharacterData";

interface IAppContext {
  abilityScores: number[];
  classSelection: string;
  includeKnaveSpells: boolean;
  savedCharacterData?: SavedCharacterData;
  setSavedCharacterData: (savedCharacterData?: SavedCharacterData) => void;
  savedCharacterInventory?: Items;
  setSavedCharacterInventory: (items: Items) => void;
  savedCharacterAC?: number;
  setSavedCharacterAC: (ac: string) => void;
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
  savedCharacterInventory: undefined,
  setSavedCharacterInventory: () => {},
  savedCharacterAC: undefined,
  setSavedCharacterAC: () => {},
  setKnaveSpells: () => {},
  setAbilityScores: () => {},
  setClassSelection: () => {}
});

export default AppContext;
