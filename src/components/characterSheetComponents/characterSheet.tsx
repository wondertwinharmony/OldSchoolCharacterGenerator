import React, { useContext, useState } from "react";
import { FaDAndD, FaDiceD20 } from "react-icons/fa";
import {
  GiChewedSkull,
  GiCoins,
  GiCometSpark,
  GiHemp,
  GiKnapsack,
  GiPriceTag,
  GiQuillInk,
  GiScrollUnfurled,
  GiSpiralBottle,
  GiSwordwoman
} from "react-icons/gi";
import { MdChatBubble, MdStar } from "react-icons/md";
import styled from "styled-components";
import AppContext from "../../AppContext";
import { characterClasses } from "../../characterData/classes";
import { combatActions } from "../../characterData/combatActions";
import { gainingXPAndCarousing } from "../../characterData/gainingXPAndCarousing";
import { retainers } from "../../characterData/retainers";
import { weaponQualities } from "../../characterData/weaponQualities";
import {
  CHA,
  CON,
  DEX,
  INT,
  STR,
  WIS
} from "../../constants/abilityScoreConstants";
import {
  characterSheetSegments,
  CharacterSheetSegments
} from "../../constants/characterSheetSegments";
import catsmintEffectTable from "../../static/catsmintEffectTable.png";
import charismaAdjustmentTable from "../../static/charismaAdjustmentTable.png";
import coinConversions from "../../static/coinConversions.png";
import paladinTurningTable from "../../static/paladinTurningTable.png";
import parchment from "../../static/parchment.png";
import turningTableResults from "../../static/turningTableResults.png";
import turnUndeadTable from "../../static/turnUndeadTable.png";
import { characterSkillsLookUp } from "../../utils/characterSkillsLookUp";
import { createMarkup } from "../../utils/createMarkup";
import { getAbilityScoreModifier } from "../../utils/getAbilityScoreModifier";
import { getArmorClass } from "../../utils/getArmorClass";
import { getCharacterName } from "../../utils/getCharacterName";
import { getClassPrimeRequisites } from "../../utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "../../utils/getExperienceAdjustment";
import { getHitPoints } from "../../utils/getHitPoints";
import { getInventory } from "../../utils/getInventory";
import { getInventorySlotsUsed } from "../../utils/getInventorySlotsUsed";
import { getLanguages } from "../../utils/getLanguages";
import { getLegacyArmorClass } from "../../utils/getLegacyArmorClass";
import { SavedCharacterData } from "../../utils/getSavedCharacterData";
import { getSpells } from "../../utils/getSpells";
import { getTraits } from "../../utils/getTraits";
import CharacterDetails from "./characterDetails/characterDetails";
import EditCharacterButtonsImpl from "./characterDetails/editCharacterButton";
import CharacterSkills from "./characterSkills";
import EditableContent from "./editableContent/editableContent";
import InventoryImpl from "./inventory/inventory";
import StyledItemsForPurchase from "./itemsForPurchase";
import Permalink from "./permalink";
import Segment from "./segment";
import SpellsImpl from "./spells/spells";

interface Props {
  abilityScores: number[];
  className?: string;
  classSelection: string;
  nonTraditionalSpells: boolean;
  savedCharacterData?: SavedCharacterData;
}

