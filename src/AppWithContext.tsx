import React, { Component } from "react";
import AppContext from "./AppContext";
import AppRouter from "./AppRouter";
import { getAbilityScores } from "./utils/getAbilityScores";
import { SavedCharacterData } from "./utils/getSavedCharacterData";

export default class AppImpl extends Component {
  state = {
    abilityScores: [0, 0, 0, 0, 0, 0],
    classSelection: "",
    includeKnaveSpells: false,
    savedCharacterData: undefined
  };

  componentDidMount() {
    this.setAbilityScores(getAbilityScores());
  }

  setKnaveSpells = (isKnaveSpellsIncluded: boolean) => {
    this.setState({ includeKnaveSpells: isKnaveSpellsIncluded });
  };

  setAbilityScores = (abilityScores: number[]) => {
    this.setState({ abilityScores });
  };

  setSavedCharacterData = (savedCharacterData?: SavedCharacterData) => {
    this.setState({ savedCharacterData });
  };

  setClassSelection = (classSelection: string) => {
    this.setState({ classSelection });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          abilityScores: this.state.abilityScores,
          classSelection: this.state.classSelection,
          includeKnaveSpells: this.state.includeKnaveSpells,
          savedCharacterData: this.state.savedCharacterData,
          setKnaveSpells: this.setKnaveSpells,
          setAbilityScores: this.setAbilityScores,
          setSavedCharacterData: this.setSavedCharacterData,
          setClassSelection: this.setClassSelection
        }}
      >
        <AppRouter />
      </AppContext.Provider>
    );
  }
}
