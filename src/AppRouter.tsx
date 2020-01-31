import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import StyledApp from "./App";
import AppContext from "./AppContext";
import Character from "./components/character";
import StyledCreatedCharacter from "./components/characterSheetComponents/characterSheet";
import { toCamelCase } from "./utils/convertToCamelCase";
import { getSavedCharacterData } from "./utils/getSavedCharacterData";

export default function AppRouter() {
  type TParams = {
    character: string;
    saved: string;
    characterId: string;
  };

  function CharacterSheet({ match }: RouteComponentProps<TParams>) {
    const { savedCharacterData, classSelection } = useContext(AppContext);

    const homeURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://oldschoolknave.surge.sh/";
    const baseURL = window.location.href;

    /**
     * This checks for legacy permalinks/saved characters prior to
     * last update, due to how the link was built -- note the empty string
     * compared to "savedCharacter/1&".
     * Previously, there were no routes hence the empty string.
     */
    // if(match.params.previouslySaved){
    //   let characterData = getSavedCharacterData(baseURL, homeURL, '');

    //   return (
    //     <StyledCreatedCharacter
    //     classSelection={characterData && characterData.class}
    //     abilityScores={characterData && characterData.abilityScores}
    //     includeKnaveSpells={characterData.knave}
    //     savedCharacterData={characterData}
    //   />
    //   )
    // }

    /**
     * This checks for the route when a character is saved using the LEGACY
     * permalink feature -- note "savedCharacter/1&".
     */
    if (match.params.saved) {
      let savedData = getSavedCharacterData(
        baseURL,
        homeURL,
        "savedCharacter/1&"
      );

      return (
        <StyledCreatedCharacter
          classSelection={savedData && savedData.class}
          abilityScores={savedData && savedData.abilityScores}
          includeKnaveSpells={savedData.knave}
          savedCharacterData={savedData}
        />
      );
    }

    let generatedCharacterData = match.params.character.split("&");
    let characterClass = generatedCharacterData[0].toLowerCase();
    let abilityStringScoreArr = generatedCharacterData[1].split(",");
    let knave = generatedCharacterData[2] === "true";

    let hyphenatedCharacters = [
      "magic-user",
      "citizen lich",
      "crab-person",
      "half-elf",
      "wild magic-user",
      "half-orc",
      "underworld ranger",
      "ynnian changeling"
    ];

    if (hyphenatedCharacters.includes(characterClass)) {
      characterClass = toCamelCase(characterClass);
    }

    /**
     * Checks to see if savedCharacterData exists and if the savedCharacterData class matches with
     * classSelection when the back button is clicked AFTER permalinking, because if it does,
     * use the same data that was stored there when Permalink was clicked to populate
     * the <CharacterSheet>.
     * (This essentially solved the expected behavior of main App View >> generated character >>
     * permalink {click back button} >> generated character [same character info as permalinked character]
     * {click back button again} >> App Main View)
     */
    if (savedCharacterData && savedCharacterData.class === classSelection) {
      return (
        <StyledCreatedCharacter
          classSelection={savedCharacterData.class}
          abilityScores={savedCharacterData.abilityScores}
          includeKnaveSpells={savedCharacterData.knave}
          savedCharacterData={savedCharacterData}
        />
      );
    } else {
      /**
       * Otherwise, the return will render the selected character class.
       */
      return (
        <StyledCreatedCharacter
          classSelection={characterClass}
          abilityScores={abilityStringScoreArr.map(item => parseInt(item))}
          includeKnaveSpells={knave}
        />
      );
    }
  }

  return (
    <Router basename="/">
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <StyledApp />
        </Route>
        <Route
          path="/savedCharacter/:saved/"
          component={CharacterSheet}
        ></Route>
        <Route path="/permalinked/:characterId/" component={Character}></Route>
        <Route
          path="/generatedCharacter/:character/"
          component={CharacterSheet}
        ></Route>
      </Switch>
    </Router>
  );
}
