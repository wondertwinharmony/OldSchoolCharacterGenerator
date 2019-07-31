import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaDungeon } from "react-icons/fa";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";
import { characterClasses } from "./characterData/classes";
import Character from "./components/character";
import CharacterSummary from "./components/characterSummary";
import parchment from "./static/parchment.png";
import { checkContainsDemihumans } from "./utils/checkContainsDemihumans";
import { getAbilityScores } from "./utils/getAbilityScores";
import { getClassOptionsToDisplay } from "./utils/getClassOptionsToDisplay";
import { getClassPrimeRequisites } from "./utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "./utils/getExperienceAdjustment";
import { getSavedCharacterData } from "./utils/getSavedCharacterData";

/**
 * @todo
 * Advanced Fantasy Old School Rules:
 *
 *  8/9 new human classes remain (icons):
 * - [x] acrobat: body balance
 * - [] needs acrobat equipment (many pole weapons)
 * - [] needs acrobat skills icon:
 * - [x] assassin: daggers
 * - [] needs assassin equipment (include poisons)
 * - [] needs assassin skills icon: bloody sword
 * - [x] barbarian: hunting horn, totem, brutal helm, barbarian, biceps, ancient sword
 * - [] needs barbarian skills icon: snake totem
 * - [] needs barbarian equipment (maybe give totemic/tribal items)
 * - [x] druid: wizard staff
 * - [] needs druid equipment (wooden shields, holy symbol)
 * - [x] illusionist: pointy hat
 * - [] needs illusionist/gnome equipment (include illusionist scrolls)
 * - [x] knight: visored helm
 * - [] needs knight equipment (no leather armor, no missile weapons)
 * - [x] paladin: templar shield
 * - [] needs paladin equipment (holy symbol)
 * - [x] ranger: compass, arrow cluster, high shot
 * - [] needs ranger equipment (more long bows)
 * - [] needs tracking table icon: paw print
 *
 *  4/6 new demihuman race-classes remain (icons):
 * - [x] duergar: heavy helm, dwarf face
 * - [] needs same equipment check as dwarves
 * - [x] gnome: wizard face
 * - [] needs illusionist/gnome equipment (include illusionist scrolls and burrowing mammal pets)
 * - [x] half-orc: orc head
 * - [] needs half-orc equipment
 * - [x] svirfneblin: war pick
 * - [] needs same equipment check as dwarves
 *
 * - [] FIX 18 ability scores not displaying 15% XP bonus
 * - [] BARD NEEDS getExperienceAdjustment added for CHA + WIS
 *
 * - Add custom kobold class, GiFoxHead (like an infravision halfling)
 * @see https://dysonlogos.blog/2011/04/13/tuckers-kobolds/
 * - Create own random treasure app tool
 *  - Consider simple random spellbook generator for Illusionist and Magic-User
 *  - Consider making Traps and Treasures tables rollable
 * - Modify aglet time keeper tool to handle 10min turns (with a note on torch/lantern burn out)
 *
 * Advanced rules for poisons, combat options, and more.
 */
interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const AppImpl: React.SFC<ImplProps> = ({ className }) => {
  const [abilityScores, setAbilityScores] = useState(getAbilityScores);
  const [isClassSelected, setIsClassSelected] = useState(false);
  const [classSelection, setClassSelection] = useState("");
  const [includeKnaveSpells, setIncludeKnaveSpells] = useState(false);
  useEffect(() => {
    setAbilityScores(abilityScores);
  }, [abilityScores]);

  const classOptions = getClassOptionsToDisplay(abilityScores);
  //currently only checking if it's https in production
  const homeURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://oldschoolknave.surge.sh/";

  if (window.location.href !== homeURL) {
    const savedData = getSavedCharacterData(window.location.href, homeURL);

    if (savedData) {
      return (
        <div className={className}>
          <Character
            classSelection={savedData && savedData.class}
            abilityScores={savedData && savedData.abilityScores}
            includeKnaveSpells={false}
            savedCharacterData={savedData}
          />
        </div>
      );
    }
  }

  return (
    <div className={className}>
      {!isClassSelected && (
        <GridContainer>
          <Ability>STR</Ability>
          <Ability>DEX</Ability>
          <Ability>CON</Ability>
          <Ability>INT</Ability>
          <Ability>WIS</Ability>
          <Ability>CHA</Ability>
          {abilityScores.map((abilityScore, index) => (
            <AbilityScore key={index}>{abilityScore}</AbilityScore>
          ))}
        </GridContainer>
      )}
      {!isClassSelected && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ClassButtonsContainer>
            <KnaveSpellOptionsContainer
              onClick={() => setIncludeKnaveSpells(!includeKnaveSpells)}
            >
              {includeKnaveSpells ? (
                <MdCheckBox size="1.5em" />
              ) : (
                <MdCheckBoxOutlineBlank size="1.5em" />
              )}
              <KnaveSpellText>Include Knave Spells</KnaveSpellText>
            </KnaveSpellOptionsContainer>
            {Object.keys(classOptions).map(classOptionKey => (
              <ClassOptionContainer key={classOptionKey}>
                <XpAdjustmentText>
                  {`XP Adjustment: ${getExperienceAdjustment(
                    abilityScores,
                    getClassPrimeRequisites(classOptionKey)
                  )}`}
                </XpAdjustmentText>
                <ButtonContainer>
                  <ClassButton
                    variant="outline-secondary"
                    onClick={() => {
                      setIsClassSelected(true);
                      setClassSelection(classOptionKey);
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2.5em",
                        color: "black"
                      }}
                    >
                      {characterClasses[classOptionKey].icon}
                    </div>
                    <ButtonText>{classOptions[classOptionKey]}</ButtonText>
                  </ClassButton>
                </ButtonContainer>
                <CharacterSummary classOption={classOptionKey} />
              </ClassOptionContainer>
            ))}
            <DemihumansText>
              {checkContainsDemihumans(classOptions) &&
                "† Yes, fantastical races are treated as classes! Old-school Dungeons & Dragons is silly like that."}
            </DemihumansText>
          </ClassButtonsContainer>
        </div>
      )}
      {isClassSelected && classSelection && (
        <Character
          classSelection={classSelection}
          abilityScores={abilityScores}
          includeKnaveSpells={includeKnaveSpells}
        />
      )}
      <CreatorsContainer>
        <FaDungeon />
        <CreatorText>
          Created by
          <CreatorName href="https://github.com/amenotu" target="_blank">
            Kristine Yabut
          </CreatorName>
          and
          <CreatorName href="https://github.com/gschrock" target="_blank">
            Gabriel Schrock
          </CreatorName>
        </CreatorText>
        <FaDungeon />
      </CreatorsContainer>
    </div>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0 0.5rem;
`;

const Ability = styled.div`
  font-family: "Sancreek", cursive;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const AbilityScore = styled.div`
  font-family: monospace;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
`;

const ClassButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 2rem 3rem;
`;

const ClassButton = styled(Button)`
  height: "4rem";
`;

const KnaveSpellOptionsContainer = styled.div`
  padding: 0 1rem;
  display: flex;
`;

const KnaveSpellText = styled.label`
  padding-left: 0.5rem;
`;

const ButtonContainer = styled.div`
  width: 275px;
`;

const ClassOptionContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const XpAdjustmentText = styled.div`
  font-weight: bold;
`;

const ButtonText = styled.div`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
`;

const DemihumansText = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CreatorsContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;

const CreatorText = styled.div`
  padding: 0 0.25rem;
  font-size: 0.5rem;
`;

const CreatorName = styled.a`
  color: black;
  padding: 0 0.25rem;
`;

const StyledApp = styled(AppImpl)`
  font-family: "Roboto Mono", monospace;
  background-image: url(${parchment});
  height: -webkit-fill-available;
  .btn {
    width: 100%;
  }
`;

export default StyledApp;