const CharacterSheetImpl: React.SFC<Props> = ({
  abilityScores,
  className,
  classSelection,
  nonTraditionalSpells,
  savedCharacterData
}) => {
  const {
    savedCharacterSpells,
    savedCharacterInventory,
    savedCharacterDetails,
    savedCharacterTraits,
    savedCharacterLanguages,
    savedCharacterNotes
  } = useContext(AppContext);

  const [isEditable, setIsEditable] = useState(false);

  // Character Level
  const characterLevel = savedCharacterDetails
    ? savedCharacterDetails.level
    : 1;
  const characterSpellMatrix = characterClasses[classSelection].spellMatrix;
  const levelSpellMatrixIndex = characterLevel - 1;

  // Character XP
  const characterXP = savedCharacterDetails ? savedCharacterDetails.xp : 0;

  // Hit Points
  const hitPoints =
    (savedCharacterDetails && savedCharacterDetails.hp) ||
    (savedCharacterData && savedCharacterData.hitPoints) ||
    getHitPoints(
      characterClasses[classSelection].hitDice,
      abilityScores[CON],
      classSelection
    );

  // Ability Scores
  const characterAbilityScores = savedCharacterDetails
    ? savedCharacterDetails.abilityScores
    : abilityScores;

  // Max number of resurrections for character
  const maxResurrections = savedCharacterDetails
    ? savedCharacterDetails.maxResurrections
    : characterAbilityScores[CON];

  // Languages
  const languages = savedCharacterLanguages
    ? savedCharacterLanguages
    : getLanguages(
        characterClasses[classSelection].languages,
        abilityScores[INT],
        classSelection
      );
  const oldLanguages = savedCharacterData && savedCharacterData.languages;

  // Inventory
  const oldInventory = savedCharacterData && savedCharacterData.equipment;
  const inventory = savedCharacterInventory
    ? savedCharacterInventory
    : getInventory(classSelection, abilityScores[CON]);

  // Armor Class
  const armorClass = savedCharacterDetails
    ? savedCharacterDetails.ac
    : savedCharacterData && savedCharacterData.equipment
    ? getLegacyArmorClass(
        abilityScores[DEX],
        classSelection,
        savedCharacterData
      )
    : getArmorClass(abilityScores[DEX], classSelection, inventory);

  // Spells
  const oldSpells = savedCharacterData && savedCharacterData.spells;
  const spells = savedCharacterSpells
    ? savedCharacterSpells
    : getSpells(nonTraditionalSpells, classSelection);

  // Spell Level Headers (dynamically determined and tracked)
  const [levelHeadersVisible, setLevelHeadersVisible] = useState(() => {
    let levelHeaders: { [key: string]: boolean } = {};
    if (characterSpellMatrix && characterSpellMatrix[levelSpellMatrixIndex]) {
      characterSpellMatrix[levelSpellMatrixIndex].forEach(
        (spellsKnown: number, index: number) => {
          if (spellsKnown >= 1) {
            levelHeaders[`${index + 1}`] = true;
          }
        }
      );
    }
    return levelHeaders;
  });

  // Traits
  const traits =
    savedCharacterData && savedCharacterTraits
      ? savedCharacterTraits
      : getTraits(abilityScores[INT], languages, classSelection);
  const oldTraits = savedCharacterData && savedCharacterData.traits;

  // Character Name
  const oldCharacterName = savedCharacterData && savedCharacterData.name;
  const characterName =
    oldCharacterName && !savedCharacterDetails
      ? oldCharacterName
      : savedCharacterDetails
      ? savedCharacterDetails.characterName
      : getCharacterName(classSelection);

  // Character Segment Visibility
  const [segmentVisibility, setSegmentVisibility] = useState<
    CharacterSheetSegments
  >(characterSheetSegments);

  // Character Building Utils
  const experienceAdjustment = getExperienceAdjustment(
    characterAbilityScores,
    getClassPrimeRequisites(classSelection),
    classSelection
  );
  const strMod = getAbilityScoreModifier(characterAbilityScores[STR]);
  const dexMod = getAbilityScoreModifier(characterAbilityScores[DEX]);
  const conMod = getAbilityScoreModifier(characterAbilityScores[CON]);
  const intMod = getAbilityScoreModifier(characterAbilityScores[INT]);
  const wisMod = getAbilityScoreModifier(characterAbilityScores[WIS]);
  const chaMod = getAbilityScoreModifier(characterAbilityScores[CHA]);

  return (
    <div className={className}>
      {/* Permalink Button and Bookmark Message */}
      {savedCharacterData ? (
        <EditCharacterButtonsImpl
          isEditable={isEditable}
          setIsEditable={setIsEditable}
        />
      ) : (
        <Permalink
          savedCharacterData={savedCharacterData}
          characterName={characterName}
          classSelection={classSelection}
          traits={traits}
          abilityScores={abilityScores}
          hitPoints={hitPoints}
          languages={languages}
          inventory={inventory}
          spells={spells}
          nonTraditionalSpells={nonTraditionalSpells}
          characterDetails={{
            hp: hitPoints,
            ac: armorClass,
            xp: characterXP,
            level: characterLevel,
            abilityScores,
            maxResurrections,
            characterName
          }}
        />
      )}

      {/**
       * Character Details Section -
       * Name/Class Title/Character Class Icon/Ability Scores Grid/Saves/Stats
       */}
      <CharacterDetails
        characterName={characterName}
        classSelection={classSelection}
        abilityScores={characterAbilityScores}
        strMod={strMod}
        dexMod={dexMod}
        conMod={conMod}
        intMod={intMod}
        wisMod={wisMod}
        chaMod={chaMod}
        hitPoints={hitPoints}
        armorClass={armorClass}
        maxResurrections={maxResurrections}
        experienceAdjustment={experienceAdjustment}
        characterLevel={characterLevel}
        characterXP={characterXP}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
      />

      {/* Traits Segment*/}
      <Segment
        segmentIcon={<GiScrollUnfurled />}
        segmentDisplayName={"Traits"}
        segmentData={
          <EditableContent
            content={oldTraits && !savedCharacterTraits ? oldTraits : traits}
            contentType="Traits"
          />
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Languages Segment*/}
      <Segment
        segmentIcon={<MdChatBubble />}
        segmentDisplayName={"Languages"}
        segmentData={
          <EditableContent
            content={
              oldLanguages && !savedCharacterLanguages
                ? oldLanguages
                : languages
            }
            contentType="Languages"
          />
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Abilities Segment*/}
      <Segment
        segmentIcon={<MdStar />}
        segmentDisplayName={"Abilities"}
        segmentData={
          <Ability
            dangerouslySetInnerHTML={createMarkup(
              characterClasses[classSelection].abilities!.join("\n\n")
            )}
          />
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Turn Undead Segment - Cleric/Paladin */}
      {(classSelection === "paladin" || classSelection === "cleric") && (
        <Segment
          segmentIcon={<GiChewedSkull />}
          segmentName={"TurnUndeadTable"}
          segmentDisplayName={"Turning the Undead"}
          segmentData={
            <TurnUndeadContainer>
              {characterClasses[classSelection].clericTurn ? (
                <>
                  <ClericTurnTable />
                  <div>{characterClasses[classSelection].clericTurn}</div>
                </>
              ) : (
                <>
                  <PaladinTurnTable />
                  <div>{characterClasses[classSelection].paladinTurn}</div>
                </>
              )}
              <ClericTurnResultsTable />
            </TurnUndeadContainer>
          }
          collapse={segmentVisibility}
          setCollapse={setSegmentVisibility}
        />
      )}

      {/**
       * Spells Segment
       *
       * Check if character has spells available by their
       * current level. E.g. half-elf gets spells segment
       * to show up when they can finally cast spells at
       * level two.
       */}
      {characterSpellMatrix &&
        characterSpellMatrix[levelSpellMatrixIndex][0] >= 1 && (
          <Segment
            segmentIcon={<GiCometSpark />}
            segmentDisplayName={"Spells"}
            segmentData={
              savedCharacterSpells && savedCharacterData ? (
                <SpellsImpl
                  classSelection={classSelection}
                  castingMethod={characterClasses[classSelection].castingMethod}
                  spells={savedCharacterSpells}
                  spellsMatrix={
                    characterSpellMatrix &&
                    characterSpellMatrix[levelSpellMatrixIndex]
                  }
                  characterLevel={characterLevel}
                  levelHeadersVisible={levelHeadersVisible}
                  setLevelHeadersVisible={setLevelHeadersVisible}
                />
              ) : spells ? (
                <SpellsImpl
                  classSelection={classSelection}
                  castingMethod={characterClasses[classSelection].castingMethod}
                  spells={spells}
                  spellsMatrix={
                    characterSpellMatrix &&
                    characterSpellMatrix[levelSpellMatrixIndex]
                  }
                  characterLevel={characterLevel}
                  levelHeadersVisible={levelHeadersVisible}
                  setLevelHeadersVisible={setLevelHeadersVisible}
                />
              ) : (
                <SpellsContainer>
                  {characterClasses[classSelection].spell && oldSpells && (
                    <>
                      <Spell
                        dangerouslySetInnerHTML={createMarkup(
                          oldSpells.join("\n\n")
                        )}
                      />
                      {/* {checkSpell(oldSpells) && (
                        <KnaveAddendum
                          dangerouslySetInnerHTML={createMarkup(
                            knaveSpellAddendum
                          )}
                        />
                      )} */}
                    </>
                  )}
                </SpellsContainer>
              )
            }
            collapse={segmentVisibility}
            setCollapse={setSegmentVisibility}
          />
        )}

      {/* Catsmint Effect Segment - Cat Person */}
      {(classSelection === "catPerson") && (
        <Segment
          segmentIcon={<GiHemp />}
          segmentName={"CatsmintEffectTable"}
          segmentDisplayName={"Catsmint Effect Table"}
          segmentData={
            <CatsmintEffectContainer>
              <CatsmintEffectTable />
            </CatsmintEffectContainer>
          }
          collapse={segmentVisibility}
          setCollapse={setSegmentVisibility}
        />
      )}

      {/* Character Skills Segment */}
      {characterClasses[classSelection][
        characterSkillsLookUp(classSelection)
      ] && (
        <Segment
          segmentIcon={characterClasses[classSelection].skillsIcon}
          segmentName={"Skills"}
          segmentDisplayName={
            classSelection !== "ranger"
              ? classSelection !== "wildMagicUser"
                ? `${characterClasses[classSelection].name} Skills`
                : "Wild Surges"
              : "Ranger Tracking"
          }
          segmentData={
            <CharacterSkills
              classSelection={classSelection}
              skillsTable={characterClasses[classSelection].skillsTable}
            />
          }
          collapse={segmentVisibility}
          setCollapse={setSegmentVisibility}
        />
      )}


      {/* Inventory Segment */}
      <Segment
        segmentIcon={<GiKnapsack />}
        segmentName={"Inventory"}
        segmentDisplayName={
          savedCharacterInventory && savedCharacterData
            ? `Inventory (${getInventorySlotsUsed(savedCharacterInventory)}/${
                abilityScores[CON] > 10 ? abilityScores[CON] : 10
              } slots)`
            : inventory
            ? `Inventory (${getInventorySlotsUsed(inventory)}/${
                abilityScores[CON] > 10 ? abilityScores[CON] : 10
              } slots)`
            : `Inventory (${oldInventory && oldInventory.slotsToFill}/${
                abilityScores[CON] > 10 ? abilityScores[CON] : 10
              } slots)`
        }
        segmentData={
          <>
            {savedCharacterInventory && savedCharacterData ? (
              <InventoryImpl inventory={savedCharacterInventory} />
            ) : inventory ? (
              <InventoryImpl inventory={inventory} />
            ) : (
              <>
                {oldInventory && (
                  <Equipment
                    dangerouslySetInnerHTML={
                      savedCharacterData &&
                      createMarkup(oldInventory.characterEquipmentString)
                    }
                  />
                )}
              </>
            )}
            <GoldText>
              † 160 coins can be contained in 1 slot, provided you have a
              container for them.
            </GoldText>
          </>
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Character Notes Segment*/}
      <Segment
        segmentIcon={<GiQuillInk />}
        segmentDisplayName={"Notes"}
        segmentData={
          <EditableContent
            content={savedCharacterNotes ? savedCharacterNotes : "No notes."}
            contentType="Notes"
          />
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Combat Actions Segment */}
      <Segment
        segmentIcon={<FaDiceD20 />}
        segmentName={"CombatActions"}
        segmentDisplayName={"Combat Actions"}
        segmentData={
          <>
            <CombatActions
              dangerouslySetInnerHTML={createMarkup(combatActions)}
            />
          </>
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Weapon Quality Descriptions Segment */}
      <Segment
        segmentIcon={<GiSpiralBottle />}
        segmentName={"WeaponQualities"}
        segmentDisplayName={
          <WeaponQualitiesHeaderText>
            <div style={{ display: "flex" }}>
              Item
              <HeaderIcon>
                <FaDAndD />
              </HeaderIcon>
              Weapon
            </div>
            <div>Qualities</div>
          </WeaponQualitiesHeaderText>
        }
        segmentData={
          <>
            <WeaponQualities
              dangerouslySetInnerHTML={createMarkup(weaponQualities)}
            />
          </>
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Items for Purchase Segment */}
      <Segment
        segmentIcon={<GiPriceTag />}
        segmentName={"ItemsForPurchase"}
        segmentDisplayName={"Items For Purchase"}
        segmentData={
          <>
            <StyledItemsForPurchase />
          </>
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Retainers Segment*/}
      <Segment
        segmentIcon={<GiSwordwoman />}
        segmentDisplayName={"Retainers"}
        segmentData={
          <>
            <CharismaAdjustmentsTable />
            <Retainers dangerouslySetInnerHTML={createMarkup(retainers)} />
          </>
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Gaining XP & Carousing Description Segment*/}
      <Segment
        segmentIcon={<GiCoins />}
        segmentName={"GainingXPAndCarousing"}
        segmentDisplayName={
          <GainingXPAndCarousingHeaderText>
            <div style={{ display: "flex" }}>
              Gaining XP
              <HeaderIcon>
                <FaDAndD />
              </HeaderIcon>
            </div>
            Carousing
          </GainingXPAndCarousingHeaderText>
        }
        segmentData={
          <>
            <GainingXPAndCarousing
              dangerouslySetInnerHTML={createMarkup(gainingXPAndCarousing)}
            />
            <CoinConversionsTable />
          </>
        }
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />
    </div>
  );
};

