import React, { useContext, useEffect, useState } from "react";
import { get } from "../api/get";
import AppContext from "../AppContext";
import { getSavedCharacterData } from "../utils/getSavedCharacterData";
import CharacterSheet from "./characterSheetComponents/characterSheet";

export default function Character() {
  const [loading, setLoading] = useState(true);
  const {
    savedCharacterData,
    setSavedCharacterData,
    setSavedCharacterInventory,
    setSavedCharacterSpells,
    setSavedCharacterDetails,
    setSavedCharacterTraits,
    setSavedCharacterLanguages,
    setSavedCharacterNotes
  } = useContext(AppContext);

  useEffect(() => {
    const homeURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://oldschoolknave.surge.sh/";

    const URL = window.location.href;
    const characterId = URL.replace(homeURL.concat("permalinked/"), "");

    const fetchCharacter = async () => {
      const apiResponse = await get(characterId).then(response =>
        response.json().then((data: any) => data)
      );
      setSavedCharacterData(
        getSavedCharacterData(
          apiResponse.permaLink,
          homeURL,
          "savedCharacter/1&"
        )
      );
      setSavedCharacterInventory(apiResponse.inventory);
      if (apiResponse.spells) {
        setSavedCharacterSpells(apiResponse.spells);
      }
      if (apiResponse.characterDetails) {
        setSavedCharacterDetails(apiResponse.characterDetails);
      }
      if (apiResponse.traits) {
        setSavedCharacterTraits(apiResponse.traits);
      }
      if (apiResponse.languages) {
        setSavedCharacterLanguages(apiResponse.languages);
      }
      if (apiResponse.notes) {
        setSavedCharacterNotes(apiResponse.notes);
      }
      setLoading(false);
    };
    fetchCharacter();
  }, [
    setSavedCharacterData,
    setSavedCharacterInventory,
    setSavedCharacterSpells,
    setSavedCharacterDetails,
    setSavedCharacterTraits,
    setSavedCharacterLanguages,
    setSavedCharacterNotes
  ]);

  return savedCharacterData && !loading ? (
    <CharacterSheet
      abilityScores={savedCharacterData.abilityScores}
      classSelection={savedCharacterData.class}
      nonTraditionalSpells={savedCharacterData.knave}
      savedCharacterData={savedCharacterData}
    />
  ) : (
    <>
      {/**
       * Need a loading spinner here while loading hook state
       * is toggled so we don't have just a blank screen.
       */}
    </>
  );
}
