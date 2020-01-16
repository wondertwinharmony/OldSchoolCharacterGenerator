import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from "react-router-dom";
import StyledApp from "./App";
import StyledCreatedCharacter from "./components/character";
import { toCamelCase } from "./utils/convertToCamelCase";
import { getAbilityScores } from "./utils/getAbilityScores";
import { getSavedCharacterData } from "./utils/getSavedCharacterData";


export default function App() {
    const [abilityScores, setAbilityScores] = useState(getAbilityScores);
    const [isKnaveSpellsIncluded, setKnaveSpells] = useState(false);

    useEffect(() => {
      setKnaveSpells(isKnaveSpellsIncluded);
    }, [isKnaveSpellsIncluded]);

    useEffect(() => {
      setAbilityScores(abilityScores);
    }, [abilityScores]);

    type TParams = { character: string,
                     saved: string,
                     previouslySaved: string
    
    }


    function CharacterSheet({ match }: RouteComponentProps<TParams>) {
      const homeURL =
      process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://oldschoolknave.surge.sh/";
      const baseURL = window.location.href;

        if(match.params.previouslySaved){
          let characterData = getSavedCharacterData(baseURL, homeURL, '');

          return (
            <StyledCreatedCharacter
            classSelection={characterData && characterData.class}
            abilityScores={characterData && characterData.abilityScores}
            includeKnaveSpells={characterData.knave}
            savedCharacterData={characterData}
          />
          )
        }

        if(match.params.saved){
            let savedData = getSavedCharacterData(baseURL, homeURL, "savedCharacter/1&");

            return (
                <StyledCreatedCharacter
                  classSelection={savedData && savedData.class}
                  abilityScores={savedData && savedData.abilityScores}
                  includeKnaveSpells={savedData.knave}
                  savedCharacterData={savedData}
                />
            )
        }

        let generatedCharacterData = match.params.character.split('&');
        let characterClass = generatedCharacterData[0].toLowerCase();
        let abilityStringScoreArr = generatedCharacterData[1].split(',');
        let knave = generatedCharacterData[2] === 'true';
        
        let hyphenatedCharacters = ['magic-user', 'crab-person', 'half-elf', 'wild magic-user', 'half-orc', 'ynnian changeling'];

        if(hyphenatedCharacters.includes(characterClass)){
           characterClass = toCamelCase(characterClass);
        }

        return (
            <StyledCreatedCharacter
                classSelection={characterClass}
                abilityScores={abilityStringScoreArr.map(item => parseInt(item))}
                includeKnaveSpells={knave}
            />
        )
      }

    return (
      <Router basename="/">
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <StyledApp abilityScores={abilityScores} 
                         setKnaveSpells={setKnaveSpells} 
                         isKnaveSpellsIncluded={isKnaveSpellsIncluded}
                         setAbilityScores={setAbilityScores}/>
            </Route>
            <Route path="/savedCharacter/:saved/" component={CharacterSheet}></Route>
            <Route path="/generatedCharacter/:character/" component={CharacterSheet}></Route>
            <Route path="/:previouslySaved/" component={CharacterSheet}></Route>
          </Switch>
      </Router>
    );
}
