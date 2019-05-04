import { sampleSize } from "lodash";
import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { gear } from "./characterData/gear";
import { getAbilityScores } from "./utils/getAbilityScores";
import { getClassOptionsToDisplay } from "./utils/getClassOptionsToDisplay";
import { getClassPrimeRequisites } from "./utils/getClassPrimeRequisites";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const AppImpl: React.SFC<ImplProps> = ({ className }) => {
  const abilityScores = getAbilityScores();
  const classOptions = getClassOptionsToDisplay(abilityScores);
  return (
    <div className={className}>
      <AbilityScoresContainer>
        <AbilityScore>STR</AbilityScore>
        <AbilityScore>DEX</AbilityScore>
        <AbilityScore>CON</AbilityScore>
        <AbilityScore>INT</AbilityScore>
        <AbilityScore>WIS</AbilityScore>
        <AbilityScore>CHA</AbilityScore>
      </AbilityScoresContainer>
      <AbilityScoresContainer>
        {abilityScores.map((abilityScore, index) => (
          <AbilityScore key={index}>{abilityScore}</AbilityScore>
        ))}
      </AbilityScoresContainer>
      <ClassButtonsContainer>
        {/**
        @todo
        check class options here for any demihumans, if any
        are in class options include note about how dorky
        b/x treats races as classes (make a util)
        */}
        {classOptions.map((classOption: string) => (
          <ClassOptionContainer key={classOption}>
            <ButtonContainer>
              <ClassButton variant="outline-secondary">
                {classOption}
              </ClassButton>
            </ButtonContainer>
            <ClassPrimeRequisites>
              {getClassPrimeRequisites(classOption)}
            </ClassPrimeRequisites>
          </ClassOptionContainer>
        ))}
      </ClassButtonsContainer>
      <div>{`Two random items: ${sampleSize(gear, 2)}`}</div>
    </div>
  );
};

const AbilityScore = styled.div`
  color: white;
  font-size: 1rem;
  background-color: black;
  border-right: 1px solid white;
  border-left: 1px solid white;
  padding: 0.5rem;
  width: 3rem;
  text-align: center;
`;

const AbilityScoresContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ClassButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const ButtonContainer = styled.div`
  padding: 0.75rem;
`;

const ClassOptionContainer = styled.div``;

const ClassButton = styled(Button)``;

const ClassPrimeRequisites = styled.div``;

const StyledApp = styled(AppImpl)`
  .btn {
    width: 100%;
  }
  /* display: flex;
  justify-content: center; */
`;

export default StyledApp;
