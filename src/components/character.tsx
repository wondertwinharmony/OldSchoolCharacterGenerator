// import { sampleSize } from "lodash";
import React, { useEffect, useState } from "react";
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
import { getAbilityScoreModifier } from "../utils/getAbilityScoreModifier";
import { getArmorClass } from "../utils/getArmorClass";
import { getClassPrimeRequisites } from "../utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "../utils/getExperienceAdjustment";
import { getHitPoints } from "../utils/getHitPoints";
import { getLanguages } from "../utils/getLanguages";
import { getEquipment } from "../utils/getEquipment";
import { getSpells } from "../utils/getSpells";
import { getTraits } from "../utils/getTraits";
import { getCharacterName } from "../utils/getCharacterName";
import { weaponQualities } from "../characterData/weaponQualities";

interface Props {
  abilityScores: number[];
  className?: string;
  classSelection: string;
  includeKnaveSpells: boolean;
}

/**
 * @todo
 * calculate ac based on starting equipment
 *
 * @todo
 * weapons need their information next to them in the
 * equipment kits (use list in old school essentials),
 * armor needs base ac listed as well,
 * holy water listed as well
 *
 * @todo
 * possible icons to use:
 * caret-down, caret-up
 *
 * @todo
 * random name above race
 *
 * @todo
 * include language abilities @see getLanguages for wording
 * of language abilities (ie "unable to read or write")
 */

interface ImplProps extends Props {}

const CharacterImpl: React.SFC<ImplProps> = ({
  abilityScores,
  className,
  classSelection,
  includeKnaveSpells
}) => {
  // Hit Points
  const [hitPoints, setHitPoints] = useState(
    getHitPoints(characterClasses[classSelection].hitDice, abilityScores[CON])
  );
  useEffect(() => {
    setHitPoints(hitPoints);
  }, [hitPoints]);
  // Armor Class
  const [armorClass, setArmorClass] = useState(
    getArmorClass(abilityScores[DEX])
  );
  useEffect(() => {
    setArmorClass(armorClass);
  }, [armorClass]);
  // Languages
  const [languages, setLanguages] = useState(
    getLanguages(characterClasses[classSelection].languages, abilityScores[INT])
  );
  useEffect(() => {
    setLanguages(languages);
  }, [languages]);

  const [equipment] = useState(
    getEquipment(classSelection)
  );

  const [spells] = useState(
    getSpells(includeKnaveSpells)
  );

  const [traits] = useState(
    getTraits()
  )

  const [characterName] = useState(
    getCharacterName()
  );

  const [weaponQualityDescriptions] = useState(
    weaponQualities
  );

  // Character Section Visibility
  const [isTraitsVisible, setIsTraitsVisible] = useState(true);
  const [isLanguagesVisible, setIsLanguagesVisible] = useState(true);
  const [isAbilitiesVisible, setIsAbilitiesVisible] = useState(true);
  const [isClericTurnVisible, setIsClericTurnVisible] = useState(true);
  const [isSpellsVisible, setIsSpellsVisible] = useState(true);
  const [isThiefSkillsVisible, setIsThiefSkillsVisible] = useState(true);

  const [isEquipmentVisible, setIsEquipmentVisible] = useState(true);
  const [isWeaponQualitiesVisible, setIsWeaponQualitiesVisible] = useState(true);

  const experienceAdjustment = getExperienceAdjustment(
    abilityScores,
    getClassPrimeRequisites(classSelection)
  );
  const strMod = getAbilityScoreModifier(abilityScores[STR]);
  const dexMod = getAbilityScoreModifier(abilityScores[DEX]);
  const conMod = getAbilityScoreModifier(abilityScores[CON]);
  const intMod = getAbilityScoreModifier(abilityScores[INT]);
  const wisMod = getAbilityScoreModifier(abilityScores[WIS]);
  const chaMod = getAbilityScoreModifier(abilityScores[CHA]);
  return (
    <div className={className}>
      <CharacterName>{characterName}</CharacterName>
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
        {isTraitsVisible && <div>{traits}</div>}
      </TraitsContainer>

      {/* Ability Scores */}
      <AbilityScoresGrid>
        <div>{`STR: ${abilityScores[STR]} ${
          strMod === "None" ? "" : `(${strMod})`
        }`}</div>
        <div>{`DEX: ${abilityScores[DEX]} ${
          dexMod === "None" ? "" : `(${dexMod})`
        }`}</div>
        <div>{`CON: ${abilityScores[CON]} ${
          conMod === "None" ? "" : `(${conMod})`
        }`}</div>
        <div>{`INT: ${abilityScores[INT]} ${
          intMod === "None" ? "" : `(${intMod})`
        }`}</div>
        <div>{`WIS: ${abilityScores[WIS]} ${
          wisMod === "None" ? "" : `(${wisMod})`
        }`}</div>
        <div>{`CHA: ${abilityScores[CHA]} ${
          chaMod === "None" ? "" : `(${chaMod})`
        }`}</div>
      </AbilityScoresGrid>

      {/* Saves and Stats */}
      <SavesAndStatsGrid>
        <StatsContainer>
          <div>{`HP: ${hitPoints}`}</div>
          <div>{`HD: ${characterClasses[classSelection].hitDice}`}</div>
          <div>{`AC: ${armorClass}`}</div>
          <div>{`${
            experienceAdjustment === "None" ? "" : `${experienceAdjustment}`
          }`}</div>
        </StatsContainer>
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
      </SavesAndStatsGrid>

      {/* Languages */}
      {characterClasses[classSelection].languages && (
        <LanguagesContainer>
          <LanguagesHeader
            onClick={() => {
              setIsLanguagesVisible(!isLanguagesVisible);
            }}
          >
            Languages
            <div>iconHere</div>
          </LanguagesHeader>
          {isLanguagesVisible && <Language>{languages}</Language>}
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
            (<Ability>{characterClasses[classSelection].abilities!.join('\n\n')}</Ability>)}
        </AbilitiesContainer>
      )}

      {/* Cleric Turn Undead */}
      {characterClasses[classSelection].turn && (
        <ClericTurnContainer>
          <ClericTurnHeader
            onClick={() => {
              setIsClericTurnVisible(!isClericTurnVisible);
            }}
          >
            ClericTurn
            <div>iconHere</div>
          </ClericTurnHeader>
          {isClericTurnVisible && (
            <div>{characterClasses[classSelection].turn}</div>
          )}
        </ClericTurnContainer>
      )}

      {/* Spells */}
      {characterClasses[classSelection].spells && (
        <SpellsContainer>
          <SpellsHeader
            onClick={() => {
              setIsSpellsVisible(!isSpellsVisible);
            }}
          >
            Spells
            <div>iconHere</div>
          </SpellsHeader>
          {isSpellsVisible && (
            <div>{spells}</div>
          )}
        </SpellsContainer>
      )}

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
            (<ThiefSkill>{characterClasses[classSelection].skills!.join('\n')}</ThiefSkill>)}
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
        {isEquipmentVisible && <Equipment>{equipment}</Equipment>}
      </EquipmentContainer>

      {/* Weapon Quality Descriptions */}
      <WeaponQualitiesContainer>
        <WeaponQualitiesHeader
          onClick={() => {
            setIsWeaponQualitiesVisible(!isWeaponQualitiesVisible);
          }}
        >
          Weapon Qualities
          <div>iconHere</div>
        </WeaponQualitiesHeader>
        {isWeaponQualitiesVisible && <WeaponQualities>{weaponQualityDescriptions}</WeaponQualities>}
      </WeaponQualitiesContainer>
    </div>
  );
};

