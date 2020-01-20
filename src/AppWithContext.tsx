import React, { Component } from 'react';
import AppContext from './AppContext';
import AppRouter from './AppRouter';
import { getAbilityScores } from './utils/getAbilityScores';

export default class AppImpl extends Component {
    state = {
        abilityScores: [0,0,0,0,0,0],
        classSelection: "fighter",
        includeKnaveSpells: false,
        savedCharacterData: undefined
    };

    componentDidMount(){
        this.setAbilityScores(getAbilityScores());
    }

    setKnaveSpells = (isKnaveSpellsIncluded: boolean) => {
        this.setState({includeKnaveSpells: isKnaveSpellsIncluded});
    };


    setAbilityScores = (abilityScores: number[]) => {
        this.setState({abilityScores});
    };

    render() {
        return (
            <AppContext.Provider value={{
                abilityScores: this.state.abilityScores,
                classSelection: this.state.classSelection,
                includeKnaveSpells: this.state.includeKnaveSpells,
                savedCharacterData: this.state.savedCharacterData,
                setKnaveSpells: this.setKnaveSpells,
                setAbilityScores: this.setAbilityScores,
            }}>
                <AppRouter/>
            </AppContext.Provider>

        )
    };
};
