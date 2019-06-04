import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FaDAndD, FaDiceD20 } from "react-icons/fa";
import {
  GiChewedSkull,
  GiCoins,
  GiCometSpark,
  GiKnapsack,
  GiLockPicking,
  GiScrollUnfurled,
  GiSpiralBottle
} from "react-icons/gi";
import { MdChatBubble, MdStar } from "react-icons/md";
import styled from "styled-components";
import { characterClasses, saves } from "../characterData/classes";
import { combatActions } from "../characterData/combatActions";
import { gainingXPAndCarousing } from "../characterData/gainingXPAndCarousing";
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
import coinConversions from "../static/coinConversions.png";
import TurnUndeadTable from "../static/TurnUndeadTable.png";
import { checkSpell } from "../utils/checkSpell";
import { createMarkup } from "../utils/createMarkup";
import { getAbilityScoreModifier } from "../utils/getAbilityScoreModifier";
import { getArmorClass } from "../utils/getArmorClass";
import { getCharacterName } from "../utils/getCharacterName";
import { getClassPrimeRequisites } from "../utils/getClassPrimeRequisites";
import { getEquipment } from "../utils/getEquipment";
import { getExperienceAdjustment } from "../utils/getExperienceAdjustment";
import { getHitPoints } from "../utils/getHitPoints";
import { getLanguages } from "../utils/getLanguages";
import { SavedCharacterData } from "../utils/getSavedCharacterData";
import { getSpells } from "../utils/getSpells";
import { getTraits } from "../utils/getTraits";
import { saveCharacterData } from "../utils/saveCharacterData";

interface Props {
  abilityScores: number[];
  className?: string;
  classSelection: string;
  includeKnaveSpells: boolean;
  savedCharacterData?: SavedCharacterData;
}

interface ImplProps extends Props {}

