import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Character from "./components/character";
import parchment from "./static/parchment.png";
import { checkContainsDemihumans } from "./utils/checkContainsDemihumans";
import { getAbilityScores } from "./utils/getAbilityScores";
import { getClassOptionsToDisplay } from "./utils/getClassOptionsToDisplay";
import { getClassPrimeRequisites } from "./utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "./utils/getExperienceAdjustment";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

/**
 * @todo background image shouldn't shrink with tabs ->
 * apply to root element?
 *
 * @todo PERMALINKING!
 * use window.location to grab url, then parse for info
 * Info needed would be:
 * - abilityScores
 * - classSelection
 * - spell
 * - equipment
 * - traits
 * - name
 * - languages
 *
 * - ac can be recalculated
 *
 * Flow would be:
 * - on Character component display a permalink button
 *   to save the character information as a long url
 *   (possibly hash url)
 *   Clicking on the permalink button will redirect to
 *   constructed url immediately -> user can now bookmark
 *   this url to save the character data
 * - on App component load, use a util to check the url
 *   for information needed to rehydrate state of a
 *   character -> see above info needed
 *   (possibly decrypt hash url to do this)
 */

const AppImpl: React.SFC<ImplProps> = ({ className }) => {
  const [abilityScores, setAbilityScores] = useState(getAbilityScores);
  const [isClassSelected, setIsClassSelected] = useState(false);
  const [classSelection, setClassSelection] = useState("");
  const [includeKnaveSpells, setIncludeKnaveSpells] = useState(false);
  useEffect(() => {
    setAbilityScores(abilityScores);
  }, [abilityScores]);

  const classOptions = getClassOptionsToDisplay(abilityScores);
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
        <ClassButtonsContainer>
          <KnaveSpellOptionsContainer
            onClick={() => setIncludeKnaveSpells(!includeKnaveSpells)}
          >
            <input
              type="checkbox"
              onChange={() => {}}
              checked={includeKnaveSpells}
            />
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
                  <ButtonText>{classOptions[classOptionKey]}</ButtonText>
                </ClassButton>
              </ButtonContainer>
            </ClassOptionContainer>
          ))}
          <DemihumansText>
            {checkContainsDemihumans(classOptions) &&
              "† Yes, fantastical races are treated as classes! Old-school Dungeons & Dragons is silly like that."}
          </DemihumansText>
        </ClassButtonsContainer>
      )}
      {isClassSelected && classSelection && (
        <Character
          classSelection={classSelection}
          abilityScores={abilityScores}
          includeKnaveSpells={includeKnaveSpells}
        />
      )}
    </div>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0 0.25rem;
  padding: 0 1rem;
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
  padding: 2rem 3rem;
`;

const KnaveSpellOptionsContainer = styled.div`
  padding: 0 1rem;
  display: inline;
`;

const KnaveSpellText = styled.label`
  padding-left: 0.5rem;
`;

const ButtonContainer = styled.div``;

const ClassOptionContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const XpAdjustmentText = styled.div`
  font-weight: bold;
`;

const ClassButton = styled(Button)``;

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

const StyledApp = styled(AppImpl)`
  font-family: "Roboto Mono", monospace;
  background-image: url(${parchment});
  .btn {
    width: 100%;
  }
`;

export default StyledApp;