/*          {isThiefSkillsVisible &&
            characterClasses[classSelection].skills!.map((skills, index) => (
              <div key={index}>{skills}</div>
            ))}

            {isAbilitiesVisible &&
            characterClasses[classSelection].abilities!.map((ability, index) => (
              <div key={index}>{ability}</div>
            ))}
*/

const CharacterName = styled.div`
  display: flex;
  justify-content: center; 
`;

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
  grid-template-columns: 125px 125px 125px;
  justify-content: center;
`;

const SavesAndStatsGrid = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
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
  display: grid;
  justify-content: center;
  align-content: baseline;
  grid-gap: 0.25rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const LanguagesContainer = styled.div``;

const LanguagesHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Language = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-line;
  padding: 0.5rem;
`;

const AbilitiesContainer = styled.div``;

const AbilitiesHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Ability = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-line;
  padding: 0.5rem;
`;

const ClericTurnContainer = styled.div``;

const ClericTurnHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const SpellsContainer = styled.div``;

const SpellsHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const ThiefSkillsContainer = styled.div``;

const ThiefSkillsHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const ThiefSkill = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-line;
  padding: 0.5rem;
`;

const EquipmentContainer = styled.div``;

const EquipmentHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Equipment = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-line;
  padding: 0.5rem;
`;

const WeaponQualitiesContainer = styled.div``;

const WeaponQualitiesHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const WeaponQualities = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-line;
  padding: 0.5rem;
`;

const StyledCharacter = styled(CharacterImpl)`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default StyledCharacter;
