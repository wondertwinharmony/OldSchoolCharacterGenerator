import React, { Component } from 'react';
import AppContext, { SavedCharacterDetails } from './AppContext';
import AppRouter from './AppRouter';
import { Items } from './characterData/items';
import { Spells } from './characterData/spells';
import { getAbilityScores } from './utils/getAbilityScores';
import { SavedCharacterData } from './utils/getSavedCharacterData';

export default class AppImpl extends Component {
  state = {
    abilityScores: [0, 0, 0, 0, 0, 0],
    classSelection: '',
    nonTraditionalSpells: false,
    savedCharacterData: undefined,
    savedCharacterInventory: undefined,
    savedCharacterSpells: undefined,
    savedCharacterDetails: undefined
  };

  componentDidMount() {
    this.setAbilityScores(getAbilityScores());
  }

  setSavedCharacterDetails = (savedCharacterDetails: SavedCharacterDetails) => {
    this.setState({ savedCharacterDetails });
  };

  setNonTraditionalSpells = (includeNonTraditionalSpells: boolean) => {
    this.setState({ nonTraditionalSpells: includeNonTraditionalSpells });
  };

  setAbilityScores = (abilityScores: number[]) => {
    this.setState({ abilityScores });
  };

  setSavedCharacterData = (savedCharacterData?: SavedCharacterData) => {
    this.setState({ savedCharacterData });
  };

  setSavedCharacterInventory = (items?: Items) => {
    this.setState({ savedCharacterInventory: items });
  };

  setClassSelection = (classSelection: string) => {
    this.setState({ classSelection });
  };

  setSavedCharacterSpells = (savedCharacterSpells: Spells) => {
    this.setState({ savedCharacterSpells });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          abilityScores: this.state.abilityScores,
          classSelection: this.state.classSelection,
          nonTraditionalSpells: this.state.nonTraditionalSpells,
          savedCharacterData: this.state.savedCharacterData,
          savedCharacterInventory: this.state.savedCharacterInventory,
          setNonTraditionalSpells: this.setNonTraditionalSpells,
          setAbilityScores: this.setAbilityScores,
          setSavedCharacterData: this.setSavedCharacterData,
          setSavedCharacterInventory: this.setSavedCharacterInventory,
          setClassSelection: this.setClassSelection,
          savedCharacterSpells: this.state.savedCharacterSpells,
          setSavedCharacterSpells: this.setSavedCharacterSpells,
          savedCharacterDetails: this.state.savedCharacterDetails,
          setSavedCharacterDetails: this.setSavedCharacterDetails
        }}
      >
        <AppRouter />
      </AppContext.Provider>
    );
  }
}
