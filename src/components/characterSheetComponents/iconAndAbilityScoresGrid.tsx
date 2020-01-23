import React from "react";
import styled from "styled-components";
import { characterClasses } from "../../characterData/classes";
import {
  CHA,
  CON,
  DEX,
  INT,
  STR,
  WIS
} from "../../constants/abilityScoreConstants";
import { createMarkup } from "../../utils/createMarkup";

interface Props {
  classSelection: string;
  abilityScores: number[];
  strMod: string;
  dexMod: string;
  conMod: string;
  intMod: string;
  wisMod: string;
  chaMod: string;
}

/**
 * Component for Character Class icon and Ability Score grid.
 */
const ClassIconAndAbilityScores: React.SFC<Props> = ({
  classSelection,
  abilityScores,
  strMod,
  dexMod,
  conMod,
  intMod,
  wisMod,
  chaMod
}) => {
  return (
    <div>
      <ClassIcon>{characterClasses[classSelection].icon}</ClassIcon>

      <AbilityScoresGrid>
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>STR:</strong> ${abilityScores[STR]} ${
              strMod === "None" ? "" : `(${strMod})`
            }`
          )}
        />
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>DEX:</strong> ${abilityScores[DEX]} ${
              dexMod === "None" ? "" : `(${dexMod})`
            }`
          )}
        />
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>CON</strong> ${abilityScores[CON]} ${
              conMod === "None" ? "" : `(${conMod})`
            }`
          )}
        />
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>INT:</strong> ${abilityScores[INT]} ${
              intMod === "None" ? "" : `(${intMod})`
            }`
          )}
        />
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>WIS:</strong> ${abilityScores[WIS]} ${
              wisMod === "None" ? "" : `(${wisMod})`
            }`
          )}
        />
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>CHA:</strong> ${abilityScores[CHA]} ${
              chaMod === "None" ? "" : `(${chaMod})`
            }`
          )}
        />
      </AbilityScoresGrid>
    </div>
  );
};

const ClassIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  opacity: 0.5;
  padding: 0.5rem 0;
`;

const AbilityScoresGrid = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 120px;
  justify-content: center;
  padding: 0 0.25rem;
`;

export default ClassIconAndAbilityScores;