const CharacterImpl: React.SFC<ImplProps> = ({
  abilityScores,
  className,
  classSelection,
  includeKnaveSpells,
  savedCharacterData
}) => {
  // Hit Points
  const [hitPoints, setHitPoints] = useState(
    (savedCharacterData && savedCharacterData.hitPoints) ||
      getHitPoints(
        characterClasses[classSelection].hitDice,
        abilityScores[CON],
        classSelection
      )
  );
  useEffect(() => {
    setHitPoints(hitPoints);
  }, [hitPoints]);
  // Languages
  const [languages, setLanguages] = useState(
    savedCharacterData
      ? savedCharacterData && savedCharacterData.languages
      : getLanguages(
          characterClasses[classSelection].languages,
          abilityScores[INT],
          classSelection
        )
  );
  useEffect(() => {
    setLanguages(languages);
  }, [languages]);
  // Equipment
  const [equipment] = useState(
    savedCharacterData
      ? savedCharacterData && savedCharacterData.equipment
      : getEquipment(classSelection, abilityScores[CON])
  );

  // Armor Class
  const [armorClass, setArmorClass] = useState(
    getArmorClass(
      abilityScores[DEX],
      equipment.characterEquipmentString,
      classSelection
    )
  );
  useEffect(() => {
    setArmorClass(armorClass);
  }, [armorClass]);

  // Spells
  const [spells] = useState(
    savedCharacterData
      ? savedCharacterData && savedCharacterData.spells
      : getSpells(includeKnaveSpells, classSelection)
  );

  // Traits
  const [traits] = useState(
    savedCharacterData
      ? savedCharacterData && savedCharacterData.traits
      : getTraits(abilityScores[INT], languages, classSelection)
  );

  //Character Name
  const [characterName] = useState(
    savedCharacterData
      ? savedCharacterData && savedCharacterData.name
      : getCharacterName(classSelection)
  );

  // Character Section Visibility
  const [isTraitsVisible, setIsTraitsVisible] = useState(true);
  const [isLanguagesVisible, setIsLanguagesVisible] = useState(true);
  const [isAbilitiesVisible, setIsAbilitiesVisible] = useState(true);
  const [isClericTurnVisible, setIsClericTurnVisible] = useState(true);
  const [isSpellsVisible, setIsSpellsVisible] = useState(true);
  const [isThiefSkillsVisible, setIsThiefSkillsVisible] = useState(true);
  const [isEquipmentVisible, setIsEquipmentVisible] = useState(true);
  const [isCombatActionsVisible, setIsCombatActionsVisible] = useState(true);
  const [isWeaponQualitiesVisible, setIsWeaponQualitiesVisible] = useState(
    true
  );
  const [
    isGainingXPAndCarousingVisible,
    setIsGainingXPAndCarousingVisible
  ] = useState(true);

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

  /**
   * ICON NOTES:
   *
   * traits: GiScrollUnfurled
   * languages: MdChatBubble
   * abilities: MdStar
   * turning the dead: GiChewedSkull
   * @todo Possibly add different spell icons
   * as more spellcaster classes are added
   * spells: GiCometSpark
   * thief skills: GiLockPicking
   * equipment: GiKnapsack
   * dual wielding and weapon qualities: FaDiceD20
   */

  return (
    <div className={className}>
      {!savedCharacterData ? (
        <PermalinkButtonContainer>
          <PermalinkButton
            style={{ width: "275px" }}
            variant="outline-secondary"
            onClick={() => {
              saveCharacterData(
                characterName,
                classSelection,
                traits,
                abilityScores,
                hitPoints,
                languages,
                spells,
                equipment.characterEquipmentString,
                equipment.slotsToFill
              );
            }}
          >
            Permalink
          </PermalinkButton>
          <div>(or refresh to roll a new character)</div>
        </PermalinkButtonContainer>
      ) : (
        <SaveMessageContainer>
          <SaveHeader>
            <FontAwesomeIcon
              icon={"exclamation-triangle"}
              size="sm"
              style={{ margin: "0.5rem" }}
            />
            IMPORTANT
            <FontAwesomeIcon
              icon={"exclamation-triangle"}
              size="sm"
              style={{ margin: "0.5rem" }}
            />
          </SaveHeader>
          <SaveMessage
            dangerouslySetInnerHTML={createMarkup(
              "<strong>Bookmark this page. Save the results!\n</strong>"
            )}
          />
        </SaveMessageContainer>
      )}
      <CharacterName>{characterName}</CharacterName>
      <ClassTitle>
        {`Level 1 ${characterClasses[classSelection].name}`}
      </ClassTitle>
      <ClassIcon>{characterClasses[classSelection].icon}</ClassIcon>

      {/* Ability Scores */}
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

      {/* Saves and Stats */}
      <SavesAndStatsGrid>
        <StatsContainer>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>HP:</strong> ${hitPoints}`
            )}
          />
          {/* <div>{`HP: ${hitPoints}`}</div> */}
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>HD:</strong> ${characterClasses[classSelection].hitDice}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>AC:</strong> ${armorClass}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>${
                experienceAdjustment === "+0% XP"
                  ? ""
                  : `${experienceAdjustment}`
              }</strong>`
            )}
          />
        </StatsContainer>
        <SavesContainer>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.poison}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.poison}
            </SaveScore>
          </Save>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.wands}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.wands}
            </SaveScore>
          </Save>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.stone}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.stone}
            </SaveScore>
          </Save>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.breath}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.breath}
            </SaveScore>
          </Save>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.magic}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.magic}
            </SaveScore>
          </Save>
        </SavesContainer>
      </SavesAndStatsGrid>

      {/* Traits */}
      <TraitsContainer>
        <TraitsHeader
          onClick={() => {
            setIsTraitsVisible(!isTraitsVisible);
          }}
        >
          <HeaderIcon>
            <GiScrollUnfurled />
          </HeaderIcon>
          Traits
          <FontAwesomeIcon
            icon={isTraitsVisible ? "caret-up" : "caret-down"}
            size="lg"
            style={{ margin: "0 0.5rem" }}
          />
        </TraitsHeader>
        {isTraitsVisible && <div>{traits}</div>}
      </TraitsContainer>

      {/* Languages */}
      {characterClasses[classSelection].languages && (
        <LanguagesContainer>
          <LanguagesHeader
            onClick={() => {
              setIsLanguagesVisible(!isLanguagesVisible);
            }}
          >
            <HeaderIcon>
              <MdChatBubble />
            </HeaderIcon>
            Languages
            <FontAwesomeIcon
              icon={isLanguagesVisible ? "caret-up" : "caret-down"}
              size="lg"
              style={{ margin: "0 0.5rem" }}
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
            <HeaderIcon>
              <MdStar />
            </HeaderIcon>
            Abilities
            <FontAwesomeIcon
              icon={isAbilitiesVisible ? "caret-up" : "caret-down"}
              size="lg"
              style={{ margin: "0 0.5rem" }}
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
            <HeaderIcon>
              <GiChewedSkull />
            </HeaderIcon>
            Turning the Dead
            <FontAwesomeIcon
              icon={isClericTurnVisible ? "caret-up" : "caret-down"}
              size="lg"
              style={{ margin: "0 0.5rem" }}
            />
          </ClericTurnHeader>
          {isClericTurnVisible && (
            <div>{characterClasses[classSelection].turn}</div>
          )}
          {isClericTurnVisible && <ClericTurnTable />}
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
            <HeaderIcon>
              <GiCometSpark />
            </HeaderIcon>
            Spells
            <FontAwesomeIcon
              icon={isSpellsVisible ? "caret-up" : "caret-down"}
              size="lg"
              style={{ margin: "0 0.5rem" }}
            />
          </SpellsHeader>
          {isSpellsVisible && (
            <Spell
              dangerouslySetInnerHTML={createMarkup(spells.join("\n\n"))}
            />
          )}
          {isSpellsVisible && checkSpell(spells) && (
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
            <HeaderIcon>
              <GiLockPicking />
            </HeaderIcon>
            Thief Skills
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
          <HeaderIcon>
            <GiKnapsack />
          </HeaderIcon>
          {`Equipment (${equipment.slotsToFill}/${
            abilityScores[CON] > 10 ? abilityScores[CON] : 10
          } slots)`}
          <FontAwesomeIcon
            icon={isEquipmentVisible ? "caret-up" : "caret-down"}
            size="lg"
            style={{ margin: "0 0.5rem" }}
          />
        </EquipmentHeader>
        {isEquipmentVisible && (
          <Equipment
            dangerouslySetInnerHTML={createMarkup(
              equipment.characterEquipmentString
            )}
          />
        )}
        {isEquipmentVisible && (
          <GoldText>
            † 160 coins can be contained in 1 slot, provided you have a
            container for them.
          </GoldText>
        )}
      </EquipmentContainer>

      {/* Combat Actions */}
      <CombatActionsContainer>
        <CombatActionsHeader
          onClick={() => {
            setIsCombatActionsVisible(!isCombatActionsVisible);
          }}
        >
          <CombatActionsHeaderText>
            <div style={{ display: "flex" }}>
              <HeaderIcon>
                <FaDiceD20 />
              </HeaderIcon>
              Combat Actions
            </div>
          </CombatActionsHeaderText>
          <FontAwesomeIcon
            icon={isCombatActionsVisible ? "caret-up" : "caret-down"}
            size="lg"
            style={{ margin: "0 0.5rem" }}
          />
        </CombatActionsHeader>
        {isCombatActionsVisible && (
          <CombatActions
            dangerouslySetInnerHTML={createMarkup(combatActions)}
          />
        )}
      </CombatActionsContainer>

      {/* Weapon Quality Descriptions */}
      <WeaponQualitiesContainer>
        <WeaponQualitiesHeader
          onClick={() => {
            setIsWeaponQualitiesVisible(!isWeaponQualitiesVisible);
          }}
        >
          <WeaponQualitiesHeaderText>
            <div style={{ display: "flex" }}>
              <HeaderIcon>
                <GiSpiralBottle />
              </HeaderIcon>
              Item
              <HeaderIcon>
                <FaDAndD />
              </HeaderIcon>
              Weapon
            </div>
            <div>Qualities</div>
          </WeaponQualitiesHeaderText>
          <FontAwesomeIcon
            icon={isWeaponQualitiesVisible ? "caret-up" : "caret-down"}
            size="lg"
            style={{ margin: "0 0.5rem" }}
          />
        </WeaponQualitiesHeader>
        {isWeaponQualitiesVisible && (
          <WeaponQualities
            dangerouslySetInnerHTML={createMarkup(weaponQualities)}
          />
        )}
      </WeaponQualitiesContainer>

      {/* Gaining XP & Carousing Description */}
      <GainingXPAndCarousingContainer>
        <GainingXPAndCarousingHeader
          onClick={() => {
            setIsGainingXPAndCarousingVisible(!isGainingXPAndCarousingVisible);
          }}
        >
          <GainingXPAndCarousingHeaderText>
            <div style={{ display: "flex" }}>
              <HeaderIcon>
                <GiCoins />
              </HeaderIcon>
              Gaining XP
              <HeaderIcon>
                <FaDAndD />
              </HeaderIcon>
            </div>
            Carousing
          </GainingXPAndCarousingHeaderText>
          <FontAwesomeIcon
            icon={isGainingXPAndCarousingVisible ? "caret-up" : "caret-down"}
            size="lg"
            style={{ margin: "0 0.5rem" }}
          />
        </GainingXPAndCarousingHeader>
        {isGainingXPAndCarousingVisible && (
          <React.Fragment>
            <GainingXPAndCarousing
              dangerouslySetInnerHTML={createMarkup(gainingXPAndCarousing)}
            />
            <CoinConversionsTable />
          </React.Fragment>
        )}
      </GainingXPAndCarousingContainer>
    </div>
  );
};

const SaveMessage = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  white-space: pre-line;
`;

const SaveHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 2rem;
`;

const SaveMessageContainer = styled.div`
  @keyframes fadeOut {
    0% {
      opacity: 1;
      height: 73px;
    }
    25% {
      opacity: 0.75;
      height: 73x;
    }
    50% {
      opacity: 0.5;
      height: 73px;
    }
    75% {
      opacity: 0.25;
      height: 73px;
    }
    95% {
      opacity: 0;
      height: 73px;
    }
    100% {
      opacity: 0;
      height: 0px;
    }
  }
  -webkit-animation: fadeOut 8s;
  animation: fadeOut 8s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
`;

const PermalinkButton = styled(Button)`
  color: black;
`;

const PermalinkButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0 0.5rem 0;
`;

const CharacterName = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 2rem;
`;

const ClassTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  border-bottom: 1px solid black;
`;

const ClassIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  opacity: 0.5;
  padding: 0.5rem 0;
`;

const HeaderIcon = styled.div`
  margin: 0 0.5rem;
`;

const TraitsContainer = styled.div`
  padding: 0.5rem;
`;

const TraitsHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const AbilityScoresGrid = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 120px;
  justify-content: center;
  padding: 0 0.25rem;
`;

const SavesAndStatsGrid = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
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
  justify-content: flex-end;
  align-content: baseline;
  grid-gap: 0.25rem;
  padding-right: 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const LanguagesContainer = styled.div``;

const LanguagesHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
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
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const Ability = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const ClericTurnContainer = styled.div`
  display: block;
  text-align: center;
  padding: 0.5rem;
`;

const ClericTurnTable = styled.div`
  height: 9.75rem;
  background-image: url(${TurnUndeadTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24rem 8rem;
`;

const ClericTurnHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const SpellsContainer = styled.div``;

const SpellsHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
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
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const ThiefSkill = styled.div`
  padding: 0.5rem;
  white-space: pre-line;
`;

const EquipmentContainer = styled.div``;

const EquipmentHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const Equipment = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const GoldText = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CombatActionsContainer = styled.div``;

const CombatActionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const CombatActionsHeaderText = styled.div`
  text-align: center;
`;

const CombatActions = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const WeaponQualitiesContainer = styled.div``;

const WeaponQualitiesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const WeaponQualitiesHeaderText = styled.div`
  text-align: center;
`;

const WeaponQualities = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const GainingXPAndCarousingContainer = styled.div``;

const GainingXPAndCarousingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const GainingXPAndCarousingHeaderText = styled.div`
  text-align: center;
`;

const GainingXPAndCarousing = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const CoinConversionsTable = styled.div`
  height: 9.75rem;
  background-image: url(${coinConversions});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24rem 8rem;
`;

const StyledCharacter = styled(CharacterImpl)`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default StyledCharacter;