const HeaderIcon = styled.div`
  margin: 0 0.5rem;
`;

const Ability = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const CatsmintEffectContainer = styled.div`
  display: block;
  text-align: center;
  padding: 0.5rem;
`;

const CatsmintEffectTable = styled.div`
  height: 26.75rem;
  background-image: url(${catsmintEffectTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 23rem 27rem;
`;

const TurnUndeadContainer = styled.div`
  display: block;
  text-align: center;
  padding: 0.5rem;
`;

const ClericTurnTable = styled.div`
  height: 26.75rem;
  background-image: url(${turnUndeadTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 23rem 27rem;
`;

const ClericTurnResultsTable = styled.div`
  height: 17.75rem;
  background-image: url(${turningTableResults});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24rem 14rem;
`;

const PaladinTurnTable = styled.div`
  height: 26.75rem;
  background-image: url(${paladinTurningTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 23rem 27rem;
`;

const SpellsContainer = styled.div``;

const Spell = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

// const KnaveAddendum = styled.div`
//   padding: 0.5rem;
//   display: block;
//   white-space: pre-line;
// `;

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

const CombatActions = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const WeaponQualitiesHeaderText = styled.div`
  text-align: center;
`;

const WeaponQualities = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const CharismaAdjustmentsTable = styled.div`
  height: 15.75rem;
  background-image: url(${charismaAdjustmentTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 14rem;
`;

const Retainers = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
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

const StyledCreatedCharacter = styled(CharacterSheetImpl)`
  font-family: "Roboto Mono", monospace;
  background-image: url(${parchment});
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default StyledCreatedCharacter;
