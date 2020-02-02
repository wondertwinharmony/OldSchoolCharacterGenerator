import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaDungeon } from "react-icons/fa";
import { GiRollingDices } from "react-icons/gi";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AppContext from "./AppContext";
import { characterClasses } from "./characterData/classes";
import CharacterSummary from "./components/characterSummary";
import parchment from "./static/parchment.png";
import { checkContainsDemihumans } from "./utils/checkContainsDemihumans";
import { getAbilityScores } from "./utils/getAbilityScores";
import { getClassOptionsToDisplay } from "./utils/getClassOptionsToDisplay";
import { getClassPrimeRequisites } from "./utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "./utils/getExperienceAdjustment";

/**
 *  * FIXES
 * - [] Headers need pointer mouse on hover on desktop browser
 *
 *  * NEW FEATURES TO CONSIDER
 * High Priority
 * - [] Track/Edit Name
 * - [] Track HP
 * - [] Track Ability Scores
 * - [] Track XP, and next level (levels stored as array or something)
 * - [] Track Level and Saves (possibly all handled as part of track XP)
 * - [] Track Spells
 * - [] Track Equipment
 * - [] Track Equipment NOT on character
 * - [] Track GP NOT on character
 * Low Priority
 * - [] Need cool error out display page if anything goes wrong with our app
 * - [] Perhaps always display all classes available, but gray out selection
 *      when requisites not met (maybe highlight requisite as red)
 *
 * - [] @see https://thac0rpg.blogspot.com/2019/11/the-fight-over-fighters.html
 * - "I have not tried yet giving Fighters an additional Specialization at 5th
 * level, and then an extra attack with a Specialized weapon at 10th. The original
 * BX books talk about giving extra attacks at some point, but it is vague as to
 * when to do it." OR "Not sure if i said it before, but fighter gets to use a maneuver
 * on every round a long with their attack. So would you rule that another character
 * can still trip and make their attack? Or disarm?" OR "I prefer the gambit, wherein
 * you declare a cool thing which is a bit more exciting than a standard combat action
 * (usually tied prominently to abusing the environment for extra effects etc) and make
 * three attack rolls. If all three succeed, you do your cool proposed thing with a perk.
 * If two rolls succeed, you do your cool proposed thing as stated. If one roll succeeds,
 * you fail but don't suffer any penalty. If no rolls succeed, your cool proposed thing
 * happens to yourself, instead of your target. - Gambit sounds interesting, I'd probably
 * stick to just relevant ability checks though"
 *
 * Yeah, it's been discussed here now and then.  I use a Cleave and simplified Specialization
 * option for fighters:
 * Cleave: When an opponent is slain in combat, the fighter may make an immediate free attack
 * against an adjacent opponent.
 *
 * - Add custom kobold class, GiFoxHead (like an infravision halfling)?
 * @see https://dysonlogos.blog/2011/04/13/tuckers-kobolds/
 * - Create own random treasure app tool from OSE Treasure book?
 * - Create own random sentient weapon app tool from OSE Treasure book?
 * - Consider making Traps and Treasures tables rollable
 * - Modify aglet time keeper tool to handle 10min turns (with a note on torch/lantern burn out)
 */
interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const AppImpl: React.SFC<ImplProps> = ({ className }) => {
  let history = useHistory();
  const {
    setAbilityScores,
    abilityScores,
    setKnaveSpells,
    includeKnaveSpells,
    setClassSelection,
    classSelection,
    setSavedCharacterData,
    savedCharacterData
  } = useContext(AppContext);
  const [isClassSelected] = useState(false);

  const classOptions = getClassOptionsToDisplay(abilityScores);

  /**
   * Resets savedCharacterData and classSelection in the main App View, to ensure that a new character
   * is generated after a class is selected. Without the reset, choosing the same class after returning
   * to the main App View via the back button on the browser will re-render the character that may have
   * been saved in savedCharacterData when the Permalink button was clicked.
   */
  useEffect(() => {
    if (savedCharacterData || classSelection.length > 0) {
      setClassSelection("");
      setSavedCharacterData(undefined);
    }
  });

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
            <RerollAbilityScoresContainer
              onClick={() => {
                setAbilityScores(getAbilityScores());
              }}
            >
              <RollButton variant="outline-secondary">
                <RollButtonIcon>
                  <GiRollingDices />
                </RollButtonIcon>
                <RollButtonText>Reroll Ability Scores</RollButtonText>
              </RollButton>
            </RerollAbilityScoresContainer>
            <KnaveSpellOptionsContainer
              onClick={() => setKnaveSpells(!includeKnaveSpells)}
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
                    getClassPrimeRequisites(classOptionKey),
                    classOptionKey
                  )}`}
                </XpAdjustmentText>
                <ButtonContainer>
                  <ClassButton
                    variant="outline-secondary"
                    onClick={() => {
                      setClassSelection(classOptionKey);
                      history.push(
                        `/generatedCharacter/${classOptions[classOptionKey]}&${abilityScores}&${includeKnaveSpells}`
                      );
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

const RerollAbilityScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 2rem 3rem;
`;

const RollButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  padding: 0.5rem 0;
  color: black;
`;

const RollButtonText = styled.div`
  color: black;
  font-weight: bold;
  font-size: 1rem;
`;

const RollButton = styled(Button)`
  height: "4rem";
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
