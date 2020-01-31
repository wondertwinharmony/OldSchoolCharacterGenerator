import React, { useEffect, useState } from "react";
import { FaDAndD, FaDiceD20 } from "react-icons/fa";
import {
  GiChewedSkull,
  GiCoins,
  GiCometSpark,
  GiKnapsack,
  GiPriceTag,
  GiScrollUnfurled,
  GiSpiralBottle,
  GiSwordwoman
} from "react-icons/gi";
import { MdChatBubble, MdStar } from "react-icons/md";
import styled from "styled-components";
import { characterClasses } from "../../characterData/classes";
import { combatActions } from "../../characterData/combatActions";
import { gainingXPAndCarousing } from "../../characterData/gainingXPAndCarousing";
import { retainers } from "../../characterData/retainers";
import { knaveSpellAddendum } from "../../characterData/spells";
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
import charismaAdjustmentTable from "../../static/charismaAdjustmentTable.png";
import coinConversions from "../../static/coinConversions.png";
import paladinTurningTable from "../../static/paladinTurningTable.png";
import parchment from "../../static/parchment.png";
import turningTableResults from "../../static/turningTableResults.png";
import turnUndeadTable from "../../static/turnUndeadTable.png";
import { characterSkillsLookUp } from "../../utils/characterSkillsLookUp";
import { checkSpell } from "../../utils/checkSpell";
import { createMarkup } from "../../utils/createMarkup";
import { getAbilityScoreModifier } from "../../utils/getAbilityScoreModifier";
import { getArmorClass } from "../../utils/getArmorClass";
import { getCharacterName } from "../../utils/getCharacterName";
import { getClassPrimeRequisites } from "../../utils/getClassPrimeRequisites";
import { getEquipment } from "../../utils/getEquipment";
import { getExperienceAdjustment } from "../../utils/getExperienceAdjustment";
import { getHitPoints } from "../../utils/getHitPoints";
import { getLanguages } from "../../utils/getLanguages";
import { SavedCharacterData } from "../../utils/getSavedCharacterData";
import { getSpells } from "../../utils/getSpells";
import { getTraits } from "../../utils/getTraits";
import CharacterDetails from "./characterDetails";
import CharacterSkills from "./characterSkills";
import StyledItemsForPurchase from "./itemsForPurchase";
import Permalink from "./permalink";
import Segment from "./segment";

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

  // Character Segment Visibility
  const [segmentVisibility, setSegmentVisibility] = useState<
    CharacterSheetSegments
  >(characterSheetSegments);

  // Character Building Utils
  const experienceAdjustment = getExperienceAdjustment(
    abilityScores,
    getClassPrimeRequisites(classSelection),
    classSelection
  );
  const strMod = getAbilityScoreModifier(abilityScores[STR]);
  const dexMod = getAbilityScoreModifier(abilityScores[DEX]);
  const conMod = getAbilityScoreModifier(abilityScores[CON]);
  const intMod = getAbilityScoreModifier(abilityScores[INT]);
  const wisMod = getAbilityScoreModifier(abilityScores[WIS]);
  const chaMod = getAbilityScoreModifier(abilityScores[CHA]);

  return (
    <div className={className}>
      {/* Permalink Button and Bookmark Message */}
      <Permalink
        savedCharacterData={savedCharacterData}
        characterName={characterName}
        classSelection={classSelection}
        traits={traits}
        abilityScores={abilityScores}
        hitPoints={hitPoints}
        languages={languages}
        spells={spells}
        equipment={equipment}
        includeKnaveSpells={includeKnaveSpells}
      />

      {/**
       * Character Details Section -
       * Name/Class Title/Character Class Icon/Ability Scores Grid/Saves/Stats
       */}
      <CharacterDetails
        characterName={characterName}
        classSelection={classSelection}
        abilityScores={abilityScores}
        strMod={strMod}
        dexMod={dexMod}
        conMod={conMod}
        intMod={intMod}
        wisMod={wisMod}
        chaMod={chaMod}
        hitPoints={hitPoints}
        armorClass={armorClass}
        experienceAdjustment={experienceAdjustment}
      />

      {/* Traits Segment*/}
      <Segment
        segmentIcon={<GiScrollUnfurled />}
        segmentDisplayName={"Traits"}
        segmentData={<TraitsContainer>{traits}</TraitsContainer>}
        collapse={segmentVisibility}
        setCollapse={setSegmentVisibility}
      />

      {/* Languages Segment*/}
      <Segment
        segmentIcon={<MdChatBubble />}
        segmentDisplayName={"Languages"}
        segmentData={<Language>{languages}</Language>}
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
      {(characterClasses[classSelection].paladinTurn ||
        characterClasses[classSelection].clericTurn) && (
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

      {/* Spells Segment */}
      {characterClasses[classSelection].spells && (
        <Segment
          segmentIcon={<GiCometSpark />}
          segmentDisplayName={"Spells"}
          segmentData={
            <SpellsContainer>
              {characterClasses[classSelection].spells && checkSpell(spells) ? (
                <>
                  <Spell
                    dangerouslySetInnerHTML={createMarkup(spells.join("\n\n"))}
                  />
                  <KnaveAddendum
                    dangerouslySetInnerHTML={createMarkup(knaveSpellAddendum)}
                  />
                </>
              ) : (
                <>
                  <Spell
                    dangerouslySetInnerHTML={createMarkup(spells.join("\n\n"))}
                  />
                </>
              )}
            </SpellsContainer>
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

      {/* Equipment Segment */}
      <Segment
        segmentIcon={<GiKnapsack />}
        segmentName={"Equipment"}
        segmentDisplayName={`Equipment (${equipment.slotsToFill}/${
          abilityScores[CON] > 10 ? abilityScores[CON] : 10
        } slots)`}
        segmentData={
          <>
            <Equipment
              dangerouslySetInnerHTML={createMarkup(
                equipment.characterEquipmentString
              )}
            />
            <GoldText>
              † 160 coins can be contained in 1 slot, provided you have a
              container for them.
            </GoldText>
          </>
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

const Language = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-line;
  padding: 0.5rem;
`;

const Ability = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
`;

const TraitsContainer = styled.div`
  padding: 0.5rem;
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

const KnaveAddendum = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
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

const StyledCreatedCharacter = styled(CharacterImpl)`
  font-family: "Roboto Mono", monospace;
  background-image: url(${parchment});
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default StyledCreatedCharacter;
