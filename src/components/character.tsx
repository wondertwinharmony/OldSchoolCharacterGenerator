import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { characterClasses } from "../characterData/classes";
import { weaponQualities } from "../characterData/weaponQualities";
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
import { getCharacterName } from "../utils/getCharacterName";
import { getClassPrimeRequisites } from "../utils/getClassPrimeRequisites";
import { getEquipment } from "../utils/getEquipment";
import { getEquipmentSlots } from "../utils/getEquipmentSlots";
import { getExperienceAdjustment } from "../utils/getExperienceAdjustment";
import { getHitPoints } from "../utils/getHitPoints";
import { getLanguages } from "../utils/getLanguages";
import { getSpells } from "../utils/getSpells";
import { getTraits } from "../utils/getTraits";

interface Props {
  abilityScores: number[];
  className?: string;
  classSelection: string;
  includeKnaveSpells: boolean;
}

/**
 * @todo
 * for scroll items -> RANDOMLY determine a 1st level cleric
 * spell for clerics with scrolls, for wizards maybe randomize
 * a higher level spell. "Nothing more entertaining than
 * giving a 1st level magic user a scroll of disintegrate
 * or fireball"
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
  // Languages
  const [languages, setLanguages] = useState(
    getLanguages(characterClasses[classSelection].languages, abilityScores[INT])
  );
  useEffect(() => {
    setLanguages(languages);
  }, [languages]);
  // Equipment
  const [equipment] = useState(getEquipment(classSelection));
  // Armor Class
  const [armorClass, setArmorClass] = useState(
    getArmorClass(abilityScores[DEX], equipment)
  );
  useEffect(() => {
    setArmorClass(armorClass);
  }, [armorClass]);
  // Spells
  const [spells] = useState(getSpells(includeKnaveSpells));
  // Traits
  const [traits] = useState(getTraits());

  const [characterName] = useState(getCharacterName());

  const [weaponQualityDescriptions] = useState(weaponQualities);

  // Character Section Visibility
  const [isTraitsVisible, setIsTraitsVisible] = useState(true);
  const [isLanguagesVisible, setIsLanguagesVisible] = useState(true);
  const [isAbilitiesVisible, setIsAbilitiesVisible] = useState(true);
  const [isClericTurnVisible, setIsClericTurnVisible] = useState(true);
  const [isSpellsVisible, setIsSpellsVisible] = useState(true);
  const [isThiefSkillsVisible, setIsThiefSkillsVisible] = useState(true);
  const [isEquipmentVisible, setIsEquipmentVisible] = useState(true);
  const [isWeaponQualitiesVisible, setIsWeaponQualitiesVisible] = useState(
    true
  );

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
      <ClassTitle>
        {`Level 1 ${characterClasses[classSelection].name}`}{" "}
      </ClassTitle>
      <TraitsContainer>
        <TraitsHeader
          onClick={() => {
            setIsTraitsVisible(!isTraitsVisible);
          }}
        >
          Traits
          <FontAwesomeIcon
            icon={isTraitsVisible ? "caret-up" : "caret-down"}
            size="lg"
          />
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
            experienceAdjustment === "+0% XP" ? "" : `${experienceAdjustment}`
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
            <FontAwesomeIcon
              icon={isLanguagesVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
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
            <FontAwesomeIcon
              icon={isAbilitiesVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </AbilitiesHeader>
          {isAbilitiesVisible && (
            <Ability>
              {characterClasses[classSelection].abilities!.join("\n\n")}
            </Ability>
          )}
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
            <FontAwesomeIcon
              icon={isClericTurnVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
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
            <FontAwesomeIcon
              icon={isSpellsVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </SpellsHeader>
          {isSpellsVisible && <div>{spells}</div>}
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
            <FontAwesomeIcon
              icon={isThiefSkillsVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </ThiefSkillsHeader>
          {isThiefSkillsVisible && (
            <ThiefSkill>
              {characterClasses[classSelection].skills!.join("\n")}
            </ThiefSkill>
          )}
        </ThiefSkillsContainer>
      )}

      {/* Equipment */}
      <EquipmentContainer>
        <EquipmentHeader
          onClick={() => {
            setIsEquipmentVisible(!isEquipmentVisible);
          }}
        >
          {`Equipment (${getEquipmentSlots(equipment)} slots)`}
          <FontAwesomeIcon
            icon={isEquipmentVisible ? "caret-up" : "caret-down"}
            size="lg"
          />
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
          <FontAwesomeIcon
            icon={isWeaponQualitiesVisible ? "caret-up" : "caret-down"}
            size="lg"
          />
        </WeaponQualitiesHeader>
        {isWeaponQualitiesVisible && (
          <WeaponQualities>{weaponQualityDescriptions}</WeaponQualities>
        )}
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
