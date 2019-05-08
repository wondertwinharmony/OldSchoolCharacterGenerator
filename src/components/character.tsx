import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { characterClasses } from "../characterData/classes";
import { knaveSpellAddendum } from "../characterData/spells";
import { weaponQualities } from "../characterData/weaponQualities";
import {
  CHA,
  CON,
  DEX,
  INT,
  STR,
  WIS
} from "../constants/abilityScoreConstants";
import { checkSpell } from "../utils/checkSpell";
import { createMarkup } from "../utils/createMarkup";
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
 *
 * @todo
 * add Drow class
 * add Bard class
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

  //Character Name
  const [characterName] = useState(getCharacterName());

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
            <Ability
              dangerouslySetInnerHTML={createMarkup(
                characterClasses[classSelection].abilities!.join("\n\n")
              )}
            />
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
          {isSpellsVisible && (
            <Spell dangerouslySetInnerHTML={createMarkup(spells.join())} />
          )}
          {isSpellsVisible && checkSpell(spells.join()) && (
            <KnaveAddendum
              dangerouslySetInnerHTML={createMarkup(knaveSpellAddendum)}
            />
          )}
        </SpellsContainer>
      )}

      {/* Thief Skills */}
      {characterClasses[classSelection].skills && (
        <React.Fragment>
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
          <ThiefSkillsContainer>
            {isThiefSkillsVisible && (
              <ThiefSkill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].skills!.join("\n")
                )}
              />
            )}
          </ThiefSkillsContainer>
        </React.Fragment>
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
        {isEquipmentVisible && (
          <Equipment dangerouslySetInnerHTML={createMarkup(equipment)} />
        )}
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
          <WeaponQualities
            dangerouslySetInnerHTML={createMarkup(weaponQualities)}
          />
        )}
      </WeaponQualitiesContainer>
    </div>
  );
};

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
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
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

const Spell = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const KnaveAddendum = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const ThiefSkillsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ThiefSkillsHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const ThiefSkill = styled.div`
  padding: 0.5rem;
  white-space: pre-line;
`;

const EquipmentContainer = styled.div``;

const EquipmentHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Equipment = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const WeaponQualitiesContainer = styled.div``;

const WeaponQualitiesHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const WeaponQualities = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const StyledCharacter = styled(CharacterImpl)`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default StyledCharacter;
