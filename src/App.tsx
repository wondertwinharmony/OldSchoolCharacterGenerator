import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaDungeon } from "react-icons/fa";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";
import { characterClasses } from "./characterData/classes";
import CharacterSummary from "./components/characterSummary";
import parchment from "./static/parchment.png";
import { checkContainsDemihumans } from "./utils/checkContainsDemihumans";
import { getClassOptionsToDisplay } from "./utils/getClassOptionsToDisplay";
import { getClassPrimeRequisites } from "./utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "./utils/getExperienceAdjustment";
import { useHistory } from "react-router-dom";

/**
 * @todo
 * Advanced Fantasy Old School Rules:
 *
 *  8/9 new human classes remain (icons):
 * acrobat: body balance
 * assassin: daggers
 * barbarian: barbarian, biceps, ancient sword, brutal helm
 * druid: wizard staff
 * illusionist: pointy hat
 * knight: visored helm
 * paladin: templar shield
 * ranger: compass, arrow cluster, high shot
 *
 *  4/6 new demihuman race-classes remain (icons):
 * duergar: dwarf face, heavy helm
 * gnome: wizard face
 * half-orc: orc head
 * svirfneblin: war pick
 *
 * - BARD NEEDS getExperienceAdjustment added for CHA + WIS
 *
 * - Add custom kobold class, GiFoxHead (like an infravision halfling)
 * @see https://dysonlogos.blog/2011/04/13/tuckers-kobolds/
 * - Create own random treasure app tool
 *  - Consider simple random spellbook generator for Illusionist and Magic-User
 *  - Consider making Courtney Campbell's Traps and Treasures
 *    - excellent treasure tables rollable
 * - Modify aglet time keeper tool to handle 10min turns (with a note on torch/lantern burn out)
 *
 * Advanced rules for poisons, combat options, and more.
 */
interface Props {
  className?: string;
  abilityScores: number[];
}

interface ImplProps extends Props {}

const AppImpl: React.SFC<ImplProps> = ({ className, abilityScores }) => {
  let history = useHistory();
  const [isClassSelected] = useState(false);
  const [includeKnaveSpells, setIncludeKnaveSpells] = useState(false);

  const classOptions = getClassOptionsToDisplay(abilityScores);

  // console.log("Location: ", getLocation, "\nhist: ", history, "\nparams: ", params);
  console.log("\nhist: ", history);
  console.log("abilityScores: ", abilityScores);
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
                      history.push(`/generatedCharacter/${classOptions[classOptionKey]}&${abilityScores}&${includeKnaveSpells}`);
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
