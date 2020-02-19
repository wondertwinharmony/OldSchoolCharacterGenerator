import React, { useContext, useEffect, useState } from 'react';
import { getURL } from '../api/getURL';
import AppContext from '../AppContext';
import { getSavedCharacterData } from '../utils/getSavedCharacterData';
import CharacterSheet from './characterSheetComponents/characterSheet';

export default function Character() {
  const [loading, setLoading] = useState(true);
  const {
    savedCharacterData,
    setSavedCharacterData,
    setSavedCharacterInventory,
    savedCharacterAC,
    setSavedCharacterAC,
    setSavedCharacterSpells,
    setSavedCharacterDetails
  } = useContext(AppContext);

  useEffect(() => {
    const homeURL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : 'https://oldschoolknave.surge.sh/';

    const URL = window.location.href;
    const characterId = URL.replace(homeURL.concat('permalinked/'), '');

    const fetchCharacter = async () => {
      const apiResponse = await getURL(characterId).then(response =>
        response.json().then((data: any) => data)
      );
      setSavedCharacterData(
        getSavedCharacterData(
          apiResponse.permaLink,
          homeURL,
          'savedCharacter/1&'
        )
      );
      setSavedCharacterInventory(apiResponse.inventory);
      setSavedCharacterAC(apiResponse.AC);
      if (apiResponse.spells) {
        setSavedCharacterSpells(apiResponse.spells);
      }
      if (apiResponse.characterDetails) {
        setSavedCharacterDetails(apiResponse.characterDetails);
      }
      setLoading(false);
    };
    fetchCharacter();
  }, [
    setSavedCharacterData,
    setSavedCharacterInventory,
    setSavedCharacterAC,
    setSavedCharacterSpells,
    setSavedCharacterDetails
  ]);

  return savedCharacterData && !loading ? (
    <CharacterSheet
      abilityScores={savedCharacterData.abilityScores}
      classSelection={savedCharacterData.class}
      nonTraditionalSpells={savedCharacterData.knave}
      savedCharacterData={savedCharacterData}
      savedCharacterAC={savedCharacterAC}
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
