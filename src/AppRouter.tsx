import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from "react-router-dom";
import StyledApp from "./App";
import StyledCreatedCharacter from "./components/createdCharacter";
import { toCamelCase } from "./utils/convertToCamelCase";
import { getAbilityScores } from "./utils/getAbilityScores";
import { getSavedCharacterData } from "./utils/getSavedCharacterData";


export default function App() {
    const [abilityScores] = useState(getAbilityScores);
    // const [includeKnaveSpells] = useState(false);

    type TParams = { character: string,
                     saved: string
    
    }

    function CharacterSheet({ match }: RouteComponentProps<TParams>) {
        console.log("Match params: ", match.params);

        if(match.params.saved){
            const homeURL =
                process.env.NODE_ENV === "development"
                ? "http://localhost:3000/"
                : "https://oldschoolknave.surge.sh/";
            let baseURL = window.location.href;
            let savedData = getSavedCharacterData(baseURL, homeURL, "savedCharacter/1&");
            // console.log("Data from Saved: ", savedData);
            
            return (
                <StyledCreatedCharacter
                  classSelection={savedData && savedData.class}
                  abilityScores={savedData && savedData.abilityScores}
                  includeKnaveSpells={false}
                  savedCharacterData={savedData}
                />
            )
        }

        let generatedCharacterData = match.params.character.split('&');
        let characterClass = generatedCharacterData[0].toLowerCase();
        // console.log("Data extracted from params: ", generatedCharacterData);
        let abilityStringScoreArr = generatedCharacterData[1].split(',');
        // console.log("knave: ", generatedCharacterData[2]==="true");

        let hyphenatedCharacters = ['magic-user', 'crab-person', 'half-elf', 'wild magic-user'];

        if(hyphenatedCharacters.includes(characterClass)){
           characterClass = toCamelCase(characterClass);
        }



        return (
            <StyledCreatedCharacter
                classSelection={characterClass}
                abilityScores={abilityStringScoreArr.map(item => parseInt(item))}
                includeKnaveSpells={generatedCharacterData[2]==="true"}
            />
        )
      }

      console.log("abilityScores: ", abilityScores, " ");

    return (
      <Router basename="/">
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <StyledApp abilityScores={abilityScores}/>
            </Route>
            <Route path="/savedCharacter/:saved/" component={CharacterSheet}></Route>
            <Route path="/generatedCharacter/:character/" component={CharacterSheet}></Route>
          </Switch>
      </Router>
    );
}
