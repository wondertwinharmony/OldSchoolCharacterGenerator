import { createContext } from "react";
import { Items } from "./characterData/items";
import { Spells } from "./characterData/spells";
import { SavedCharacterData } from "./utils/getSavedCharacterData";

export interface SavedCharacterDetails {
  hp: number;
  ac: number;
  xp: number;
  level: number;
  abilityScores: number[];
  maxResurrections: number;
  characterName: string;
}

interface IAppContext {
  abilityScores: number[];
  classSelection: string;
  nonTraditionalSpells: boolean;
  savedCharacterData?: SavedCharacterData;
  setSavedCharacterData: (savedCharacterData?: SavedCharacterData) => void;
  savedCharacterInventory?: Items;
  setSavedCharacterInventory: (items: Items) => void;
  setNonTraditionalSpells: (isKnaveSpellsIncluded: boolean) => void;
  setAbilityScores: (abilityScores: number[]) => void;
  setClassSelection: (classSelection: string) => void;
  savedCharacterSpells?: Spells;
  setSavedCharacterSpells: (spells: Spells) => void;
  savedCharacterDetails?: SavedCharacterDetails;
  setSavedCharacterDetails: (
    savedCharacterDetails: SavedCharacterDetails
  ) => void;
}

const AppContext = createContext<IAppContext>({
  abilityScores: [0, 0, 0, 0, 0, 0],
  classSelection: "",
  nonTraditionalSpells: false,
  savedCharacterData: undefined,
  setSavedCharacterData: () => {},
  savedCharacterInventory: undefined,
  setSavedCharacterInventory: () => {},
  setNonTraditionalSpells: () => {},
  setAbilityScores: () => {},
  setClassSelection: () => {},
  savedCharacterSpells: undefined,
  setSavedCharacterSpells: () => {},
  savedCharacterDetails: undefined,
  setSavedCharacterDetails: () => {}
});

export default AppContext;
