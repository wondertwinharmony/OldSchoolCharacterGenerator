import { createContext } from "react";
import { Items } from "./characterData/items";
import { Spells } from "./characterData/spells";
import { SavedCharacterData } from "./utils/getSavedCharacterData";

interface IAppContext {
  abilityScores: number[];
  classSelection: string;
  nonTraditionalSpells: boolean;
  savedCharacterData?: SavedCharacterData;
  setSavedCharacterData: (savedCharacterData?: SavedCharacterData) => void;
  savedCharacterInventory?: Items;
  setSavedCharacterInventory: (items: Items) => void;
  savedCharacterAC?: number;
  setSavedCharacterAC: (ac: string) => void;
  setNonTraditionalSpells: (isKnaveSpellsIncluded: boolean) => void;
  setAbilityScores: (abilityScores: number[]) => void;
  setClassSelection: (classSelection: string) => void;
  savedCharacterSpells?: Spells;
  setSavedCharacterSpells: (spells: Spells) => void;
}

const AppContext = createContext<IAppContext>({
  abilityScores: [0, 0, 0, 0, 0, 0],
  classSelection: "",
  nonTraditionalSpells: false,
  savedCharacterData: undefined,
  setSavedCharacterData: () => {},
  savedCharacterInventory: undefined,
  setSavedCharacterInventory: () => {},
  savedCharacterAC: undefined,
  setSavedCharacterAC: () => {},
  setNonTraditionalSpells: () => {},
  setAbilityScores: () => {},
  setClassSelection: () => {},
  savedCharacterSpells: undefined,
  setSavedCharacterSpells: () => {}
});

export default AppContext;
