import React from "react";
import CharacterNameAndClass from "./characterSheetComponents/characterNameAndClass";
import ClassIconAndAbilityScores from "./characterSheetComponents/iconAndAbilityScoresGrid";
import SavesAndStats from "./characterSheetComponents/savesAndStats";

interface Props {
  characterName: string;
  classSelection: string;
  abilityScores: number[];
  strMod: string;
  dexMod: string;
  conMod: string;
  intMod: string;
  wisMod: string;
  chaMod: string;
  hitPoints: number;
  armorClass: number;
  experienceAdjustment: string;
}

/**
 * Generic component that renders pertinent Character Sheet details
 * such as Character Name, Class, Class Icon, Ability Scores, Saves and Stats.
 */
const CharacterDetails: React.SFC<Props> = ({
  characterName,
  classSelection,
  abilityScores,
  strMod,
  dexMod,
  conMod,
  intMod,
  wisMod,
  chaMod,
  hitPoints,
  armorClass,
  experienceAdjustment
}) => {
  return (
    <>
      {/* Character Name and Class Title Segment */}
      <CharacterNameAndClass
        characterName={characterName}
        classSelection={classSelection}
      />

      {/* Character Class Icon and Ability Scores Grid Segment */}
      <ClassIconAndAbilityScores
        classSelection={classSelection}
        abilityScores={abilityScores}
        strMod={strMod}
        dexMod={dexMod}
        conMod={conMod}
        intMod={intMod}
        wisMod={wisMod}
        chaMod={chaMod}
      />

      {/* Saves and Stats Segment */}
      <SavesAndStats
        hitPoints={hitPoints}
        classSelection={classSelection}
        armorClass={armorClass}
        experienceAdjustment={experienceAdjustment}
      />
    </>
  );
};

export default CharacterDetails;
