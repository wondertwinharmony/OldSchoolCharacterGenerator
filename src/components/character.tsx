import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaDAndD, FaDiceD20 } from "react-icons/fa";
import {
  GiBloodySword,
  GiBrain,
  GiChewedSkull,
  GiCoins,
  GiCometSpark,
  GiInvisible,
  GiKnapsack,
  GiLaserSparks,
  GiLockPicking,
  GiPawPrint,
  GiPriceTag,
  GiScrollUnfurled,
  GiSnakeTotem,
  GiSpiralBottle,
  GiSwordwoman,
  GiTightrope
} from "react-icons/gi";
import { MdChatBubble, MdStar } from "react-icons/md";
import styled from "styled-components";
import { characterClasses } from "../characterData/classes";
import { combatActions } from "../characterData/combatActions";
import { gainingXPAndCarousing } from "../characterData/gainingXPAndCarousing";
import { retainers } from "../characterData/retainers";
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
import acrobatSkillsTable from "../static/acrobatSkillsTable.png";
import assassinSkillsTable from "../static/assassinSkillsTable.png";
import barbarianSkillsTable from "../static/barbarianSkillsTable.png";
import charismaAdjustmentTable from "../static/charismaAdjustmentTable.png";
import coinConversions from "../static/coinConversions.png";
import halfOrcSkillsTable from "../static/halfOrcSkillsTable.png";
import paladinTurningTable from "../static/paladinTurningTable.png";
import psionicistSkillsChanceOfSuccess from "../static/psionicistSkillsTable.png";
import rangerTrackingTable from "../static/rangerTrackingTable.png";
import thiefSkillsChanceOfSuccess from "../static/thiefSkillsChanceOfSuccess.png";
import turningTableResults from "../static/turningTableResults.png";
import turnUndeadTable from "../static/turnUndeadTable.png";
import wildMagicUserWildSurgesTable from "../static/wildMagicUserWildSurgesTable.png";
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
import parchment from "../static/parchment.png";
import StyledItemsForPurchase from "./itemsForPurchase";
import Permalink from "./characterSheetComponents/permalink";
import CharacterNameAndClass from "./characterSheetComponents/characterNameAndClass";
import ClassIconAndAbilityScores from "./characterSheetComponents/iconAndAbilityScoresGrid";
import SavesAndStats from "./characterSheetComponents/savesAndStats";
import Segment from "./characterSheetComponents/segment";

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
  const [isTraitsVisible, setIsTraitsVisible] = useState(true);
  const [isLanguagesVisible, setIsLanguagesVisible] = useState(true);
  const [isAbilitiesVisible, setIsAbilitiesVisible] = useState(true);
  // const [isClericTurnVisible, setIsClericTurnVisible] = useState(true);
  const [isPaladinTurnVisible, setIsPaladinTurnVisible] = useState(true);
  const [isSpellsVisible, setIsSpellsVisible] = useState(true);
  const [isThiefSkillsVisible, setIsThiefSkillsVisible] = useState(true);
  const [isAcrobatSkillsVisible, setIsAcrobatSkillsVisible] = useState(true);
  const [isAssassinSkillsVisible, setIsAssassinSkillsVisible] = useState(true);
  const [isBarbarianSkillsVisible, setIsBarbarianSkillsVisible] = useState(
    true
  );
  const [isHalfOrcSkillsVisible, setIsHalfOrcSkillsVisible] = useState(true);
  const [isRangerTrackingVisible, setIsRangerTrackingVisible] = useState(true);
  const [isPsionicistSkillsVisible, setIsPsionicistSkillsVisible] = useState(
    true
  );
  const [
    isWildMagicUserMagicSurgesVisible,
    setIsWildMagicUserMagicSurgesVisible
  ] = useState(true);
  const [isEquipmentVisible, setIsEquipmentVisible] = useState(true);
  const [isCombatActionsVisible, setIsCombatActionsVisible] = useState(false);
  const [isWeaponQualitiesVisible, setIsWeaponQualitiesVisible] = useState(
    false
  );
  const [isItemsForPurchaseVisible, setIsItemsForPurchaseVisible] = useState(
    false
  );
  const [isRetainersVisible, setIsRetainersVisible] = useState(false);
  const [
    isGainingXPAndCarousingVisible,
    setIsGainingXPAndCarousingVisible
  ] = useState(false);

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
      <Permalink savedCharacterData={savedCharacterData} 
                 characterName={characterName} 
                 classSelection={classSelection} 
                 traits={traits} 
                 abilityScores={abilityScores} 
                 hitPoints={hitPoints} 
                 languages={languages} 
                 spells={spells} 
                 equipment={equipment} 
                 includeKnaveSpells={includeKnaveSpells}/>

      {/* Character Name and Class Title Segment */}
      <CharacterNameAndClass characterName={characterName} classSelection={classSelection}/>

      {/* Character Class Icon and Ability Scores Grid Segment */}
      <ClassIconAndAbilityScores classSelection={classSelection} 
                                 abilityScores={abilityScores} 
                                 strMod={strMod} 
                                 dexMod={dexMod} 
                                 conMod={conMod} 
                                 intMod={intMod} 
                                 wisMod={wisMod} 
                                 chaMod={chaMod}/>

      {/* Saves and Stats Segment */}
      <SavesAndStats hitPoints={hitPoints} 
                     classSelection={classSelection} 
                     armorClass={armorClass} 
                     experienceAdjustment={experienceAdjustment}/>

      {/* Traits Segment*/}
      <Segment segmentIcon={<GiScrollUnfurled/>}
               segmentName={'Traits'}
               segmentData={traits}
               collapse={isTraitsVisible}
               setCollapse={setIsTraitsVisible}
               />

      {/* Languages Segment*/}
      <Segment segmentIcon={<MdChatBubble/>}
               segmentName={'Languages'}
               segmentData={<Language>{languages}</Language>}
               collapse={isLanguagesVisible}
               setCollapse={setIsLanguagesVisible}
               />

      {/* Abilities Segment*/}
      <Segment segmentIcon={<MdStar/>}
               segmentName={'Abilities'}
               segmentData={<Ability
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].abilities!.join("\n\n")
                )}/>}
               collapse={isAbilitiesVisible}
               setCollapse={setIsAbilitiesVisible}
               />

      {/* Turn Undead Segment - Cleric/Paladin */}
      {(characterClasses[classSelection].paladinTurn || characterClasses[classSelection].clericTurn) && (
      <Segment segmentIcon={<GiChewedSkull/>}
               segmentName={'Turning the Undead'}
               segmentData={<TurnUndeadContainer>
                  {characterClasses[classSelection].clericTurn ? 
                    <><ClericTurnTable />
                      <div>{characterClasses[classSelection].clericTurn}</div>
                    </> :
                    <><PaladinTurnTable />
                      <div>{characterClasses[classSelection].paladinTurn}</div>
                    </>
                  }
                  <ClericTurnResultsTable />
               </TurnUndeadContainer>}
               collapse={isPaladinTurnVisible}
               setCollapse={setIsPaladinTurnVisible}
               />)}

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
      {characterClasses[classSelection].thiefSkills && (
        <React.Fragment>
          <SkillsHeader
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
          </SkillsHeader>
          <SkillsContainer>
            {isThiefSkillsVisible && <ThiefSkillsChanceOfSuccessTable />}
            {isThiefSkillsVisible && (
              <Skill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].thiefSkills!.join("\n")
                )}
              />
            )}
          </SkillsContainer>
        </React.Fragment>
      )}

      {/* Acrobat Skills */}
      {characterClasses[classSelection].acrobatSkills && (
        <React.Fragment>
          <SkillsHeader
            onClick={() => {
              setIsAcrobatSkillsVisible(!isAcrobatSkillsVisible);
            }}
          >
            <HeaderIcon>
              <GiTightrope />
            </HeaderIcon>
            Acrobat Skills
            <FontAwesomeIcon
              icon={isAcrobatSkillsVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </SkillsHeader>
          <SkillsContainer>
            {isAcrobatSkillsVisible && <AcrobatSkillsChanceOfSuccessTable />}
            {isAcrobatSkillsVisible && (
              <Skill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].acrobatSkills!.join("\n")
                )}
              />
            )}
          </SkillsContainer>
        </React.Fragment>
      )}

      {/* Assassin Skills */}
      {characterClasses[classSelection].assassinSkills && (
        <React.Fragment>
          <SkillsHeader
            onClick={() => {
              setIsAssassinSkillsVisible(!isAssassinSkillsVisible);
            }}
          >
            <HeaderIcon>
              <GiBloodySword />
            </HeaderIcon>
            Assassin Skills
            <FontAwesomeIcon
              icon={isAssassinSkillsVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </SkillsHeader>
          <SkillsContainer>
            {isAssassinSkillsVisible && <AssassinSkillsChanceOfSuccessTable />}
            {isAssassinSkillsVisible && (
              <Skill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].assassinSkills!.join("\n")
                )}
              />
            )}
          </SkillsContainer>
        </React.Fragment>
      )}

      {/* Barbarian Skills */}
      {characterClasses[classSelection].barbarianSkills && (
        <React.Fragment>
          <SkillsHeader
            onClick={() => {
              setIsBarbarianSkillsVisible(!isBarbarianSkillsVisible);
            }}
          >
            <HeaderIcon>
              <GiSnakeTotem />
            </HeaderIcon>
            Barbarian Skills
            <FontAwesomeIcon
              icon={isBarbarianSkillsVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </SkillsHeader>
          <SkillsContainer>
            {isBarbarianSkillsVisible && (
              <BarbarianSkillsChanceOfSuccessTable />
            )}
            {isBarbarianSkillsVisible && (
              <Skill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].barbarianSkills!.join("\n")
                )}
              />
            )}
          </SkillsContainer>
        </React.Fragment>
      )}

      {/* Half-Orc Skills */}
      {characterClasses[classSelection].halfOrcSkills && (
        <React.Fragment>
          <SkillsHeader
            onClick={() => {
              setIsHalfOrcSkillsVisible(!isHalfOrcSkillsVisible);
            }}
          >
            <HeaderIcon>
              <GiInvisible />
            </HeaderIcon>
            Half-Orc Skills
            <FontAwesomeIcon
              icon={isHalfOrcSkillsVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </SkillsHeader>
          <SkillsContainer>
            {isHalfOrcSkillsVisible && <HalfOrcSkillsChanceOfSuccessTable />}
            {isHalfOrcSkillsVisible && (
              <Skill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].halfOrcSkills!.join("\n")
                )}
              />
            )}
          </SkillsContainer>
        </React.Fragment>
      )}

      {/* Ranger Tracking Skill */}
      {characterClasses[classSelection].rangerTracking && (
        <React.Fragment>
          <SkillsHeader
            onClick={() => {
              setIsRangerTrackingVisible(!isRangerTrackingVisible);
            }}
          >
            <HeaderIcon>
              <GiPawPrint />
            </HeaderIcon>
            Ranger Tracking
            <FontAwesomeIcon
              icon={isRangerTrackingVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </SkillsHeader>
          <SkillsContainer>
            {isRangerTrackingVisible && <RangerTrackingChanceOfSuccessTable />}
            {isRangerTrackingVisible && (
              <Skill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].rangerTracking!
                )}
              />
            )}
          </SkillsContainer>
        </React.Fragment>
      )}

      {/* Psionicist Skills */}
      {characterClasses[classSelection].psionicistSkills && (
        <React.Fragment>
          <SkillsHeader
            onClick={() => {
              setIsPsionicistSkillsVisible(!isPsionicistSkillsVisible);
            }}
          >
            <HeaderIcon>
              <GiBrain />
            </HeaderIcon>
            Psionicist Skills
            <FontAwesomeIcon
              icon={isPsionicistSkillsVisible ? "caret-up" : "caret-down"}
              size="lg"
            />
          </SkillsHeader>
          <SkillsContainer>
            {isPsionicistSkillsVisible && (
              <PsionicistSkillsChanceOfSuccessTable />
            )}
            {isPsionicistSkillsVisible && (
              <Skill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[classSelection].psionicistSkills!.join("\n")
                )}
              />
            )}
          </SkillsContainer>
        </React.Fragment>
      )}

      {/* Wild Magic-User Wild Surges */}
      {characterClasses[classSelection].wildMagicUserMagicSurges && (
        <React.Fragment>
          <SkillsHeader
            onClick={() => {
              setIsWildMagicUserMagicSurgesVisible(
                !isWildMagicUserMagicSurgesVisible
              );
            }}
          >
            <HeaderIcon>
              <GiLaserSparks />
            </HeaderIcon>
            Wild Surges
            <FontAwesomeIcon
              icon={
                isWildMagicUserMagicSurgesVisible ? "caret-up" : "caret-down"
              }
              size="lg"
            />
          </SkillsHeader>
          <SkillsContainer>
            {isWildMagicUserMagicSurgesVisible && (
              <WildMagicUserWildSurgesTable />
            )}
            {isWildMagicUserMagicSurgesVisible && (
              <Skill
                dangerouslySetInnerHTML={createMarkup(
                  characterClasses[
                    classSelection
                  ].wildMagicUserMagicSurges!.join("\n")
                )}
              />
            )}
          </SkillsContainer>
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

      {/* Items for Purchase */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsItemsForPurchaseVisible(!isItemsForPurchaseVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiPriceTag />
            </HeaderIcon>
            Items For Purchase
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isItemsForPurchaseVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isItemsForPurchaseVisible && <StyledItemsForPurchase />}

      {/* Retainers */}
      <RetainersContainer>
        <RetainersHeader
          onClick={() => {
            setIsRetainersVisible(!isRetainersVisible);
          }}
        >
          <RetainersHeaderText>
            <div style={{ display: "flex" }}>
              <HeaderIcon>
                <GiSwordwoman />
              </HeaderIcon>
              Retainers
            </div>
          </RetainersHeaderText>
          <FontAwesomeIcon
            icon={isRetainersVisible ? "caret-up" : "caret-down"}
            size="lg"
            style={{ margin: "0 0.5rem" }}
          />
        </RetainersHeader>
        {isRetainersVisible && <CharismaAdjustmentsTable />}
        {isRetainersVisible && (
          <Retainers dangerouslySetInnerHTML={createMarkup(retainers)} />
        )}
      </RetainersContainer>

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


const HeaderIcon = styled.div`
  margin: 0 0.5rem;
`;


// const LanguagesContainer = styled.div``;

// const LanguagesHeader = styled.div`
//   display: flex;
//   justify-content: center;
//   font-family: "Sancreek", cursive;
//   font-size: 1.5rem;
// `;

const Language = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-line;
  padding: 0.5rem;
`;

// const AbilitiesContainer = styled.div``;

// const AbilitiesHeader = styled.div`
//   display: flex;
//   justify-content: center;
//   font-family: "Sancreek", cursive;
//   font-size: 1.5rem;
// `;

const Ability = styled.div`
  padding: 0.5rem;
  display: block;
  white-space: pre-line;
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

// const ClericTurnHeader = styled.div`
//   display: flex;
//   justify-content: center;
//   font-family: "Sancreek", cursive;
//   font-size: 1.5rem;
// `;

// const PaladinTurnContainer = styled.div`
//   display: block;
//   text-align: center;
//   padding: 0.5rem;
// `;

const PaladinTurnTable = styled.div`
  height: 26.75rem;
  background-image: url(${paladinTurningTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 23rem 27rem;
`;

// const PaladinTurnResultsTable = styled.div`
//   height: 17.75rem;
//   background-image: url(${turningTableResults});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 24rem 14rem;
// `;

// const PaladinTurnHeader = styled.div`
//   display: flex;
//   justify-content: center;
//   font-family: "Sancreek", cursive;
//   font-size: 1.5rem;
// `;

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

const SkillsContainer = styled.div`
  display: block;
  text-align: center;
  padding: 0.5rem;
`;

const SkillsHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const Skill = styled.div`
  padding: 0.5rem;
  white-space: pre-line;
`;

const ThiefSkillsChanceOfSuccessTable = styled.div`
  height: 34.75rem;
  background-image: url(${thiefSkillsChanceOfSuccess});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 25rem 33rem;
`;

const AcrobatSkillsChanceOfSuccessTable = styled.div`
  height: 34.75rem;
  background-image: url(${acrobatSkillsTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 22rem 33rem;
`;

const AssassinSkillsChanceOfSuccessTable = styled.div`
  height: 34.75rem;
  background-image: url(${assassinSkillsTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 22rem 33rem;
`;

const BarbarianSkillsChanceOfSuccessTable = styled.div`
  height: 34.75rem;
  background-image: url(${barbarianSkillsTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 22rem 33rem;
`;

const HalfOrcSkillsChanceOfSuccessTable = styled.div`
  height: 21.75rem;
  background-image: url(${halfOrcSkillsTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 22rem 22rem;
`;

const RangerTrackingChanceOfSuccessTable = styled.div`
  height: 24.75rem;
  background-image: url(${rangerTrackingTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 25rem;
`;

const PsionicistSkillsChanceOfSuccessTable = styled.div`
  height: 34.75rem;
  background-image: url(${psionicistSkillsChanceOfSuccess});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13rem 33rem;
`;

const WildMagicUserWildSurgesTable = styled.div`
  height: 34.75rem;
  background-image: url(${wildMagicUserWildSurgesTable});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13rem 33rem;
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

// const ItemsForPurchaseContainer = styled.div``;

const ItemsForPurchaseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const ItemsForPurchaseHeaderText = styled.div`
  text-align: center;
`;

const RetainersContainer = styled.div``;

const RetainersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

const RetainersHeaderText = styled.div`
  text-align: center;
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

const StyledCreatedCharacter = styled(CharacterImpl)`
  font-family: "Roboto Mono", monospace;
  background-image: url(${parchment});
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default StyledCreatedCharacter;
