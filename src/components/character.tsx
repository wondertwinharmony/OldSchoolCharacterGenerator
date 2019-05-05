// import { sampleSize } from "lodash";
import React, { useState } from "react";
import styled from "styled-components";
import { characterClasses } from "../characterData/classes";
import {
  CHA,
  CON,
  DEX,
  INT,
  STR,
  WIS
} from "../constants/abilityScoreConstants";
import { getClassPrimeRequisites } from "../utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "../utils/getExperienceAdjustment";

interface Props {
  abilityScores: number[];
  className?: string;
  classSelection: string;
}

/**
 * @todo
 * get ability score bonuses (in b/x they are +1 +2 or +3
 * depending on the ability attribute)
 *
 * @todo
 * calculate ac based on starting equipment and dex
 *
 * @todo
 * calculate hp using node roll and hit dice (re-roll 1s 2s)
 *
 * @todo
 *
 */

interface ImplProps extends Props {}

const CharacterImpl: React.SFC<ImplProps> = ({
  abilityScores,
  className,
  classSelection
}) => {
  const [isTraitsVisible, setIsTraitsVisible] = useState(true);
  const [isLanguagesVisible, setIsLanguagesVisible] = useState(true);
  const [isAbilitiesVisible, setIsAbilitiesVisible] = useState(true);
  const [isThiefSkillsVisible, setIsThiefSkillsVisible] = useState(true);

  const [isEquipmentVisible, setIsEquipmentVisible] = useState(true);
  const experienceAdjustment = getExperienceAdjustment(
    abilityScores,
    getClassPrimeRequisites(classSelection)
  );
  return (
    <div className={className}>
      <ClassTitle>{characterClasses[classSelection].name} </ClassTitle>
      <TraitsContainer>
        <TraitsHeader
          onClick={() => {
            setIsTraitsVisible(!isTraitsVisible);
          }}
        >
          Traits
          <div>iconHere</div>
        </TraitsHeader>
        {isTraitsVisible && <div>traits go here</div>}
      </TraitsContainer>

      {/* Ability Scores */}
      <AbilityScoresGrid>
        <div>{`STR: ${abilityScores[STR]}`}</div>
        <div>{`DEX: ${abilityScores[DEX]}`}</div>
        <div>{`CON: ${abilityScores[CON]}`}</div>
        <div>{`INT: ${abilityScores[INT]}`}</div>
        <div>{`WIS: ${abilityScores[WIS]}`}</div>
        <div>{`CHA: ${abilityScores[CHA]}`}</div>
      </AbilityScoresGrid>

      {/* Saves and Stats */}
      <SavesAndStatsGrid>
        <SavesContainer>
          <Save>
            Death Ray or Poison
            <SaveScore>
              {characterClasses[classSelection].saves.poison}
            </SaveScore>
          </Save>
          <Save>
            Magic Wands
            <SaveScore>
              {characterClasses[classSelection].saves.wands}
            </SaveScore>
          </Save>
          <Save>
            Paralysis or Turn to Stone
            <SaveScore>
              {characterClasses[classSelection].saves.stone}
            </SaveScore>
          </Save>
          <Save>
            Dragon Breath
            <SaveScore>
              {characterClasses[classSelection].saves.breath}
            </SaveScore>
          </Save>
          <Save>
            Rods, Staves, or Spells
            <SaveScore>
              {characterClasses[classSelection].saves.magic}
            </SaveScore>
          </Save>
        </SavesContainer>
        <StatsContainer>
          <div>{`HP: getHPUtil()`}</div>
          <div>{`HD: ${characterClasses[classSelection].hitDice}`}</div>
          <div>{`AC: getACUtil()`}</div>
          <div>{`XP: 0 ${
            experienceAdjustment === "None" ? "" : `(${experienceAdjustment})`
          }`}</div>
        </StatsContainer>
      </SavesAndStatsGrid>

      {/* Languages */}
      {characterClasses[classSelection].abilities && (
        <LanguagesContainer>
          <LanguagesHeader
            onClick={() => {
              setIsLanguagesVisible(!isLanguagesVisible);
            }}
          >
            Languages
            <div>iconHere</div>
          </LanguagesHeader>
          {isLanguagesVisible && (
            <div>{characterClasses[classSelection].languages}</div>
          )}
        </LanguagesContainer>
      )}

      {/* Abilities */}
      {characterClasses[classSelection].abilities && (
        <AbilitiesContainer>
          <AbilitiesHeader
            onClick={() => {
              setIsAbilitiesVisible(!isAbilitiesVisible);
            }}
          >
            Abilities
            <div>iconHere</div>
          </AbilitiesHeader>
          {isAbilitiesVisible &&
            characterClasses[classSelection].abilities!.map(ability => (
              <div>{ability}</div>
            ))}
        </AbilitiesContainer>
      )}

      {/* Cleric */}

      {/* Spells */}

      {/* Thief Skills */}
      {characterClasses[classSelection].skills && (
        <ThiefSkillsContainer>
          <ThiefSkillsHeader
            onClick={() => {
              setIsThiefSkillsVisible(!isThiefSkillsVisible);
            }}
          >
            ThiefSkills
            <div>iconHere</div>
          </ThiefSkillsHeader>
          {isThiefSkillsVisible &&
            characterClasses[classSelection].skills!.map(skills => (
              <div>{skills}</div>
            ))}
        </ThiefSkillsContainer>
      )}

      {/* Equipment */}
      <EquipmentContainer>
        <EquipmentHeader
          onClick={() => {
            setIsEquipmentVisible(!isEquipmentVisible);
          }}
        >
          Equipment
          <div>iconHere</div>
        </EquipmentHeader>
        {isEquipmentVisible && <div>getEquipmentUtil()</div>}
      </EquipmentContainer>
    </div>
  );
};

const ClassTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const TraitsContainer = styled.div`
  border-bottom: 1px solid black;
`;

const TraitsHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const AbilityScoresGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  justify-content: center;
`;

const SavesAndStatsGrid = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  justify-content: center;
`;

const SavesContainer = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Save = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SaveScore = styled.div`
  padding: 0 0.75rem;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const LanguagesContainer = styled.div``;

const LanguagesHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const AbilitiesContainer = styled.div``;

const AbilitiesHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const ThiefSkillsContainer = styled.div``;

const ThiefSkillsHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const EquipmentContainer = styled.div``;

const EquipmentHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCharacter = styled(CharacterImpl)`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default StyledCharacter;
